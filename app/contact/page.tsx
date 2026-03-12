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
        className="relative overflow-hidden bg-[#1B3A2E] pt-32 pb-20 sm:pb-28 hero-bg-fade"
        style={{
          backgroundImage: 'linear-gradient(rgba(27,58,46,0.80),rgba(27,58,46,0.80)),url(/images/contact-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="site-shell relative z-10 text-center">
          <p className="section-eyebrow mb-4">
            Get in Touch
          </p>
          <h1 className="mx-auto mb-6 max-w-4xl font-[var(--font-cormorant)] text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.02] text-white">
            Start Here
          </h1>
          <p className="copy-on-dark mx-auto">
            Ask a question now or open a direct email draft to Dr. Shelley. If you&apos;re deciding whether NUCCA is a fit, this page gets you to the next step fast.
          </p>
        </div>
      </section>

      {/* AI Widget Primary */}
      <section className="site-section bg-[#FAF7F0]" data-animate>
        <div className="site-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Widget */}
            <div>
              <p className="section-eyebrow">
                Instant Help
              </p>
              <h2 className="mb-4 font-[var(--font-cormorant)] text-2xl font-light leading-tight text-[#1C2B24] sm:text-3xl">
                Ask the Assistant
              </h2>
              <p className="copy-muted-sm mb-6 max-w-xl">
                Best for quick questions about symptoms, NUCCA, pricing, or your first visit.
              </p>
              <AIWidgetPanel variant="inline" />
            </div>

            {/* Contact Form */}
            <div>
              <p className="section-eyebrow">
                Send a Message
              </p>
              <h2 className="mb-4 font-[var(--font-cormorant)] text-2xl font-light leading-tight text-[#1C2B24] sm:text-3xl">
                Email Dr. Shelley
              </h2>
              <p className="copy-muted-sm mb-6 max-w-xl">
                Prefer email? The form below opens a pre-filled draft so you stay in control of what gets sent.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="site-section bg-[#F2EDE2]" data-animate>
        <div className="site-shell">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div className="card-surface p-8">
              <div className="h-12 w-12 rounded-full bg-[#2A5441]/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-lg font-medium text-[#1C2B24] mb-1">Email</h3>
              <a
                href="mailto:drshelley@topatlaschiropractic.com"
                className="inline-flex min-h-11 items-center justify-center break-all text-sm text-[#C4813A] transition-colors hover:text-[#E8A85A]"
              >
                drshelley@topatlaschiropractic.com
              </a>
            </div>
            <div className="card-surface p-8">
              <div className="h-12 w-12 rounded-full bg-[#2A5441]/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#2A5441]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-lg font-medium text-[#1C2B24] mb-1">Location</h3>
              <p className="copy-muted-sm mx-auto">Austin, TX</p>
            </div>
            <div className="card-surface p-8">
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
                className="inline-flex min-h-11 items-center justify-center text-sm text-[#C4813A] transition-colors hover:text-[#E8A85A]"
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
