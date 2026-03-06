import { AIWidgetPanel } from "@/components/AIWidgetPanel";

export function AIAssistantSection() {
  return (
    <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
            Available 24/7
          </p>
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-light text-[#1C2B24] mb-4">
            Questions at 2am?
          </h2>
          <p className="text-[#6B7A70] text-sm sm:text-base max-w-lg mx-auto">
            Dr. Shelley's AI assistant can answer your questions about NUCCA care, walk you through what to expect, or help you decide if upper cervical chiropractic is right for you.
          </p>
        </div>
        <div className="mx-auto max-w-md">
          <AIWidgetPanel variant="inline" />
        </div>
      </div>
    </section>
  );
}
