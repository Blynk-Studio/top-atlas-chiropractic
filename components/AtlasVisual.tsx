"use client";

import { useEffect, useRef } from "react";

export function AtlasVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-atlas");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Misaligned atlas (fades out) */}
        <g className="atlas-misaligned" opacity="0.4">
          {/* C1 ring - misaligned */}
          <ellipse
            cx="200"
            cy="150"
            rx="80"
            ry="35"
            stroke="#C4813A"
            strokeWidth="2"
            fill="none"
            transform="rotate(8, 200, 150)"
            strokeDasharray="4 4"
          />
          {/* Lateral masses */}
          <ellipse
            cx="130"
            cy="148"
            rx="22"
            ry="16"
            stroke="#C4813A"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(8, 200, 150)"
            strokeDasharray="4 4"
          />
          <ellipse
            cx="270"
            cy="148"
            rx="22"
            ry="16"
            stroke="#C4813A"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(8, 200, 150)"
            strokeDasharray="4 4"
          />
        </g>

        {/* Aligned atlas (fades in) */}
        <g className="atlas-aligned">
          {/* C1 ring - aligned */}
          <ellipse
            cx="200"
            cy="150"
            rx="80"
            ry="35"
            stroke="#C4813A"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Anterior arch */}
          <path
            d="M140 140 Q200 115 260 140"
            stroke="#C4813A"
            strokeWidth="2"
            fill="none"
          />
          {/* Posterior arch */}
          <path
            d="M140 160 Q200 185 260 160"
            stroke="#C4813A"
            strokeWidth="2"
            fill="none"
          />
          {/* Lateral masses */}
          <ellipse
            cx="130"
            cy="150"
            rx="22"
            ry="16"
            stroke="#C4813A"
            strokeWidth="2"
            fill="rgba(196, 129, 58, 0.1)"
          />
          <ellipse
            cx="270"
            cy="150"
            rx="22"
            ry="16"
            stroke="#C4813A"
            strokeWidth="2"
            fill="rgba(196, 129, 58, 0.1)"
          />
          {/* Transverse foramen */}
          <circle cx="130" cy="150" r="6" stroke="#C4813A" strokeWidth="1.5" fill="none" />
          <circle cx="270" cy="150" r="6" stroke="#C4813A" strokeWidth="1.5" fill="none" />
          {/* Vertebral foramen (center opening) */}
          <ellipse
            cx="200"
            cy="150"
            rx="35"
            ry="20"
            stroke="#C4813A"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Dens/odontoid process hint */}
          <circle cx="200" cy="145" r="8" stroke="#C4813A" strokeWidth="1" fill="rgba(196, 129, 58, 0.05)" />
        </g>

        {/* Labels */}
        <text x="200" y="40" textAnchor="middle" fill="#C4813A" fontSize="14" fontFamily="var(--font-cormorant)" fontWeight="600" letterSpacing="0.1em">
          THE ATLAS VERTEBRA (C1)
        </text>
        <text x="200" y="245" textAnchor="middle" fill="#C4813A" fontSize="11" opacity="0.7" fontFamily="var(--font-body)">
          Misaligned → Corrected
        </text>
        {/* Arrow */}
        <path d="M175 232 L225 232" stroke="#C4813A" strokeWidth="1" opacity="0.5" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#C4813A" opacity="0.5" />
          </marker>
        </defs>
      </svg>

      <style jsx>{`
        .atlas-misaligned {
          transition: opacity 1.5s ease 0.5s;
        }
        .atlas-aligned {
          opacity: 0;
          transition: opacity 1.5s ease 1s;
        }
        .animate-atlas .atlas-misaligned {
          opacity: 0;
        }
        .animate-atlas .atlas-aligned {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
