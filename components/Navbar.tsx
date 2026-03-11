"use client";

import { useEffect, useId, useState } from "react";
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
  const mobileMenuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1B3A2E]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="site-shell-wide flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex min-h-11 max-w-[13rem] items-center font-[var(--font-cormorant)] text-xl font-semibold tracking-wide text-white sm:max-w-none sm:text-2xl"
          >
            Top Atlas Chiropractic
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center py-2 text-sm tracking-[0.15em] uppercase text-white/80 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(196,129,58,0.5)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/new-patient"
              className="btn-primary px-6 tracking-wide"
            >
              Book Your First Visit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 rounded-full text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
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
      {mobileOpen ? (
        <div
          id={mobileMenuId}
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 border-t border-white/10 bg-[#1B3A2E] md:hidden"
        >
          <div className="site-shell flex h-full flex-col items-center gap-4 overflow-y-auto pt-8 pb-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center text-lg tracking-[0.1em] uppercase text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/new-patient"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 w-full max-w-sm px-8 text-base"
            >
              Book Your First Visit
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
