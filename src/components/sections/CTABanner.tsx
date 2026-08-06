"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import GlitchText from "@/components/ui/GlitchText";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useProjectModal } from "@/components/ui/ModalContext";
import { useState, useEffect } from "react";

interface CTABannerProps {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  eyebrow = "Ready to build?",
  heading = "Let's build something that feels as good as it performs.",
  subtext = "Most projects start with one conversation. Bring your idea — we'll bring the execution.",
  primaryCta = { label: "Start a Project", href: "/contact" },
  secondaryCta = { label: "View Work", href: "/work" },
}: CTABannerProps) {
  const { openModal } = useProjectModal();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-[#030303]">
      
      {/* Dramatic red lightning bolt / line separator above */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC143C] to-transparent opacity-50" />
      <motion.div 
        className="absolute top-0 left-1/2 w-[200px] h-[1px] bg-[#FF0040] shadow-[0_0_20px_#FF0040]"
        animate={isMobile ? {} : { 
          x: ["-500%", "500%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Static ruby glow — no animated blur on mobile */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(220,20,60,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="flex items-center justify-center gap-3 mb-8">
            <span className="inline-block w-8 h-px bg-[#DC143C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DC143C] font-mono">
              {eyebrow}
            </span>
            <span className="inline-block w-8 h-px bg-[#DC143C]" />
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="text-display text-white mb-8 leading-tight">
            <GlitchText text={heading} as="span" hoverOnly />
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-[#888888] max-w-xl mx-auto mb-12">{subtext}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#DC143C] text-white text-base font-bold rounded-sm hover:bg-[#FF0040] transition-all duration-300 magnetic hover:shadow-[0_0_40px_rgba(220,20,60,0.6)] active:scale-[0.98] cyber-border"
            >
              {primaryCta.label}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link
              href={secondaryCta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 border border-[#2a2a2a] text-base font-bold text-[#aaaaaa] rounded-sm hover:border-[#DC143C]/50 hover:bg-[#DC143C]/10 hover:text-white transition-all duration-300 magnetic active:scale-[0.98]"
            >
              {secondaryCta.label}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
