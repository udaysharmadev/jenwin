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

// Dynamically import 3D scene (no SSR — Three.js is client-only)
const HeroScene = dynamic(() => import("@/components/ui/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const TYPEWRITER_TEXTS = ["Development Agency", "UI Engineering", "MVP Studio", "Digital Craftsmen"];

const stats = [
  { value: 50, suffix: "+", label: "Projects", icon: CheckCircle2 },
  { value: 8, prefix: "< ", suffix: " wk", label: "MVP Timeline", icon: Clock },
  { value: 100, suffix: "%", label: "On-time", icon: Zap },
  { value: 24, suffix: "/7", label: "Available", icon: Globe },
];

export default function Hero() {
  const { openModal } = useProjectModal();
  const [typewriterText, setTypewriterText] = useState(TYPEWRITER_TEXTS[0]);

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
    <section
      className="relative min-h-screen overflow-hidden bg-[#030303]"
      aria-label="Hero"
    >
      {/* Background Particle Field - reduced count for perf */}
      <ParticleField color="#DC143C" particleCount={25} className="opacity-20" />

      {/* Animated grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,20,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,20,60,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Deep crimson glow — left quadrant */}
      <motion.div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(220,20,60,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Deep glow — far right anchored to 3D scene */}
      <motion.div
        className="absolute top-0 right-[-5%] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,0,0,0.18) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Sonar rings anchored to 3D scene position */}
      <div className="absolute top-[45%] right-[8%] -translate-y-1/2 w-[520px] h-[520px] pointer-events-none lg:block hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[#DC143C]/15"
            animate={{ scale: [0.6, 1.4], opacity: [0.8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: i * 1.1 }}
          />
        ))}
      </div>

      {/* ═══════════ ASYMMETRIC LAYOUT ═══════════ */}
      {/* We use a full-bleed approach: text on left 45%, 3D fills right 55% */}
      <div className="relative z-10 min-h-screen flex items-center">

        {/* Text Column — left 45% */}
        <div className="w-full lg:w-[48%] px-6 lg:pl-16 xl:pl-24 lg:pr-0 py-40 lg:py-0 flex flex-col justify-center">

          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-[#0d0d0d] border border-[#1e1e1e] rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse shadow-[0_0_8px_#DC143C]" />
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-[#DC143C]">
              <motion.span
                key={typewriterText}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
              >
                {typewriterText}
              </motion.span>
            </span>
            <span className="w-px h-3 bg-[#2a2a2a]" />
            <span className="text-[10px] font-mono text-[#555] tracking-widest">India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-white mb-6 leading-[1.02]"
          >
            <span className="block">Built to</span>
            <span className="block">perform.</span>
            <span className="text-ruby-gradient block mt-1">
              <GlitchText text="Designed to last." hoverOnly />
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-24 h-[2px] bg-gradient-to-r from-[#DC143C] to-transparent mb-8"
          />

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-base lg:text-lg text-[#888888] max-w-md leading-relaxed mb-10"
          >
            Engineering precision, product thinking, and design discipline — for Indian founders building what&apos;s next.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <button
              onClick={openModal}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-[#DC143C] text-white text-sm font-bold rounded-md overflow-hidden hover:shadow-[0_0_35px_rgba(220,20,60,0.55)] transition-all duration-300 active:scale-[0.97]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF0040] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[#252525] text-sm font-bold text-[#aaa] rounded-md hover:border-[#DC143C]/40 hover:bg-[#DC143C]/08 hover:text-white transition-all duration-300 active:scale-[0.97]"
            >
              See Our Work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats — horizontal micro strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-4 gap-4 border-t border-[#111] pt-8"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col gap-1 group">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon size={10} className="text-[#DC143C] opacity-70" />
                  </div>
                  <span className="text-xl font-display font-bold text-white leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1800 + i * 150}
                    />
                  </span>
                  <span className="text-[10px] text-[#555] font-medium tracking-wide uppercase">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 3D Scene Column — right 55%, bleeds to edge */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-0 top-0 w-[58%] h-full pointer-events-none"
        >
          <HeroScene />
        </motion.div>

        {/* Mobile 3D scene (below text) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="lg:hidden absolute bottom-8 left-0 right-0 h-[280px]"
        >
          <HeroScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 lg:left-20 lg:translate-x-0"
      >
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-[#DC143C] to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#444] rotate-0">Scroll</span>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
        style={{ background: "linear-gradient(to bottom, transparent, #030303)" }}
      />
    </section>
  );
}
