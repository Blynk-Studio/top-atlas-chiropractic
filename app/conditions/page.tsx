import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Treated by NUCCA | Top Atlas Chiropractic Austin TX",
  description:
    "NUCCA upper cervical care addresses chronic headaches, migraines, vertigo, neck pain, sports injuries, concussion recovery, sleep disruption, TMJ, and whole-body tension.",
};

const CONDITIONS = [
  {
    name: "Chronic Headaches",
    description:
      "When the atlas is misaligned, it can create tension in the muscles and fascia at the base of the skull. That tension can refer pain upward and drive headaches that ibuprofen never fully solves. NUCCA targets the structural cause, not just the symptom.",
    detail:
      "Patients with daily or weekly headaches often report meaningful relief after their first correction. The goal is not short-term relief, but lasting change while the atlas holds alignment.",
  },
  {
    name: "Migraines",
    description:
      "Atlas misalignment can compress the brainstem and disrupt the signaling that helps regulate blood flow, pain, and sensory processing. For some migraine patients, that compression is the hidden trigger medication never addresses.",
    detail:
      "Research suggests NUCCA corrections can reduce migraine frequency, duration, and severity. Some patients feel relief quickly. For others, improvement builds as the body recalibrates. Either way, the atlas offers a structural angle medication does not.",
  },
  {
    name: "Vertigo & Dizziness",
    description:
      "The atlas sits millimeters from the vestibular system that helps control balance. A misaligned atlas can distort the signals between your inner ear and brain and create the sense that the room is spinning.",
    detail:
      "Patients often report meaningful improvement within weeks of their first NUCCA adjustment. For cervicogenic vertigo and some cases of Meniere's disease, atlas correction can provide relief after years of stalled treatment.",
  },
  {
    name: "Neck Pain",
    description:
      "When the atlas shifts, the muscles in your neck work overtime to compensate. They tighten, spasm, and create pain that massage, stretching, and even traditional chiropractic may only ease for a while.",
    detail:
      "NUCCA does not force your neck into place. It corrects the underlying atlas misalignment and lets your muscles relax naturally. Patients often describe it as their neck finally letting go.",
  },
  {
    name: "Sports Injuries",
    description:
      "Impact sports, falls, and repetitive movement can shift the atlas out of alignment. When the spine's foundation is off, the whole body compensates: shoulders rotate, hips shift, and knees track unevenly. Injuries become chronic because the root cause is structural.",
    detail:
      "Dr. Shelley works with runners, cyclists, martial artists, and weekend warriors. When performance stalls or pain lingers despite rehab, atlas alignment is often the missing piece. Athletes often report better range of motion, faster recovery, and stronger performance after NUCCA care.",
  },
  {
    name: "Concussion Recovery",
    description:
      "The same impact that causes a concussion often shifts the atlas. Post-concussion symptoms like persistent headaches, brain fog, light sensitivity, and poor concentration may partly stem from atlas-related brainstem compression.",
    detail:
      "NUCCA offers a gentle, non-invasive approach that can complement neurological care. When the atlas is aligned, communication between the brain and body may improve and help ease lingering symptoms.",
  },
  {
    name: "Sleep Disruption",
    description:
      "Atlas misalignment can interfere with the autonomic nervous system and make it harder for your body to settle into restful sleep. Patients often report waking unrested, struggling to fall asleep, or waking repeatedly through the night.",
    detail:
      "After the atlas is corrected, many patients report better sleep within the first week. The nervous system can shift out of constant compensation and into real rest.",
  },
  {
    name: "TMJ Disorders",
    description:
      "The temporomandibular joint connects closely to the upper cervical spine through shared muscles and nerve pathways. Atlas misalignment can create jaw tension, clicking, locking, and pain that dental care alone may not resolve.",
    detail:
      "Many TMJ patients try night guards, dental adjustments, and injections before learning the root cause may be cervical. A properly aligned atlas can let the jaw muscles release, with less clenching and pain in the first few visits.",
  },
  {
    name: "Whole-Body Tension",
    description:
      "When the atlas is off, the body compensates from head to toe. One shoulder rises. The opposite hip drops. Muscles throughout the body tighten to balance a tilted foundation. The result is chronic tension that no single treatment fully resolves.",
    detail:
      "NUCCA is sometimes described as the domino effect in reverse. One precise correction at the top can let the whole chain below unwind. Patients often notice relief in places they did not expect, from posture to lower back and knee pain.",
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-[#1B3A2E] pt-32 pb-20 sm:pb-28 overflow-hidden hero-bg-fade"
        style={{
          backgroundImage: 'linear-gradient(rgba(27,58,46,0.82),rgba(27,58,46,0.82)),url(/images/conditions-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="site-shell relative z-10 text-center">
          <p className="section-eyebrow mb-4">
            Conditions We Address
          </p>
          <h1 className="mx-auto mb-6 max-w-4xl font-[var(--font-cormorant)] text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-[1.02] text-white">
            Where the Atlas Connects<br />
            to Everything
          </h1>
          <p className="copy-on-dark mx-auto">
            {"The atlas sits where your skull, brainstem, and spine meet. When it is misaligned, the effects can ripple through the body. Here is how NUCCA addresses common symptoms at the structural level."}
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-[#FAF7F0] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-16">
            {CONDITIONS.map((condition, i) => (
              <div
                key={i}
                className="scroll-mt-24"
                data-animate
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full border-2 border-[#C4813A]/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-[var(--font-cormorant)] text-sm font-semibold text-[#C4813A]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-[var(--font-cormorant)] text-2xl sm:text-3xl font-light text-[#1C2B24]">
                    {condition.name}
                  </h2>
                </div>
                <div className="ml-14 space-y-4 text-left">
                  <p className="text-[#6B7A70] leading-relaxed">{condition.description}</p>
                  <p className="text-[#6B7A70] leading-relaxed">{condition.detail}</p>
                </div>
                {i < CONDITIONS.length - 1 && (
                  <div className="mt-12 mx-auto w-12 h-px bg-[#C4813A]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A2E] py-20" data-animate>
        <div className="site-shell max-w-2xl text-center">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
            See Yourself Here?
          </h2>
          <p className="copy-on-dark-sm mx-auto mb-8 max-w-xl">
            {"If any of these sound familiar and lasting relief has been hard to find, your atlas may be the missing piece. Dr. Shelley has spent 19 years helping patients with symptoms like these."}
          </p>
          <Link
            href="/new-patient"
            className="btn-primary w-full sm:w-auto"
          >
            See If It Fits
          </Link>
        </div>
      </section>
    </>
  );
}
