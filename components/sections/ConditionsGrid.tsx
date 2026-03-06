"use client";

import Link from "next/link";

const CONDITIONS = [
  {
    name: "Chronic Headaches",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="5" />
        <path d="M7 13c-2 1.5-3 3.5-3 6h16c0-2.5-1-4.5-3-6" />
        <path d="M9 5l1 3M15 5l-1 3M12 3v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Migraines",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Vertigo & Dizziness",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3c3 3 3 6 0 9s-3 6 0 9" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Neck Pain",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="6" r="3" />
        <path d="M12 9v6M9 21v-4c0-2 1-3 3-3s3 1 3 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Sports Injuries",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v5M8 20l4-7 4 7M6 13h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Concussion Recovery",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="10" r="7" />
        <path d="M8.5 10c0-2 1.5-3.5 3.5-3.5" strokeLinecap="round" />
        <path d="M12 17v4M10 21h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Sleep Disruption",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  },
  {
    name: "TMJ Disorders",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="5" />
        <path d="M8 12.5c1 2 2 3 4 3s3-1 4-3" strokeLinecap="round" />
        <path d="M9 9h0M15 9h0" strokeLinecap="round" strokeWidth={2} />
      </svg>
    ),
  },
  {
    name: "Whole-Body Tension",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="4" r="2" />
        <path d="M12 6v4M8 21l2-7h4l2 7M7 10h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ConditionsGrid() {
  return (
    <section className="bg-[#FAF7F0] py-20 sm:py-28" data-animate>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
            What Brings You Here?
          </p>
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-light text-[#1C2B24]">
            Conditions We Address
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {CONDITIONS.map((condition) => (
            <Link
              key={condition.name}
              href="/conditions"
              className="group relative flex flex-col items-center gap-3 rounded-2xl bg-white p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C4813A]/10 border-l-2 border-l-transparent hover:border-l-[#C4813A]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2A5441]/5 text-[#2A5441] transition-all duration-500 group-hover:bg-[#C4813A]/10 group-hover:text-[#C4813A] group-hover:scale-110">
                {condition.icon}
              </div>
              <span className="text-sm font-medium text-[#1C2B24] sm:text-base">
                {condition.name}
              </span>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#C4813A] transition-all duration-500 group-hover:w-12" />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C4813A] transition-all hover:gap-3"
          >
            Explore all conditions we treat
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
