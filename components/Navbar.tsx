"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Conditions", href: "/conditions" },
  { label: "NUCCA", href: "/nucca" },
  { label: "New Patient", href: "/new-patient" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1B3A2E]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-[var(--font-cormorant)] text-xl font-semibold tracking-wide text-white sm:text-2xl">
            Top Atlas Chiropractic
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-white/70 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(196,129,58,0.5)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/new-patient"
              className="rounded-full bg-[#C4813A] px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
            >
              Book Your First Visit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer — OUTSIDE header to avoid backdrop-filter containing block trap */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-[#1B3A2E] transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg tracking-[0.1em] uppercase text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/new-patient"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full bg-[#C4813A] px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#E8A85A]"
          >
            Book Your First Visit
          </Link>
        </div>
      </div>
    </>
  );
}
