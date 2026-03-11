const STATS = [
  { value: 19, label: "Years Practicing NUCCA", suffix: "" },
  { value: 7, label: "Years as Lagree Instructor", suffix: "+" },
  { value: 575, label: "New Patient Investment", prefix: "$" },
  { value: 0, label: "Procedures Involving Cracking", suffix: "", displayAs: "Zero" },
];

export function StatsSection() {
  return (
    <section className="site-section relative overflow-hidden bg-[#FAF7F0]" data-animate>
      {/* Oversized background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-cormorant)] text-bg-oversized text-[#2A5441] whitespace-nowrap">
        ALIGNMENT
      </div>

      <div className="site-shell relative z-10 max-w-5xl">
        <div className="text-center mb-14">
          <p className="section-eyebrow">
            By the Numbers
          </p>
          <h2 className="section-title">
            The 19-Year Difference
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-3">
                {stat.displayAs ? (
                  <span className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-light text-[#2A5441]">
                    {stat.displayAs}
                  </span>
                ) : (
                  <span
                    className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-light text-[#2A5441]"
                    data-count-to={stat.value}
                    data-count-suffix={stat.suffix || ""}
                    data-count-prefix={stat.prefix || ""}
                  >
                    {stat.prefix || ""}0{stat.suffix || ""}
                  </span>
                )}
              </div>
              <p className="text-xs tracking-wide text-[#51625a] sm:text-sm">
                {stat.label}
              </p>
              {/* Decorative ring */}
              <div className="mt-4 mx-auto h-8 w-8 rounded-full border border-[#C4813A]/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
