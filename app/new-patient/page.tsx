import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient Information | Top Atlas Chiropractic Austin TX",
  description:
    "What to expect at your first NUCCA visit with Dr. Shelley Lorenzen. 90-minute new patient visit, $575 investment. Follow-ups: $85. Cash-only practice for focused, uncompromised care.",
};

const FAQ_ITEMS = [
  {
    q: "What should I wear to my first visit?",
    a: "Wear comfortable clothing that lets you lie on your side. Avoid heavy necklaces or earrings that could interfere with X-rays. If you have prior imaging, bring it or send it ahead of time.",
  },
  {
    q: "Will I feel different after my first adjustment?",
    a: "Many patients notice lightness, better range of motion, or a sense of relaxation. Some feel mild soreness as the body settles into its new alignment. Both are normal.",
  },
  {
    q: "Do you work with medical doctors?",
    a: "Yes. NUCCA complements traditional medical care. Dr. Shelley often works alongside neurologists, orthopedists, and physical therapists, and she is happy to coordinate with your referring physician.",
  },
  {
    q: "Can I use my HSA or FSA?",
    a: "Yes. Chiropractic care is usually HSA/FSA eligible. You will receive a superbill after each visit to submit for reimbursement.",
  },
  {
    q: "What if I've had a bad experience with chiropractic before?",
    a: "NUCCA is fundamentally different from traditional chiropractic. There is no cracking, twisting, or forceful manipulation. If a past experience left you wary, you are not alone. Many of Dr. Shelley's patients came to NUCCA because they wanted a gentler approach.",
  },
];

export default function NewPatientPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B3A2E] pt-32 pb-20 sm:pb-28">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/dr-shelley-xray.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="site-shell relative z-10 text-center">
          <p className="section-eyebrow mb-4">
            Your First Visit
          </p>
          <h1 className="mx-auto mb-6 max-w-4xl font-[var(--font-cormorant)] text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-[1.02] text-white">
            90 Minutes That Could<br />
            Change Everything
          </h1>
          <p className="copy-on-dark mx-auto">
            {"Your first visit is a 90-minute assessment built to understand your anatomy, identify atlas misalignment, and deliver your first precision NUCCA correction."}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-4">
              What to Expect
            </h2>
            <p className="text-[#6B7A70] max-w-lg mx-auto">
              Every step is designed for precision, comfort, and clarity.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                time: "Minutes 1-20",
                title: "Health History & Consultation",
                desc: "Dr. Shelley starts with your story: symptoms, health history, lifestyle, what you have tried, and what still is not working. That conversation guides everything that follows.",
              },
              {
                time: "Minutes 20-40",
                title: "Specialized X-Ray Analysis",
                desc: "Precision X-rays from specific angles reveal the exact position and rotation of your atlas. These are not standard chiropractic X-rays. They are built for NUCCA analysis.",
              },
              {
                time: "Minutes 40-55",
                title: "Analysis & Correction Calculation",
                desc: "Using your X-rays, Dr. Shelley calculates the exact vector, angle, and force for your correction. Your adjustment is mathematically tailored to your anatomy.",
              },
              {
                time: "Minutes 55-70",
                title: "Your First NUCCA Adjustment",
                desc: "You lie on your side on a specialized table while Dr. Shelley applies a gentle touch behind your ear. No cracking. No twisting. The correction takes seconds.",
              },
              {
                time: "Minutes 70-90",
                title: "Post-Adjustment X-Rays & Review",
                desc: "Follow-up X-rays confirm the structural change. Dr. Shelley reviews your before-and-after images, explains what changed, and outlines your care plan.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-6 sm:gap-8"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="h-10 w-10 rounded-full border-2 border-[#C4813A] flex items-center justify-center">
                    <span className="text-xs font-medium text-[#C4813A]">{i + 1}</span>
                  </div>
                  {i < 4 && <div className="w-px h-full bg-[#C4813A]/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[#C4813A] font-medium">
                    {step.time}
                  </span>
                  <h3 className="font-[var(--font-cormorant)] text-xl sm:text-2xl font-medium text-[#1C2B24] mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7A70] leading-relaxed text-left">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#1B3A2E] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
              Your Investment
            </p>
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
              Clear Pricing
            </h2>
            <p className="copy-on-dark-sm mx-auto max-w-lg">
              Top Atlas Chiropractic is cash-only. No insurance middlemen. No surprise bills. Just focused care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <h3 className="font-[var(--font-cormorant)] text-xl text-white mb-2">
                New Patient Visit
              </h3>
              <div className="font-[var(--font-cormorant)] text-5xl font-light text-[#C4813A] my-4">
                $575
              </div>
              <ul className="space-y-2 text-sm text-white/75 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  90-minute comprehensive visit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Specialized X-rays
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Custom correction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  First NUCCA adjustment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Post-adjustment review
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <h3 className="font-[var(--font-cormorant)] text-xl text-white mb-2">
                Follow-Up Visit
              </h3>
              <div className="font-[var(--font-cormorant)] text-5xl font-light text-[#C4813A] my-4">
                $85
              </div>
              <ul className="space-y-2 text-sm text-white/75 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  30-minute visit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Alignment check
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Adjustment if needed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Progress check
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  HSA/FSA eligible
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-white/40 mt-8">
            HSA/FSA accepted. Superbill provided.
          </p>
        </div>
      </section>

      {/* Why Cash Only */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-6 text-center">
            Why Cash-Only Means Better Care
          </h2>
          <div className="space-y-4 text-[#6B7A70] leading-relaxed text-left">
            <p>
              {'Insurance companies decide how many visits you get, how long they last, and which X-rays are "medically necessary." They optimize for cost, not outcomes.'}
            </p>
            <p>
              {"At Top Atlas Chiropractic, Dr. Shelley decides what you need based on your anatomy, symptoms, and goals. Your first visit is 90 minutes because proper NUCCA evaluation takes time."}
            </p>
            <p>
              Cash-only care means no denied claims, surprise bills, treatment limits, or pre-authorization delays. Just the care you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F2EDE2] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
              Questions Before Your Visit
            </p>
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24]">
              First Visit FAQ
            </h2>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-[var(--font-cormorant)] text-lg font-medium text-[#1C2B24] mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-[#6B7A70] leading-relaxed text-left">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A2E] py-20" data-animate>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
            Your Atlas is Waiting
          </h2>
          <p className="copy-on-dark-sm mx-auto mb-8 max-w-xl">
            19 years of expertise. 90 minutes of focused care. One precise correction that could change everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:drshelley@topatlaschiropractic.com"
              className="btn-primary w-full sm:w-auto"
            >
              Email to Book
            </a>
            <Link
              href="/contact"
              className="btn-secondary-dark w-full sm:w-auto"
            >
              Contact Options
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
