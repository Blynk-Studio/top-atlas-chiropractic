"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const onMouseEnterInteractive = () => {
      ring.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px) scale(1.4)`;
      dot.style.opacity = "0";
    };

    const onMouseLeaveInteractive = () => {
      dot.style.opacity = "1";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      const isHovering = dot.style.opacity === "0";
      if (!isHovering) {
        ring.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px) scale(1)`;
      } else {
        ring.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px) scale(1.4)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveEls = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label'
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-[28px] w-[28px] rounded-full border-2 border-[#C4813A] md:block"
        style={{
          transition: "transform cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-[8px] w-[8px] rounded-full bg-[#C4813A] md:block"
        style={{
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
