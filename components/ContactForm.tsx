"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = `mailto:drshelley@topatlaschiropractic.com?subject=${encodeURIComponent(
    `New inquiry from ${formState.name || "Top Atlas website"}`
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoHref;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-surface border border-[#2A5441]/10 bg-[#2A5441]/5 p-8 text-center">
        <div className="h-12 w-12 rounded-full bg-[#2A5441]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[var(--font-cormorant)] text-xl font-medium text-[#1C2B24] mb-2">
          Your Draft Is Ready
        </h3>
        <p className="copy-muted-sm mx-auto mb-5 max-w-md">
          We open your email app so your message never disappears into a form. If the draft did not open, use the button below or email Dr. Shelley directly.
        </p>
        <a href={mailtoHref} className="btn-primary w-full sm:w-auto">
          Open Draft Again
        </a>
        <p className="mt-4 text-sm text-[#6B7A70]">
          Or email <a href="mailto:drshelley@topatlaschiropractic.com" className="font-medium text-[#C4813A]">drshelley@topatlaschiropractic.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs uppercase tracking-[0.1em] text-[#6B7A70] mb-1.5 font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C2B24] transition-colors focus:border-[#C4813A] focus:outline-none"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs uppercase tracking-[0.1em] text-[#6B7A70] mb-1.5 font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C2B24] transition-colors focus:border-[#C4813A] focus:outline-none"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs uppercase tracking-[0.1em] text-[#6B7A70] mb-1.5 font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C2B24] transition-colors focus:border-[#C4813A] focus:outline-none resize-none"
        />
      </div>
      <p className="copy-muted-sm">
        Submit opens a pre-filled email to Dr. Shelley.
      </p>
      <button
        type="submit"
        className="btn-primary w-full"
      >
        Open Draft
      </button>
    </form>
  );
}
