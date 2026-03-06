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
      "When the atlas is misaligned, it creates tension in the muscles and fascia at the base of the skull. That tension refers pain upward, creating headaches that no amount of ibuprofen fully resolves. NUCCA addresses the structural cause, not the symptom.",
    detail:
      "Patients who've lived with daily or weekly headaches for years often report significant reduction after their first correction. The headache doesn't just go away temporarily. The structural cause is addressed, and many patients find they stay headache-free as long as their atlas holds alignment.",
  },
  {
    name: "Migraines",
    description:
      "Atlas misalignment can compress the brainstem, disrupting the neurological signaling that regulates blood flow, pain perception, and sensory processing. For many migraine sufferers, this compression is the hidden trigger that no medication addresses.",
    detail:
      "Research has shown that NUCCA corrections can reduce migraine frequency, duration, and severity. Some patients experience relief after a single visit. For others, it's a gradual process as the body recalibrates. Either way, addressing the atlas offers something medication cannot: a structural solution.",
  },
  {
    name: "Vertigo & Dizziness",
    description:
      "The atlas sits millimeters from the vestibular system, the inner ear structures that control balance. A misaligned atlas can distort the signals between your inner ear and brain, creating the sensation that the world is spinning.",
    detail:
      "Patients often report 40-60% improvement in vertigo symptoms within weeks of their first NUCCA adjustment. For conditions like cervicogenic vertigo and some forms of Meniere's disease, atlas correction can be the intervention that finally provides relief after years of unsuccessful treatments.",
  },
  {
    name: "Neck Pain",
    description:
      "When the atlas shifts, the muscles in your neck work overtime to compensate. They tighten, spasm, and create chronic pain patterns that massage, stretching, and even traditional chiropractic may only temporarily relieve.",
    detail:
      "NUCCA doesn't force your neck into position. It corrects the underlying atlas misalignment and allows your muscles to relax naturally. Patients frequently describe the feeling as 'my neck finally let go.' The correction enables your body to do what it's designed to do: balance itself.",
  },
  {
    name: "Sports Injuries",
    description:
      "Impact sports, falls, and repetitive athletic movements can shift the atlas out of alignment. When the foundation of the spine is off, the entire body compensates: shoulders rotate, hips shift, knees track unevenly. Injuries become chronic because the root cause is structural.",
    detail:
      "Dr. Shelley works with runners, cyclists, martial artists, and weekend warriors who've tried everything. When performance plateaus or pain persists despite rehab, atlas alignment is often the missing piece. Athletes report improved range of motion, faster recovery, and renewed performance after NUCCA care.",
  },
  {
    name: "Concussion Recovery",
    description:
      "The same impact that causes a concussion often shifts the atlas vertebra. Post-concussion symptoms, including persistent headaches, brain fog, light sensitivity, and difficulty concentrating, may partly stem from atlas-related brainstem compression.",
    detail:
      "NUCCA provides a gentle, non-invasive approach to concussion recovery that complements neurological care. By ensuring the atlas is properly aligned, nerve signal transmission between the brain and body can improve, potentially accelerating recovery timelines and reducing persistent symptoms.",
  },
  {
    name: "Sleep Disruption",
    description:
      "Atlas misalignment can interfere with the autonomic nervous system, disrupting your body's ability to downregulate into restful sleep. Patients with atlas issues often report waking unrested, difficulty falling asleep, or frequent nighttime waking.",
    detail:
      "When the atlas is corrected, many patients report improved sleep quality within the first week. The body's nervous system can finally shift from a state of constant compensation into genuine rest. Sleep improves not because of a supplement, but because the structural interference is removed.",
  },
  {
    name: "TMJ Disorders",
    description:
      "The temporomandibular joint is directly connected to the upper cervical spine through shared musculature and nerve pathways. Atlas misalignment can create jaw tension, clicking, locking, and pain that dental interventions alone cannot resolve.",
    detail:
      "Many TMJ patients have been through night guards, dental adjustments, and injections before discovering that the root cause may be cervical. A properly aligned atlas allows the jaw musculature to release. Patients often notice reduced clenching and jaw pain within their first few NUCCA visits.",
  },
  {
    name: "Whole-Body Tension",
    description:
      "When the atlas is off, the body compensates from head to toe. One shoulder rises. The opposite hip drops. Muscles throughout the body tighten to maintain balance against a tilted foundation. The result is chronic, full-body tension that no single treatment resolves.",
    detail:
      "NUCCA is sometimes described as 'the domino effect in reverse.' One precise correction at the top allows the entire chain below to unwind. Patients often report improvements in areas they didn't expect: lower back pain easing, knee pain resolving, posture straightening, all from a single correction to the atlas.",
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A2E] pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A] mb-4">
            Conditions We Address
          </p>
          <h1 className="font-[var(--font-cormorant)] text-[clamp(2rem,6vw,4.5rem)] font-light text-white leading-tight mb-6">
            Where the Atlas Connects<br />
            to Everything
          </h1>
          <p className="mx-auto max-w-xl text-white/60 leading-relaxed">
            The atlas vertebra sits at the intersection of your skull, brainstem, and spine. When it's misaligned, the effects cascade throughout your entire body. Here's how NUCCA addresses each condition at its structural root.
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
                  <p className="text-[#6B7A70] leading-relaxed">
                    {condition.description}
                  </p>
                  <p className="text-[#6B7A70] leading-relaxed">
                    {condition.detail}
                  </p>
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
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-[var(--font-cormorant)] text-3xl sm:text-4xl font-light text-white mb-4">
            Recognize Your Symptoms?
          </h2>
          <p className="text-white/50 mb-8 text-sm sm:text-base">
            If you've been living with any of these conditions and haven't found lasting relief, your atlas may be the missing piece. Dr. Shelley has spent 19 years helping patients just like you.
          </p>
          <Link
            href="/new-patient"
            className="inline-block w-full sm:w-auto rounded-full bg-[#C4813A] px-8 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
          >
            Find Out if NUCCA Can Help You
          </Link>
        </div>
      </section>
    </>
  );
}
