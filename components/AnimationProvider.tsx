"use client";

import { createContext, useContext, useEffect, useRef, ReactNode } from "react";

interface AnimationContextType {
  isReady: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ isReady: false });

export function useAnimation() {
  return useContext(AnimationContext);
}

function initCountUps(gsap: typeof import("gsap").default) {
  const countEls = Array.from(
    document.querySelectorAll<HTMLElement>("[data-count-to]")
  ).filter((el) => el.dataset.countInitialized !== "true");

  if (countEls.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        if (el.dataset.countInitialized === "true") return;
        el.dataset.countInitialized = "true";
        observer.unobserve(el);

        const target = parseFloat(el.dataset.countTo || "0");
        const isDecimal = target % 1 !== 0;
        const suffix = el.dataset.countSuffix || "";
        const prefix = el.dataset.countPrefix || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent =
              prefix +
              (isDecimal
                ? obj.val.toFixed(1)
                : Math.round(obj.val).toString()) +
              suffix;
          },
        });
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  countEls.forEach((el) => {
    el.textContent =
      (el.dataset.countPrefix || "") + "0" + (el.dataset.countSuffix || "");
    observer.observe(el);
  });
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  const isReady = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (typeof history !== "undefined") history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      // Scroll-triggered section animations
      const animEls = document.querySelectorAll("[data-animate]");
      animEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // CountUp with IntersectionObserver
      initCountUps(gsap);

      isReady.current = true;
    };

    init();
  }, []);

  return (
    <AnimationContext.Provider value={{ isReady: isReady.current }}>
      {children}
    </AnimationContext.Provider>
  );
}
