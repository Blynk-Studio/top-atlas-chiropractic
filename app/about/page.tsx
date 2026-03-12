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
        <div className="site-shell">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="section-eyebrow mb-4">
                About Dr. Shelley
              </p>
              <h1 className="mb-6 font-[var(--font-cormorant)] text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.02] text-white">
                Small-Town Roots.<br />
                World-Class Precision.
              </h1>
              <p className="copy-on-dark text-left">
                {"Dr. Shelley Lorenzen found NUCCA at a 2003 conference in Chicago. What she saw changed her view of the spine and redirected her career."}
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
            The Road to NUCCA
          </h2>

          <div className="space-y-8 text-[#6B7A70] leading-relaxed text-left">
            <p>
              {"Shelley Lorenzen grew up in Colfax, Wisconsin, a town with more cows than people and no stop signs. She was a three-sport athlete in cross country, basketball, and track."}
            </p>
              <p>
                {'She studied biology at the University of Wisconsin-La Crosse, where the question shifted from "what does a body do?" to "what stops it from doing what it should?" That question led her to Palmer College of Chiropractic in Davenport.'}
              </p>
            <p>
              The turning point came in 2003 at a chiropractic conference in Chicago. A NUCCA practitioner showed how one gentle correction to the atlas, the C1 vertebra where the skull meets the spine, could realign the body. No cracking. No force. Just precision.
            </p>
            <p>
              {"She pursued advanced NUCCA training and moved to Austin in 2006, joining Back N Balance. She spent the next 19 years mastering the work through thousands of patients and thousands of X-rays."}
            </p>
            <p>
              In 2025, she opened Top Atlas Chiropractic, a solo practice built around time, attention, and precision for every patient.
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
                  {"Dr. Shelley has taught at The Lagree Studio in Austin for more than seven years. She practices what she teaches: alignment shapes how you move through life."}
                </p>
                <p>
                  {"At home, you'll find her yellow lab Arjen, 16 chickens with plenty of personality, and 3 ducks who answer to no one."}
                </p>
                <p>
                  {"She runs Austin trails, teaches strength with precision, and helps athletes and everyday patients stay active and out of pain. If your body has been telling you something is off, Dr. Shelley may be the one who finally listens."}
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
        <div className="site-shell max-w-2xl text-center">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
            Ready to Meet Shelley?
          </h2>
          <p className="copy-on-dark-sm mx-auto mb-8 max-w-xl">
            Your first visit includes 90 minutes of focused care, X-rays, analysis, and your first gentle NUCCA adjustment.
          </p>
          <Link
            href="/new-patient"
            className="btn-primary w-full sm:w-auto"
          >
            Book a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
