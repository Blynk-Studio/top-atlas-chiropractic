import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="relative bg-[#F2EDE2] py-20 sm:py-28 overflow-hidden" data-animate>
      {/* Oversized background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-cormorant)] text-bg-oversized text-[#1C2B24] whitespace-nowrap">
        SHELLEY
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#2A5441]/10">
            <Image
              src="/images/dr-shelley-about.jpg"
              alt="Dr. Shelley Lorenzen, NUCCA chiropractor in Austin TX"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative ring */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border-2 border-[#C4813A]/20" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
              Meet Dr. Shelley
            </p>
            <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-6 leading-tight">
              From Wisconsin to Austin.<br />
              From Palmer to your C1 vertebra.
            </h2>
            <div className="space-y-4 text-left">
              <p className="text-[#6B7A70] leading-relaxed">
                Raised in Colfax, Wisconsin, a town with more cows than people and not a single stop sign, Dr. Shelley Lorenzen was a three-sport athlete who understood her body as an instrument. Biology at UW-La Crosse. Chiropractic doctorate at Palmer College in Davenport, Iowa.
              </p>
              <p className="text-[#6B7A70] leading-relaxed">
                Then, at a 2003 conference in Chicago, she discovered NUCCA, the most precise chiropractic technique in existence. Everything changed. She moved to Austin in 2006, spent 19 years perfecting the art, and in 2025 launched her own solo practice: Top Atlas Chiropractic.
              </p>
              <p className="text-[#6B7A70] leading-relaxed">
                When she's not in the office, she's instructing Lagree fitness classes, running Austin's trails, or at home with Arjen (her yellow lab), 16 chickens, and 3 ducks.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C4813A] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
            >
              Read Dr. Shelley's Full Story
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
