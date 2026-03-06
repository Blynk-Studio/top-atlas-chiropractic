"use client";
import { useEffect, useRef } from "react";

// Per-vertebra misalignment offsets — more dramatic so correction is satisfying
const MISALIGNED: { x: number; rotation: number; opacity: number }[] = [
  { x: -18, rotation: -10, opacity: 0.45 }, // C1
  { x:  12, rotation:   6, opacity: 0.50 }, // C2
  { x: -10, rotation:  -5, opacity: 0.55 }, // C3
  { x:  16, rotation:   8, opacity: 0.60 }, // C4
  { x:  -8, rotation:  -4, opacity: 0.55 }, // C5
  { x:  14, rotation:   7, opacity: 0.50 }, // C6
  { x: -16, rotation:  -8, opacity: 0.45 }, // C7
];

const ALIGNED: { x: number; rotation: number; opacity: number }[] = [
  { x: 0, rotation: 0, opacity: 1.00 }, // C1
  { x: 0, rotation: 0, opacity: 0.95 }, // C2
  { x: 0, rotation: 0, opacity: 0.90 }, // C3
  { x: 0, rotation: 0, opacity: 0.85 }, // C4
  { x: 0, rotation: 0, opacity: 0.80 }, // C5
  { x: 0, rotation: 0, opacity: 0.75 }, // C6
  { x: 0, rotation: 0, opacity: 0.70 }, // C7
];

