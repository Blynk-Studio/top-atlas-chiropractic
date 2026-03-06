"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SpineAlignment } from "@/components/SpineAlignment";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const animate = async () => {
      const { default: gsap } = await import("gsap");
      if (!isMounted || !containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".hero-word");
      const sub = containerRef.current.querySelector(".hero-sub");
      const ctas = containerRef.current.querySelector(".hero-ctas");
      const ring = containerRef.current.querySelector(".hero-ring");

      gsap.set(words, { y: 60, opacity: 0 });
      gsap.set([sub, ctas], { y: 30, opacity: 0 });
      gsap.set(ring, { scale: 0.8, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "elastic.out(1, 0.75)",
      })
        .to(sub, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(ctas, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(ring, { scale: 1, opacity: 0.1, duration: 1.2, ease: "power2.out" }, "-=1");
    };

    animate();
    return () => { isMounted = false; };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1B3A2E]"
    >
      {/* Subtle hero background image */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/hero.jpg" alt="Top Atlas Chiropractic clinic" fill className="object-cover" priority />
      </div>

      {/* Ring motif overlay */}
      <div className="hero-ring absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[#C4813A]/10 sm:w-[700px] sm:h-[700px]" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-[#C4813A]/5 sm:w-[500px] sm:h-[500px]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-[#C4813A]/5 sm:w-[300px] sm:h-[300px]" />
      </div>

      {/* Copper glow behind spine */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-[#C4813A]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        {/* LEFT: Text */}
        <div className="text-left order-2 lg:order-1">
          <p className="mb-6 text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C4813A]">
            NUCCA Upper Cervical Chiropractor, Austin TX
          </p>
          <h1 className="font-[var(--font-cormorant)] text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[0.95] text-white mb-6">
            <span className="hero-word inline-block">Precision</span>{" "}
            <span className="hero-word inline-block">Alignment.</span>
            <br />
            <span className="hero-word inline-block text-[#C4813A]">Lasting</span>{" "}
            <span className="hero-word inline-block text-[#C4813A]">Relief.</span>
          </h1>
          <p className="hero-sub max-w-xl text-base text-white/60 leading-relaxed sm:text-lg mb-10">
            Dr. Shelley Lorenzen has spent 19 years mastering the most precise, gentle chiropractic technique in the world. No cracking. No twisting. Just one precise correction that changes everything.
          </p>
          <div className="hero-ctas flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="/new-patient"
              className="w-full sm:w-auto rounded-full bg-[#C4813A] px-8 py-3.5 text-center text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#E8A85A] hover:scale-105"
            >
              Schedule Your First Visit
            </Link>
            <Link
              href="/nucca"
              className="w-full sm:w-auto rounded-full border-2 border-white/20 px-8 py-3.5 text-center text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Discover NUCCA Care
            </Link>
          </div>
        </div>

        {/* RIGHT: Spine */}
        <div className="flex flex-col items-center order-1 lg:order-2">
          <div className="w-[160px] h-[380px] lg:w-[200px] lg:h-[480px]">
            <SpineAlignment />
          </div>
          <p className="mt-4 text-center text-xs italic text-[#7A9E8E] tracking-wide">
            The atlas vertebra. Where alignment begins.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
