import { AIWidgetPanel } from "@/components/AIWidgetPanel";

export function AIAssistantSection() {
  return (
    <section className="site-section bg-[#FAF7F0]" data-animate>
      <div className="site-shell max-w-4xl">
        <div className="text-center mb-10">
          <p className="section-eyebrow">
            Available 24/7
          </p>
          <h2 className="section-title mb-4">{"Questions at 2am?"}</h2>
          <p className="copy-muted-sm mx-auto max-w-lg">
            {"Dr. Shelley's AI assistant can answer questions about NUCCA care, explain what to expect, and help you decide if it's a fit."}
          </p>
        </div>
        <div className="mx-auto max-w-md">
          <AIWidgetPanel variant="inline" />
        </div>
      </div>
    </section>
  );
}
