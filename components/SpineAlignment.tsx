"use client";
import { useEffect, useRef } from "react";

export function SpineAlignment() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let isMounted = true;
    const animate = async () => {
      const { default: gsap } = await import("gsap");
      if (!isMounted || !svgRef.current) return;

      const vertebrae = svgRef.current.querySelectorAll(".vertebra");

      // Start misaligned
      vertebrae.forEach((v, i) => {
        const offset = (i - 3) * 8;
        const rotation = (i - 3) * 4;
        gsap.set(v, { x: offset + (Math.random() - 0.5) * 12, rotation: rotation + (Math.random() - 0.5) * 6, opacity: 0.3 });
      });

      // Animate into alignment with beautiful stagger
      await new Promise(r => setTimeout(r, 800));
      if (!isMounted) return;

      gsap.to(vertebrae, {
        x: 0,
        rotation: 0,
        opacity: (_i: number) => 1 - _i * 0.08,
        duration: 1.4,
        stagger: { each: 0.1, from: "center" },
        ease: "elastic.out(1, 0.6)",
      });

      // Gentle breathing animation after alignment
      gsap.to(vertebrae, {
        scaleX: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "start" },
        ease: "sine.inOut",
        delay: 2,
      });
    };
    animate();
    return () => { isMounted = false; };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 420"
      className="w-full h-full"
      style={{ overflow: "visible" }}
    >
      {/* C1 Atlas — ring shape (the hero bone) */}
      <g className="vertebra" style={{ transformOrigin: "60px 35px" }}>
        <ellipse cx="60" cy="35" rx="38" ry="22" fill="none" stroke="#C4813A" strokeWidth="2.5" />
        <ellipse cx="60" cy="35" rx="16" ry="10" fill="none" stroke="#C4813A" strokeWidth="1.5" opacity="0.6" />
        <circle cx="60" cy="35" r="3" fill="#C4813A" opacity="0.8" />
        <line x1="22" y1="35" x2="10" y2="32" stroke="#C4813A" strokeWidth="1.5" opacity="0.5" />
        <line x1="98" y1="35" x2="110" y2="32" stroke="#C4813A" strokeWidth="1.5" opacity="0.5" />
        <text x="60" y="13" textAnchor="middle" fill="#C4813A" fontSize="9" fontFamily="'Cormorant Garamond', serif" opacity="0.7">C1 · Atlas</text>
      </g>

      {/* C2 Axis */}
      <g className="vertebra" style={{ transformOrigin: "60px 95px" }}>
        <rect x="28" y="80" width="64" height="28" rx="8" fill="none" stroke="#C4813A" strokeWidth="2" opacity="0.9" />
        <circle cx="60" cy="72" r="6" fill="none" stroke="#C4813A" strokeWidth="1.5" opacity="0.6" />
        <line x1="22" y1="94" x2="10" y2="91" stroke="#C4813A" strokeWidth="1.5" opacity="0.4" />
        <line x1="98" y1="94" x2="110" y2="91" stroke="#C4813A" strokeWidth="1.5" opacity="0.4" />
        <text x="60" y="77" textAnchor="middle" fill="#7A9E8E" fontSize="8" fontFamily="'Cormorant Garamond', serif" opacity="0.6">C2</text>
      </g>

      {[
        { cy: 148, label: "C3" },
        { cy: 200, label: "C4" },
        { cy: 252, label: "C5" },
        { cy: 304, label: "C6" },
        { cy: 356, label: "C7" },
      ].map(({ cy, label }, i) => (
        <g key={label} className="vertebra" style={{ transformOrigin: `60px ${cy}px` }}>
          <rect
            x={24 + i * 1.5}
            y={cy - 16}
            width={72 - i * 3}
            height={30 + i * 1}
            rx="7"
            fill="none"
            stroke="#7A9E8E"
            strokeWidth={2 - i * 0.15}
            opacity={0.85 - i * 0.08}
          />
          <line x1="60" y1={cy + 15} x2="60" y2={cy + 26} stroke="#7A9E8E" strokeWidth="2" opacity="0.4" />
          <line x1={24 + i * 1.5} y1={cy} x2={10} y2={cy - 3} stroke="#7A9E8E" strokeWidth="1.5" opacity="0.3" />
          <line x1={96 - i * 1.5} y1={cy} x2={110} y2={cy - 3} stroke="#7A9E8E" strokeWidth="1.5" opacity="0.3" />
          <text x="60" y={cy + 6} textAnchor="middle" fill="#7A9E8E" fontSize="8" fontFamily="'Cormorant Garamond', serif" opacity="0.5">{label}</text>
        </g>
      ))}

      {/* Spinal cord center line */}
      <line x1="60" y1="0" x2="60" y2="420" stroke="#C4813A" strokeWidth="0.5" strokeDasharray="4,8" opacity="0.15" />
    </svg>
  );
}
