export function TrustBar() {
  const items = [
    "19 Years NUCCA Experience",
    "Palmer College Graduate",
    "NUCCA Board Certified",
    "Lagree Fitness Instructor",
  ];

  return (
    <section className="bg-[#F2EDE2] py-6 overflow-hidden" data-animate>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C4813A]" />
              <span className="text-xs tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[#6B7A70] font-medium whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
