import type { Metadata } from "next";
import { AIWidgetPanel } from "@/components/AIWidgetPanel";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Top Atlas Chiropractic Austin TX",
  description:
    "Get in touch with Dr. Shelley Lorenzen at Top Atlas Chiropractic. Chat with our AI assistant, send a message, or email directly. NUCCA upper cervical care in Austin, TX.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-[#1B3A2E] pt-32 pb-20 sm:pb-28 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(27,58,46,0.80),rgba(27,58,46,0.80)),url(/images/contact-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-4">
            Get in Touch
          </p>
          <h1 className="font-[var(--font-cormorant)] text-[clamp(2rem,6vw,4.5rem)] font-light text-white leading-tight mb-6">
            Start Your Alignment Journey
          </h1>
          <p className="mx-auto max-w-xl text-white/60 leading-relaxed">
            Have questions about NUCCA care? Ready to schedule your first visit? Dr. Shelley&apos;s AI assistant can help right now, or reach out directly.
          </p>
        </div>
      </section>

      {/* AI Widget Primary */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Widget */}
            <div>
              <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
                Instant Help
              </p>
              <h2 className="font-[var(--font-cormorant)] text-2xl sm:text-3xl font-light text-[#1C2B24] mb-6">
                Ask Dr. Shelley&apos;s Assistant
              </h2>
              <AIWidgetPanel variant="inline" />
            </div>

            {/* Contact Form */}
            <div>
              <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
                Send a Message
              </p>
              <h2 className="font-[var(--font-cormorant)] text-2xl sm:text-3xl font-light text-[#1C2B24] mb-6">
                Or Reach Out Directly
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#F2EDE2] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="rounded-2xl bg-white p-8">
              <div className="h-12 w-12 rounded-full bg-[#2A5441]/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-lg font-medium text-[#1C2B24] mb-1">Email</h3>
              <a
                href="mailto:drshelley@topatlaschiropractic.com"
                className="text-sm text-[#C4813A] hover:text-[#E8A85A] transition-colors break-all"
              >
                drshelley@topatlaschiropractic.com
              </a>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <div className="h-12 w-12 rounded-full bg-[#2A5441]/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-lg font-medium text-[#1C2B24] mb-1">Location</h3>
              <p className="text-sm text-[#6B7A70]">Austin, TX</p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <div className="h-12 w-12 rounded-full bg-[#2A5441]/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-lg font-medium text-[#1C2B24] mb-1">Follow Along</h3>
              <a
                href="https://www.instagram.com/topatlaschiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#C4813A] hover:text-[#E8A85A] transition-colors"
              >
                @topatlaschiro
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
