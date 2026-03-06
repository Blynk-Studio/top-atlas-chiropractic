"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1B3A2E]"
    >
      {/* Animated particle background */}
      <HeroParticles />

      {/* Ring motif overlay */}
      <div className="hero-ring absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[#C4813A]/10 sm:w-[700px] sm:h-[700px]" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-[#C4813A]/5 sm:w-[500px] sm:h-[500px]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-[#C4813A]/5 sm:w-[300px] sm:h-[300px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
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
        <p className="hero-sub mx-auto max-w-xl text-base text-white/60 leading-relaxed sm:text-lg mb-10">
          Dr. Shelley Lorenzen has spent 19 years mastering the most precise, gentle chiropractic technique in the world. No cracking. No twisting. Just one precise correction that changes everything.
        </p>
        <div className="hero-ctas flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 20));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 129, 58, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(196, 129, 58, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
