import Link from "next/link";

const QUICK_LINKS = [
  { label: "About Shelley", href: "/about" },
  { label: "About NUCCA", href: "/nucca" },
  { label: "Conditions", href: "/conditions" },
  { label: "First Visit", href: "/new-patient" },
  { label: "Contact", href: "/contact" },
];

const CONDITIONS = [
  "Headaches",
  "Migraine",
  "Vertigo",
  "Neck Pain",
  "Sports Injury",
  "Concussion",
];

export function Footer() {
  return (
    <footer className="bg-[#1B3A2E] text-white">
      <div className="site-shell-wide pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-[var(--font-cormorant)] text-2xl font-semibold mb-4">
              Top Atlas Chiropractic
            </h3>
            <p className="copy-on-dark-sm mb-4">
              NUCCA upper cervical care in Austin for lasting relief.
            </p>
            <p className="text-sm text-white/80">
              <a
                href="mailto:drshelley@topatlaschiropractic.com"
                className="inline-flex min-h-11 items-center hover:text-white transition-colors"
              >
                drshelley@topatlaschiropractic.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/78 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
              Conditions
            </h4>
            <ul className="space-y-3">
              {CONDITIONS.map((c) => (
                <li key={c}>
                  <Link
                    href="/conditions"
                    className="inline-flex min-h-11 items-center text-sm text-white/78 transition-colors hover:text-white"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
              Visit
            </h4>
            <p className="copy-on-dark-sm">
              Austin, TX
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/topatlaschiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/8 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 pt-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Top Atlas Chiropractic. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built by{" "}
            <a
              href="https://blynk.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-white/55 transition-colors hover:text-white/75"
            >
              Blynk Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
