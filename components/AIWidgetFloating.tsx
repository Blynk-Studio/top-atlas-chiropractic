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

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-[#1B3A2E] rotate-45" : "bg-[#C4813A]"
        }`}
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
