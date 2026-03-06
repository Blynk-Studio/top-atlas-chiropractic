const STATS = [
  { value: 19, label: "Years Practicing NUCCA", suffix: "" },
  { value: 7, label: "Years as Lagree Instructor", suffix: "+" },
  { value: 575, label: "New Patient Investment", prefix: "$" },
  { value: 0, label: "Procedures Involving Cracking", suffix: "", displayAs: "Zero" },
];

export function StatsSection() {
  return (
    <section className="bg-[#FAF7F0] py-20 sm:py-28 relative overflow-hidden" data-animate>
      {/* Oversized background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-cormorant)] text-bg-oversized text-[#2A5441] whitespace-nowrap">
        ALIGNMENT
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
            By the Numbers
          </p>
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-light text-[#1C2B24]">
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
              <p className="text-xs sm:text-sm text-[#6B7A70] tracking-wide">
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
