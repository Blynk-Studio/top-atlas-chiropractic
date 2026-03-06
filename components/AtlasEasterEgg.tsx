"use client";

import { useState, useCallback } from "react";
import { AtlasVisual } from "./AtlasVisual";

export function AtlasEasterEgg() {
  const [clicks, setClicks] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleClick = useCallback(() => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 3 && !revealed) {
      setRevealed(true);
    }
  }, [clicks, revealed]);

  return (
    <div className="relative" onClick={handleClick} role="presentation">
      <div className={revealed ? "animate-spin-slow" : ""}>
        <AtlasVisual />
      </div>
      {revealed && (
        <p
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs italic text-[#C4813A] animate-fade-in"
        >
          You found it. The bone that changes everything.
        </p>
      )}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2s ease-in-out 1;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, 8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
