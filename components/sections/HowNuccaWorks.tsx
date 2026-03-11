import { AtlasVisual } from "@/components/AtlasVisual";

const STEPS = [
  {
    number: "01",
    title: "Precise X-Ray Analysis",
    description:
      "Before any adjustment, Dr. Shelley takes specialized X-rays to calculate the exact angle and direction of your atlas misalignment. This isn't guesswork. It's engineering.",
  },
  {
    number: "02",
    title: "Custom Correction Angle",
    description:
      "Using your X-ray data, a correction vector is calculated unique to your anatomy. No two adjustments are the same, because no two spines are the same.",
  },
  {
    number: "03",
    title: "Gentle Atlas Adjustment",
    description:
      "A precise, gentle touch at the base of the skull. No cracking. No twisting. No popping. One small correction to the atlas changes the alignment of your entire spine.",
  },
];

export function HowNuccaWorks() {
  return (
    <section className="site-section bg-[#1B3A2E]" data-animate>
      <div className="site-shell">
        <div className="text-center mb-16">
          <p className="section-eyebrow">
            The NUCCA Method
          </p>
          <h2 className="section-title section-title-dark">
            How NUCCA Works
          </h2>
          <p className="copy-on-dark-sm mx-auto mt-4 max-w-xl">
            Structural solutions to unresolved health problems. Three steps to precision alignment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-10">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-[var(--font-cormorant)] text-3xl font-light text-[#C4813A]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-[var(--font-cormorant)] text-xl sm:text-2xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="copy-on-dark-sm text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Atlas Visual */}
          <div className="flex items-center justify-center">
            <AtlasVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
