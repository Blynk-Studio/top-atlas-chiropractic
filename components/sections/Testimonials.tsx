"use client";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    text: "I had been to two chiropractors and three neurologists before finding Dr. Shelley. After my first NUCCA adjustment, the migraines that had controlled my life for eight years started fading. Three months later, I ran my first 5K without a single episode.",
    condition: "Migraines",
  },
  {
    name: "David K.",
    text: "The vertigo was so bad I couldn't drive. My ENT couldn't explain it, physical therapy didn't help, and medication just made me drowsy. Dr. Shelley found a 3-degree atlas rotation. Within 14 weeks I saw a 60% improvement. Within six months, the vertigo was gone.",
    condition: "Vertigo",
  },
  {
    name: "Michelle R.",
    text: "After my concussion playing club soccer, I couldn't focus, couldn't sleep, and the headaches never stopped. My athletic trainer recommended NUCCA as a last resort. Dr. Shelley got me back on the field in ten weeks. I wish I'd found her first.",
    condition: "Concussion Recovery",
  },
  {
    name: "James T.",
    text: "I've been a runner for 25 years. The chronic neck and shoulder tension was stealing my form and my joy. One NUCCA adjustment and I felt straighter than I had in a decade. No cracking. No drama. Just precision. I'm running faster at 52 than I did at 45.",
    condition: "Neck Pain",
  },
  {
    name: "Lisa C.",
    text: "Waking up exhausted every morning despite eight hours in bed. TMJ pain that made eating painful. My dentist suggested a night guard, but Dr. Shelley suggested something different: check the atlas. Two adjustments later, I was sleeping through the night.",
    condition: "TMJ & Sleep Disruption",
  },
  {
    name: "Robert A.",
    text: "I was skeptical. How could touching the top of my neck fix my lower back pain? But after three visits with Dr. Shelley, I understood. When the foundation is straight, everything above it falls into place. I canceled my back surgery consult.",
    condition: "Whole-Body Tension",
  },
];

export function TestimonialsSection() {
  return (
    <section className="site-section bg-[#F2EDE2]" data-animate>
      <div className="site-shell">
        <div className="text-center mb-14">
          <p className="section-eyebrow">
            Patient Stories
          </p>
          <h2 className="section-title">{"They Tried Everything Else First"}</h2>
          <p className="copy-muted-sm mx-auto mt-4 max-w-xl">
            {"Most patients arrive after years of chasing answers. Here's what changed when they found NUCCA."}
          </p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-12">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="#C4813A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card-surface group p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C4813A]/10 sm:p-8"
            >
              <div className="mb-4 inline-block rounded-full bg-[#2A5441]/5 px-3 py-1">
                <span className="text-[10px] tracking-[0.1em] uppercase text-[#2A5441] font-medium">
                  {t.condition}
                </span>
              </div>
              <p className="copy-muted-sm mb-6 text-left">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#C4813A]/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-[#C4813A]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1C2B24]">{t.name}</p>
                  <p className="text-[10px] text-[#6B7A70]">NUCCA Patient, Austin TX</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
