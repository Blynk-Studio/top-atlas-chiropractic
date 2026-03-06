import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient Information | Top Atlas Chiropractic Austin TX",
  description:
    "What to expect at your first NUCCA visit with Dr. Shelley Lorenzen. 90-minute new patient visit, $575 investment. Follow-ups: $85. Cash-only practice for focused, uncompromised care.",
};

const FAQ_ITEMS = [
  {
    q: "What should I wear to my first visit?",
    a: "Comfortable clothing that allows you to lie on your side. Avoid heavy necklaces or earrings that could interfere with X-ray imaging. If you have previous imaging (MRI, CT, X-rays), bring them or have them sent ahead of time.",
  },
  {
    q: "Will I feel different after my first adjustment?",
    a: "Many patients feel immediate lightness, improved range of motion, or a sense of relaxation. Some experience mild soreness as the body begins to shift into its new alignment. Both responses are normal and expected.",
  },
  {
    q: "Do you work with medical doctors?",
    a: "Absolutely. NUCCA complements traditional medical care. Dr. Shelley often works alongside neurologists, orthopedists, and physical therapists to provide comprehensive care. If you have a referring physician, she's happy to coordinate with them.",
  },
  {
    q: "Can I use my HSA or FSA?",
    a: "Yes. Chiropractic care is an eligible expense under most Health Savings Accounts and Flexible Spending Accounts. You'll receive a superbill after each visit that you can submit to your HSA/FSA provider for reimbursement.",
  },
  {
    q: "What if I've had a bad experience with chiropractic before?",
    a: "NUCCA is fundamentally different from traditional chiropractic. There is no cracking, twisting, or forceful manipulation. If your previous experience left you wary, you're not alone. Many of Dr. Shelley's patients came to NUCCA specifically because they wanted a gentler approach.",
  },
];

export default function NewPatientPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A2E] pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-4">
            Your First Visit
          </p>
          <h1 className="font-[var(--font-cormorant)] text-[clamp(2rem,6vw,4.5rem)] font-light text-white leading-tight mb-6">
            90 Minutes That Could<br />
            Change Everything
          </h1>
          <p className="mx-auto max-w-xl text-white/60 leading-relaxed">
            Your first visit is not a rush job. It's a 90-minute, comprehensive assessment designed to understand your unique anatomy, identify atlas misalignment, and deliver your first precision NUCCA correction.
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
              Every step is designed to ensure precision, comfort, and results.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                time: "Minutes 1-20",
                title: "Health History & Consultation",
                desc: "Dr. Shelley wants to understand your story. Not just your symptoms, but your history, your lifestyle, what you've tried, and what hasn't worked. This conversation shapes everything that follows.",
              },
              {
                time: "Minutes 20-40",
                title: "Specialized X-Ray Analysis",
                desc: "Precision X-rays taken from specific angles reveal the exact position and rotation of your atlas vertebra. These images are not standard chiropractic X-rays. They're engineered for NUCCA analysis.",
              },
              {
                time: "Minutes 40-55",
                title: "Analysis & Correction Calculation",
                desc: "Using your X-ray data, Dr. Shelley calculates the precise vector, angle, and force needed for your correction. This is the engineering phase: your adjustment is mathematically customized to your anatomy.",
              },
              {
                time: "Minutes 55-70",
                title: "Your First NUCCA Adjustment",
                desc: "You lie on your side on a specialized table. Dr. Shelley applies a gentle, sustained touch behind your ear. No cracking. No twisting. The entire correction takes seconds, but the preparation behind it took 19 years.",
              },
              {
                time: "Minutes 70-90",
                title: "Post-Adjustment X-Rays & Review",
                desc: "Immediately after adjustment, follow-up X-rays confirm the structural change. Dr. Shelley reviews your before-and-after images with you, explains what changed, and discusses your personalized care plan going forward.",
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
              Transparent, Straightforward Pricing
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-sm sm:text-base">
              Top Atlas Chiropractic is a cash-only practice. No insurance middlemen. No surprise bills. Just focused, uncompromised care.
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
              <ul className="space-y-2 text-sm text-white/50 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  90-minute comprehensive visit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Specialized X-ray analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Custom correction calculation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  First NUCCA adjustment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  Post-adjustment imaging & review
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
              <ul className="space-y-2 text-sm text-white/50 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  30-minute focused visit
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
                  Progress assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4813A] mt-0.5">&#10003;</span>
                  HSA/FSA eligible
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-white/40 mt-8">
            HSA and FSA accepted. Superbill provided for reimbursement.
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
              Insurance companies decide how many visits you get, how long each visit lasts, and which X-rays are "medically necessary." They optimize for cost, not for outcomes.
            </p>
            <p>
              At Top Atlas Chiropractic, Dr. Shelley decides what you need based on your anatomy, your symptoms, and your goals. Your first visit is 90 minutes, because that's what proper NUCCA evaluation requires. No insurance company would approve that.
            </p>
            <p>
              Cash-only practice means: no denied claims, no surprise bills, no treatment limitations, no pre-authorization delays. Just the care you need, when you need it, for exactly as long as it takes.
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
              New Patient FAQ
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
          <p className="text-white/50 mb-8 text-sm sm:text-base">
            19 years of expertise. 90 minutes of focused attention. One precise correction that could change everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:drshelley@topatlaschiropractic.com"
              className="w-full sm:w-auto rounded-full bg-[#C4813A] px-8 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
            >
              Email Dr. Shelley to Book
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full border-2 border-white/20 px-8 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              More Ways to Reach Us
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