export function SpineAlignment() {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    let masterTl: gsap.core.Timeline | null = null;
    let observer: IntersectionObserver | null = null;
    let hasStarted = false;

    const startLoop = async () => {
      if (!isMounted || hasStarted) return;
      hasStarted = true;

      const { default: gsap } = await import("gsap");
      if (!isMounted || !svgRef.current) return;

      const vertebrae = Array.from(svgRef.current.querySelectorAll(".vertebra")) as SVGGElement[];

      // Set initial misaligned state
      vertebrae.forEach((v, i) => {
        gsap.set(v, {
          x: MISALIGNED[i].x,
          rotation: MISALIGNED[i].rotation,
          opacity: MISALIGNED[i].opacity,
        });
      });

      // Looping timeline: hold misaligned (1.5s) → snap to aligned (1.4s) → hold aligned (2s) → drift back (1.8s) → repeat
      const loop = () => {
        if (!isMounted) return;

        masterTl = gsap.timeline({
          onComplete: () => {
            if (isMounted) {
              // Pause at aligned for 2 seconds then restart
              setTimeout(() => {
                if (isMounted) loop();
              }, 2200);
            }
          },
        });

        // Phase 1: Hold misaligned — 1.5s of "pain state" before the fix
        // (already set above / from last loop end)

        // Phase 2: Snap into alignment — satisfying elastic snap from center outward
        masterTl.to(vertebrae, {
          x: 0,
          rotation: 0,
          opacity: (i: number) => ALIGNED[i].opacity,
          duration: 1.6,
          stagger: { each: 0.07, from: "center" },
          ease: "elastic.out(1, 0.55)",
          delay: 1.5, // hold misaligned first
        });

        // Phase 3: Subtle breathing after alignment (gentle, alive)
        masterTl.to(vertebrae, {
          scaleX: 1.025,
          duration: 2,
          stagger: { each: 0.15, from: "start" },
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
        }, "+=0.3");

        // Phase 4: Drift back to misaligned (slow, organic — like pain creeping back)
        masterTl.to(vertebrae, {
          x: (i: number) => MISALIGNED[i].x,
          rotation: (i: number) => MISALIGNED[i].rotation,
          opacity: (i: number) => MISALIGNED[i].opacity,
          duration: 2.2,
          stagger: { each: 0.1, from: "start" },
          ease: "power2.inOut",
        }, "+=0.4");
      };

      // Trigger loop when spine enters viewport
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && isMounted) {
            loop();
            observer?.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (wrapperRef.current) observer.observe(wrapperRef.current);
    };

    startLoop();

    return () => {
      isMounted = false;
      observer?.disconnect();
      masterTl?.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full h-full">
      <svg
        ref={svgRef}
        viewBox="0 0 120 420"
        className="w-full h-full"
        style={{ overflow: "visible" }}
        aria-label="Animated cervical spine alignment visualization"
      >
        {/* C1 Atlas — ring shape (the hero bone) */}
        <g className="vertebra" style={{ transformOrigin: "60px 35px" }}>
          <ellipse cx="60" cy="35" rx="38" ry="22" fill="none" stroke="#C4813A" strokeWidth="2.5" />
          <ellipse cx="60" cy="35" rx="16" ry="10" fill="none" stroke="#C4813A" strokeWidth="1.5" opacity="0.6" />
          <circle cx="60" cy="35" r="3" fill="#C4813A" opacity="0.9" />
          <line x1="22" y1="35" x2="8"  y2="31" stroke="#C4813A" strokeWidth="1.5" opacity="0.5" />
          <line x1="98" y1="35" x2="112" y2="31" stroke="#C4813A" strokeWidth="1.5" opacity="0.5" />
          <text x="60" y="12" textAnchor="middle" fill="#C4813A" fontSize="8.5" fontFamily="'Cormorant Garamond', serif" opacity="0.85" letterSpacing="1">C1 · Atlas</text>
        </g>

        {/* C2 Axis */}
        <g className="vertebra" style={{ transformOrigin: "60px 94px" }}>
          <rect x="28" y="80" width="64" height="28" rx="8" fill="none" stroke="#C4813A" strokeWidth="2" />
          <circle cx="60" cy="73" r="6" fill="none" stroke="#C4813A" strokeWidth="1.5" opacity="0.55" />
          <line x1="28" y1="94" x2="10"  y2="90" stroke="#C4813A" strokeWidth="1.5" opacity="0.4" />
          <line x1="92" y1="94" x2="110" y2="90" stroke="#C4813A" strokeWidth="1.5" opacity="0.4" />
          <text x="60" y="76" textAnchor="middle" fill="#7A9E8E" fontSize="8" fontFamily="'Cormorant Garamond', serif" opacity="0.65">C2</text>
        </g>

        {/* C3–C7 */}
        {([
          { cy: 148, label: "C3" },
          { cy: 200, label: "C4" },
          { cy: 252, label: "C5" },
          { cy: 304, label: "C6" },
          { cy: 356, label: "C7" },
        ] as { cy: number; label: string }[]).map(({ cy, label }, i) => (
          <g key={label} className="vertebra" style={{ transformOrigin: `60px ${cy}px` }}>
            <rect
              x={24 + i * 1.5}
              y={cy - 16}
              width={72 - i * 3}
              height={30 + i}
              rx="7"
              fill="none"
              stroke="#7A9E8E"
              strokeWidth={2 - i * 0.15}
            />
            {/* Spinous process */}
            <line x1="60" y1={cy + 14} x2="60" y2={cy + 26} stroke="#7A9E8E" strokeWidth="2" opacity="0.35" />
            {/* Transverse processes */}
            <line x1={24 + i * 1.5} y1={cy} x2={9}   y2={cy - 4} stroke="#7A9E8E" strokeWidth="1.5" opacity="0.28" />
            <line x1={96 - i * 1.5} y1={cy} x2={111} y2={cy - 4} stroke="#7A9E8E" strokeWidth="1.5" opacity="0.28" />
            <text x="60" y={cy + 6} textAnchor="middle" fill="#7A9E8E" fontSize="8" fontFamily="'Cormorant Garamond', serif" opacity="0.5">{label}</text>
          </g>
        ))}

        {/* Spinal cord center line */}
        <line x1="60" y1="0" x2="60" y2="420" stroke="#C4813A" strokeWidth="0.5" strokeDasharray="4 9" opacity="0.12" />
      </svg>
    </div>
  );
}
