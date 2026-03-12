export function TrustBar() {
  const items = [
    "19 Years in NUCCA",
    "Palmer Graduate",
    "Board Certified",
    "Lagree Fitness Instructor",
  ];

  return (
    <section className="overflow-hidden bg-[#F2EDE2] py-6" data-animate>
      <div className="site-shell-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C4813A]" />
              <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.12em] text-[#51625a]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
