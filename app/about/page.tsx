import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Shelley Lorenzen | Top Atlas Chiropractic Austin TX",
  description:
    "Meet Dr. Shelley Lorenzen: 19 years of NUCCA upper cervical chiropractic expertise. Palmer College graduate, Lagree instructor, and Austin's atlas alignment specialist.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1B3A2E] pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-4">
                About Dr. Shelley
              </p>
              <h1 className="font-[var(--font-cormorant)] text-[clamp(2rem,5vw,4rem)] font-light text-white leading-tight mb-6">
                Small-Town Roots.<br />
                World-Class Precision.
              </h1>
              <p className="text-white/60 leading-relaxed text-left">
                Dr. Shelley Lorenzen didn't choose NUCCA chiropractic. NUCCA chose her, at a conference in Chicago, in 2003, when she witnessed something that contradicted everything she'd been taught about the spine. That moment redirected her entire career.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/dr-shelley-clinic.jpg"
                alt="Dr. Shelley Lorenzen portrait"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28 relative overflow-hidden" data-animate>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-cormorant)] text-bg-oversized text-[#2A5441] whitespace-nowrap">
          NUCCA
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-10 text-center">
            The Journey to Your Atlas
          </h2>

          <div className="space-y-8 text-[#6B7A70] leading-relaxed text-left">
            <p>
              Shelley Lorenzen grew up in Colfax, Wisconsin, a town so small it has no stop signs, more cows than people, and exactly the kind of childhood that produces distance runners and people who don't quit. She was a three-sport athlete through high school: cross country, basketball, and track.
            </p>
            <p>
              She studied biology at the University of Wisconsin-La Crosse, where the question shifted from "what does a body do?" to "what prevents it from doing what it should?" That question led her to Palmer College of Chiropractic in Davenport, Iowa, the birthplace of chiropractic itself.
            </p>
            <p>
              But the real turning point came in 2003, at a chiropractic conference in Chicago. A NUCCA practitioner demonstrated how a single, gentle correction to the atlas vertebra, the C1, the ring-shaped bone where the skull meets the spine, could realign the entire body. No cracking. No force. Just precision.
            </p>
            <p>
              Dr. Shelley was hooked. She pursued advanced NUCCA certification and in 2006 moved to Austin, Texas, joining Back N Balance, where she spent the next 19 years mastering the technique. Thousands of patients. Thousands of X-rays. Every atlas is different, and she's seen them all.
            </p>
            <p>
              In 2025, she took the leap. Top Atlas Chiropractic was born: her own solo practice, her own vision, her own way. A place where every patient gets the time, attention, and precision they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond the Office */}
      <section className="bg-[#F2EDE2] py-20 sm:py-28" data-animate>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-3">
                Beyond the Office
              </p>
              <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[#1C2B24] mb-6">
                The Whole Person Behind the Practice
              </h2>
              <div className="space-y-4 text-[#6B7A70] leading-relaxed text-left">
                <p>
                  Dr. Shelley has been a fitness instructor at The Lagree Studio in Austin for over seven years. She practices what she preaches: alignment isn't just spinal, it's how you move through life.
                </p>
                <p>
                  At home, you'll find her yellow lab Arjen (named, yes, after a Dutch footballer), 16 chickens with more personality than most people, and 3 ducks who answer to nobody.
                </p>
                <p>
                  She runs Austin's trails, teaches strength with precision, and spends her professional life keeping athletes performing, runners on the road, and everyday people out of pain. If your body has been telling you something is off but nobody can find it, Dr. Shelley might be the one who finally listens.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#2A5441]/10">
              <Image
                src="/images/dr-shelley-outdoor.jpg"
                alt="Austin Texas trails and outdoor lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full border-2 border-[#C4813A]/15" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A2E] py-20" data-animate>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
            Ready to Meet Dr. Shelley?
          </h2>
          <p className="text-white/50 mb-8 text-sm sm:text-base">
            Your first visit is 90 minutes of focused, personalized care. X-rays, analysis, and your first gentle NUCCA adjustment.
          </p>
          <Link
            href="/new-patient"
            className="inline-block w-full sm:w-auto rounded-full bg-[#C4813A] px-8 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
          >
            Schedule Your First Visit
          </Link>
        </div>
      </section>
    </>
  );
}
