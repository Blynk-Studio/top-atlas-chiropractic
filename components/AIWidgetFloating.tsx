"use client";

import { useState } from "react";
import { AIWidgetPanel } from "./AIWidgetPanel";

export function AIWidgetFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:left-auto sm:w-[380px] max-h-[80vh] z-50 flex flex-col">
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/90 p-1.5 text-gray-500 shadow-md hover:text-gray-800 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <AIWidgetPanel variant="floating" />
          </div>
        </div>
      )}

      {/* FAB — pill button with mic icon + label */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-4 pr-5 h-12 rounded-full shadow-lg font-semibold text-sm text-white transition-all duration-300 active:scale-[0.93] ${
          isOpen ? "bg-[#1B3A2E]" : "bg-[#C4813A]"
        }`}
        aria-label={isOpen ? "Close AI advisor" : "Open AI advisor"}
      >
        {isOpen ? (
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        )}
        <span>AI Advisor</span>
      </button>
    </>
  );
}
