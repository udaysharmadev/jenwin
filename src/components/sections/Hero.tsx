"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Clock, CheckCircle2, Globe } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useProjectModal } from "@/components/ui/ModalContext";
import GlitchText from "@/components/ui/GlitchText";
import ParticleField from "@/components/ui/ParticleField";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// Only loads Three.js on desktop — never shipped to mobile
const HeroScene = dynamic(() => import("@/components/ui/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const TYPEWRITER_TEXTS = ["Development Agency", "UI Engineering", "MVP Studio", "Digital Craftsmen"];

const stats = [
  { value: 50,  suffix: "+",   label: "Projects",     icon: CheckCircle2 },
  { value: 8,   prefix: "< ",  suffix: " wk", label: "MVP Timeline", icon: Clock },
  { value: 100, suffix: "%",   label: "On-time",      icon: Zap },
  { value: 24,  suffix: "/7",  label: "Available",    icon: Globe },
];

export default function Hero() {
  const { openModal } = useProjectModal();
  const [typewriterText, setTypewriterText] = useState(TYPEWRITER_TEXTS[0]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqMobile  = window.matchMedia("(max-width: 767px)");
    setIsDesktop(mqDesktop.matches);
    setIsMobile(mqMobile.matches);
    const h1 = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    const h2 = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mqDesktop.addEventListener("change", h1);
    mqMobile.addEventListener("change", h2);
    return () => { mqDesktop.removeEventListener("change", h1); mqMobile.removeEventListener("change", h2); };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterText((current) => {
        const idx = TYPEWRITER_TEXTS.indexOf(current);
        return TYPEWRITER_TEXTS[(idx + 1) % TYPEWRITER_TEXTS.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] bg-[#030303]" aria-label="Hero">

      {/* Particles — fewer on mobile */}
      <ParticleField color="#DC143C" particleCount={isMobile ? 10 : 25} className="opacity-20" />

      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,20,60,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(220,20,60,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs — no Framer motion animation on mobile (too expensive) */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(220,20,60,0.10) 0%, transparent 65%)",
          filter: isDesktop ? "blur(60px)" : "none",
        }}
      />
      <div
        className="absolute top-0 right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(139,0,0,0.14) 0%, transparent 60%)",
          filter: isDesktop ? "blur(80px)" : "none",
        }}
      />

      {/* Sonar rings — desktop only */}
      {isDesktop && (
        <div className="absolute top-[45%] right-[8%] -translate-y-1/2 w-[520px] h-[520px] pointer-events-none hidden lg:block">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-[#DC143C]/15"
              animate={{ scale: [0.6, 1.4], opacity: [0.8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: i * 1.1 }}
            />
          ))}
        </div>
      )}

      {/* ═══ LAYOUT ═══ */}
      <div className="relative z-10 min-h-[100svh] flex items-center">

        {/* Text column */}
        <div className="w-full lg:w-[50%] px-5 sm:px-8 lg:pl-16 xl:pl-24 lg:pr-4 pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-20 lg:pb-12 flex flex-col justify-center">

          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 py-1.5 bg-[#0d0d0d] border border-[#1e1e1e] rounded-full w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC143C] animate-pulse shadow-[0_0_6px_#DC143C]" />
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.18em] text-[#DC143C]">
              <motion.span
                key={typewriterText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {typewriterText}
              </motion.span>
            </span>
            <span className="w-px h-3 bg-[#2a2a2a]" />
            <span className="text-[10px] font-mono text-[#555] tracking-widest">India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-white mb-5 leading-[1.02]"
          >
            <span className="block">Built to</span>
            <span className="block">perform.</span>
            <span className="text-ruby-gradient block mt-1">
              <GlitchText text="Designed to last." hoverOnly />
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-20 h-[2px] bg-gradient-to-r from-[#DC143C] to-transparent mb-6 sm:mb-8"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-base lg:text-lg text-[#888] max-w-md leading-relaxed mb-8 sm:mb-10"
          >
            Engineering precision, product thinking, and design discipline — for Indian founders building what&apos;s next.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.38 }}
            className="flex flex-wrap items-center gap-3 mb-12 sm:mb-16"
          >
            <button
              onClick={openModal}
              className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#DC143C] text-white text-sm font-bold rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(220,20,60,0.5)] transition-shadow duration-300 active:scale-[0.97]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF0040] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-[#252525] text-sm font-bold text-[#aaa] rounded-lg hover:border-[#DC143C]/40 hover:bg-[#DC143C]/08 hover:text-white transition-all duration-300 active:scale-[0.97]"
            >
              See Our Work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 border-t border-[#111] pt-7"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1 mb-1">
                    <Icon size={10} className="text-[#DC143C] opacity-70" />
                  </div>
                  <span className="text-xl sm:text-2xl font-display font-bold text-white leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1600 + i * 120}
                    />
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#555] font-medium tracking-wide uppercase mt-0.5">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 3D Scene — desktop only */}
        {isDesktop && (
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute right-0 top-0 w-[58%] h-full pointer-events-none"
          >
            <HeroScene />
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-[#DC143C] to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#444]">Scroll</span>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{ background: "linear-gradient(to bottom, transparent, #030303)" }}
      />
    </section>
  );
}
