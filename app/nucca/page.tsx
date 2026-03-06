import Image from "next/image";
import Link from "next/link";
import { AtlasVisual } from "@/components/AtlasVisual";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is NUCCA? | Upper Cervical Chiropractic Austin | Top Atlas Chiropractic",
  description:
    "NUCCA is the most precise chiropractic technique, focusing on the atlas vertebra (C1). No cracking, no twisting. Learn how gentle atlas corrections address headaches, vertigo, and chronic pain.",
};

const FAQ_ITEMS = [
  {
    q: "Does a NUCCA adjustment hurt?",
    a: "Not at all. Most patients describe the adjustment as a gentle pressure at the base of the skull. There is no cracking, twisting, or popping. Many patients are surprised by how subtle it feels, but the X-rays taken after the adjustment show measurable structural change.",
  },
  {
    q: "How is NUCCA different from regular chiropractic?",
    a: "Traditional chiropractic adjusts multiple segments of the spine using manual force. NUCCA focuses exclusively on the C1 atlas vertebra using precise, calculated corrections based on X-ray analysis. The correction is gentle and specific, with the goal that one small alignment change at the top cascades correction down the entire spine.",
  },
  {
    q: "How many visits will I need?",
    a: "Every patient is different. Some feel dramatic improvement after one visit. Most patients need a series of visits as the body learns to hold the correction. Dr. Shelley will discuss your specific timeline during your first visit based on your X-ray findings.",
  },
  {
    q: "Why don't you accept insurance?",
    a: "Insurance companies dictate visit frequency, limit X-rays, and restrict the time a doctor can spend with you. Cash-only practice means Dr. Shelley decides what you need, not an insurance company. Your first visit is 90 minutes. Try getting that with insurance.",
  },
  {
    q: "Is NUCCA safe for children?",
    a: "Yes. The gentle nature of NUCCA makes it appropriate for patients of all ages. Children who have experienced birth trauma, falls, or sports impacts can benefit from atlas alignment assessment.",
  },
  {
    q: "What conditions does NUCCA help with?",
    a: "NUCCA has been shown to help with chronic headaches, migraines, vertigo, neck pain, TMJ disorders, concussion recovery, sleep disruption, and whole-body tension. When the atlas is misaligned, it can affect the brainstem and nervous system, contributing to a wide range of symptoms.",
  },
];

export default function NuccaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A2E] pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-4">
            The NUCCA Technique
          </p>
          <h1 className="font-[var(--font-cormorant)] text-[clamp(2rem,6vw,4.5rem)] font-light text-white leading-tight mb-6">
            One Bone. One Correction.<br />
            Everything Changes.
          </h1>
          <p className="mx-auto max-w-xl text-white/60 leading-relaxed">
            NUCCA stands for National Upper Cervical Chiropractic Association. It's the most specialized chiropractic technique in existence, focused entirely on the atlas vertebra, the C1, the ring-shaped bone where your skull meets your spine.
          </p>
        </div>
      </section>

      {/* What is the Atlas */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-6">
                What is the Atlas Vertebra?
              </h2>
              <div className="space-y-4 text-[#6B7A70] leading-relaxed text-left">
                <p>
                  The atlas (C1) is the topmost vertebra in your spine. It's a ring-shaped bone that supports the weight of your entire skull and protects the brainstem, the highway between your brain and body.
                </p>
                <p>
                  When the atlas shifts even a fraction of a degree, it can compress the brainstem, distort nerve signals, and force your entire spine to compensate. Your body adapts: one shoulder drops, your hips tilt, muscles tighten. The symptoms that follow, headaches, vertigo, chronic pain, can seem unrelated to the neck.
                </p>
                <p>
                  But they're not. They're all downstream of one misaligned bone.
                </p>
              </div>
            </div>
            <div>
              <AtlasVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Why NUCCA is Different */}
      <section className="bg-[#F2EDE2] py-20 sm:py-28 relative overflow-hidden" data-animate>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-cormorant)] text-bg-oversized text-[#1C2B24] whitespace-nowrap">
          PRECISION
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-4">
              Why NUCCA is Different
            </h2>
            <p className="text-[#6B7A70] max-w-xl mx-auto">
              This is not the chiropractic you're used to. Here's what sets NUCCA apart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "No Cracking or Twisting",
                desc: "The adjustment is a gentle touch at the base of the skull. Patients often say they barely felt it, but the structural change is measurable on follow-up X-rays.",
              },
              {
                title: "X-Ray Precision",
                desc: "Before any adjustment, specialized X-rays calculate the exact angle and direction of your misalignment. Every correction is mathematically calculated, not estimated.",
              },
              {
                title: "One Bone, Full-Spine Effect",
                desc: "Correcting the atlas doesn't just fix your neck. It allows your entire spine to realign naturally. The body is self-correcting once the foundation is level.",
              },
              {
                title: "Fewer Visits, Lasting Results",
                desc: "Because NUCCA corrections are precise, your body holds them longer. Most patients need far fewer visits than traditional chiropractic care.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C4813A]/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-2 w-2 rounded-full bg-[#C4813A]" />
                  <h3 className="font-[var(--font-cormorant)] text-xl font-medium text-[#1C2B24]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#6B7A70] leading-relaxed text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Does an Adjustment Feel Like */}
      <section className="bg-[#1B3A2E] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
              What Does an Adjustment Feel Like?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "Before", desc: "You lie on your side on a specialized table. Dr. Shelley positions your head at the precise correction angle calculated from your X-rays." },
              { label: "During", desc: "A gentle, sustained contact behind your ear. No popping. No twisting. Most patients describe it as light pressure. The whole correction takes seconds." },
              { label: "After", desc: "Some patients feel immediate relief. Others feel a gentle warmth or relaxation. Post-adjustment X-rays confirm the structural change has occurred." },
            ].map((step, i) => (
              <div key={i} className="p-6">
                <span className="font-[var(--font-cormorant)] text-2xl text-[#C4813A] font-light">{step.label}</span>
                <p className="mt-3 text-sm text-white/50 leading-relaxed text-left sm:text-center">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
              Common Questions
            </p>
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24]">
              Frequently Asked About NUCCA
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
            Experience the NUCCA Difference
          </h2>
          <p className="text-white/50 mb-8 text-sm sm:text-base">
            Your first visit includes comprehensive X-rays, atlas analysis, and your first precision adjustment. 90 minutes dedicated entirely to you.
          </p>
          <Link
            href="/new-patient"
            className="inline-block w-full sm:w-auto rounded-full bg-[#C4813A] px-8 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
          >
            Schedule Your First NUCCA Visit
          </Link>
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
