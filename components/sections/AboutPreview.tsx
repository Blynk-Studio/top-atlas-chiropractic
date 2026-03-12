import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="site-section relative overflow-hidden bg-[#F2EDE2]" data-animate>
      {/* Oversized background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-cormorant)] text-bg-oversized text-[#1C2B24] whitespace-nowrap">
        SHELLEY
      </div>

      <div className="site-shell relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#2A5441]/10">
            <Image
              src="/images/dr-shelley-clinic.jpg"
              alt="Dr. Shelley Lorenzen, NUCCA chiropractor in Austin TX"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative ring */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border-2 border-[#C4813A]/20" />
          </div>

          {/* Content */}
          <div>
            <p className="section-eyebrow">
              Meet Dr. Shelley
            </p>
            <h2 className="section-title mb-6 text-left">
              From Wisconsin to Austin.<br />
              From Palmer to C1.
            </h2>
            <div className="space-y-4 text-left">
              <p className="copy-muted">
                Raised in tiny Colfax, Wisconsin, Dr. Shelley Lorenzen was a three-sport athlete who learned to respect how the body works. She studied biology at UW-La Crosse, then earned her chiropractic doctorate at Palmer College in Davenport.
              </p>
              <p className="copy-muted">
                At a 2003 conference in Chicago, she discovered NUCCA. It changed her path. She moved to Austin in 2006, spent 19 years refining the work, and opened Top Atlas Chiropractic in 2025.
              </p>
              <p className="copy-muted">
                {"Outside the office, she teaches Lagree, runs Austin trails, and goes home to Arjen, 16 chickens, and 3 ducks."}
              </p>
            </div>
            <Link
              href="/about"
              className="btn-primary mt-8"
            >
              Read Her Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
