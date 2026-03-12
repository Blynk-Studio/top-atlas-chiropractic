"use client";

import { useState, useRef, useCallback } from "react";

interface Message {
  role: "user" | "agent";
  content: string;
}

interface AIWidgetPanelProps {
  variant?: "floating" | "inline";
}

export function AIWidgetPanel({ variant = "floating" }: AIWidgetPanelProps) {
  const [activeTab, setActiveTab] = useState<"chat" | "voice">("voice");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      content:
        "Hi, I'm Dr. Shelley's assistant. I can answer questions about NUCCA care, symptoms, pricing, and your first visit. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const retellClientRef = useRef<{ stopCall: () => void } | null>(null);

  const scrollToBottom = useCallback(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages.length]);

  const ensureChatSession = useCallback(async (): Promise<string | null> => {
    if (chatId) return chatId;
    try {
      const res = await fetch("/api/chat/start", { method: "POST" });
      const data = await res.json();
      if (data.chat_id) {
        setChatId(data.chat_id);
        return data.chat_id;
      }
    } catch {
      // silent fail
    }
    return null;
  }, [chatId]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    setTimeout(scrollToBottom, 50);

    const sessionId = await ensureChatSession();
    if (!sessionId) {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content:
            "I'm having trouble connecting right now. Please email drshelley@topatlaschiropractic.com or try again in a moment.",
        },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/chat/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: sessionId, content: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "agent", content: data.response || "Sorry, I couldn't process that." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content: "Something went wrong. Please try again.",
        },
      ]);
    }

    setIsLoading(false);
    setTimeout(scrollToBottom, 50);
  }, [input, isLoading, ensureChatSession, scrollToBottom]);

  const startVoiceCall = useCallback(async () => {
    if (isCallActive) return;
    try {
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const client = new RetellWebClient();

      const res = await fetch("/api/chat/voice", { method: "POST" });
      const data = await res.json();

      if (data.access_token) {
        retellClientRef.current = client;
        await client.startCall({ accessToken: data.access_token });
        setIsCallActive(true);

        client.on("call_ended", () => { setIsCallActive(false); retellClientRef.current = null; });
        client.on("error", () => { setIsCallActive(false); retellClientRef.current = null; });
      }
    } catch {
      setIsCallActive(false);
    }
  }, [isCallActive]);

  const isInline = variant === "inline";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ${
        isInline ? "h-[34rem] sm:h-[36rem]" : "h-full"
      }`}
    >
      {/* Tabs */}
      <div className="flex border-b border-gray-100" role="tablist" aria-label="Assistant mode">
        <button
          onClick={() => setActiveTab("chat")}
          role="tab"
          id={`${variant}-chat-tab`}
          aria-selected={activeTab === "chat"}
          aria-controls={`${variant}-chat-panel`}
          className={`flex min-h-11 flex-1 items-center justify-center py-3 text-sm font-medium transition-colors ${
            activeTab === "chat"
              ? "text-[#2A5441] border-b-2 border-[#C4813A]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab("voice")}
          role="tab"
          id={`${variant}-voice-tab`}
          aria-selected={activeTab === "voice"}
          aria-controls={`${variant}-voice-panel`}
          className={`flex min-h-11 flex-1 items-center justify-center py-3 text-sm font-medium transition-colors ${
            activeTab === "voice"
              ? "text-[#2A5441] border-b-2 border-[#C4813A]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Voice
        </button>
      </div>

      {activeTab === "chat" ? (
        <>
          {/* Messages */}
          <div
            id={`${variant}-chat-panel`}
            role="tabpanel"
            aria-labelledby={`${variant}-chat-tab`}
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto p-4"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${
                    msg.role === "user"
                      ? "bg-[#2A5441] text-white"
                      : "bg-[#F2EDE2] text-[#1C2B24]"
                  }`}
                >
                  {msg.content.split(/(https?:\/\/[^\s]+)/g).map((part, idx) =>
                    /^https?:\/\//.test(part) ? (
                      <a
                        key={idx}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-current underline-offset-2 opacity-80 hover:opacity-100"
                      >
                        View link →
                      </a>
                    ) : (
                      part
                    )
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#F2EDE2] rounded-2xl px-4 py-3 text-sm text-[#6B7A70]">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about NUCCA..."
                className="min-h-11 flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm text-[#1C2B24] transition-colors placeholder:text-gray-400 focus:border-[#C4813A] focus:outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="btn-primary min-w-20 px-4 py-2.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Voice tab */
        <div
          id={`${variant}-voice-panel`}
          role="tabpanel"
          aria-labelledby={`${variant}-voice-tab`}
          className="flex flex-1 flex-col items-center justify-center p-8 text-center"
        >
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all ${
              isCallActive
                ? "bg-red-500/10 animate-pulse"
                : "bg-[#2A5441]/10"
            }`}
          >
            <svg
              className={`w-8 h-8 ${isCallActive ? "text-red-500" : "text-[#2A5441]"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
          <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-[#1C2B24] mb-2">
            {isCallActive ? "You're talking now" : "Talk to the Assistant"}
          </h3>
          <p className="text-sm text-[#6B7A70] mb-6">
            {isCallActive
              ? "Your call is live. Click below to end it."
              : "Ask about NUCCA care, symptoms, pricing, or your first visit."}
          </p>
          <button
            onClick={isCallActive ? () => { retellClientRef.current?.stopCall(); setIsCallActive(false); retellClientRef.current = null; } : startVoiceCall}
            className={`min-h-11 rounded-full px-8 py-3 text-sm font-medium transition-all ${
              isCallActive
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-[#C4813A] text-white hover:bg-[#E8A85A] hover:scale-105"
            }`}
          >
            {isCallActive ? "End Call" : "Start Call"}
          </button>
        </div>
      )}
    </div>
  );
}
