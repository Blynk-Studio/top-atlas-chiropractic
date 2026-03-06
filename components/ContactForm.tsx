"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#2A5441]/5 p-8 text-center">
        <div className="h-12 w-12 rounded-full bg-[#2A5441]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[var(--font-cormorant)] text-xl font-medium text-[#1C2B24] mb-2">
          Message Received
        </h3>
        <p className="text-sm text-[#6B7A70]">
          Dr. Shelley will get back to you within one business day. For immediate assistance, use the AI assistant or email directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-[0.1em] text-[#6B7A70] mb-1.5 font-medium">
          Your Name
        </label>
        <input
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C2B24] focus:outline-none focus:border-[#C4813A] transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.1em] text-[#6B7A70] mb-1.5 font-medium">
          Email Address
        </label>
        <input
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C2B24] focus:outline-none focus:border-[#C4813A] transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.1em] text-[#6B7A70] mb-1.5 font-medium">
          Your Message
        </label>
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C2B24] focus:outline-none focus:border-[#C4813A] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[#C4813A] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-[1.02]"
      >
        Send Your Message
      </button>
    </form>
  );
}
