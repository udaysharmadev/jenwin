"use client";

import FadeIn from "@/components/ui/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description: "We map goals, audience, constraints, and scope. Clarity before commitment.",
    detail: "Deep-dive calls, competitor analysis, and a clear project brief — before a single wireframe.",
  },
  {
    number: "02",
    title: "Design",
    icon: Paintbrush,
    description: "Structure, content, visual language, and interaction — aligned before a line of code.",
    detail: "Figma prototypes, user flows, and design system setup. You approve before we build.",
  },
  {
    number: "03",
    title: "Build",
    icon: Code2,
    description: "Precision development with performance, responsiveness, and maintainability in mind.",
    detail: "Weekly deploys to staging. You see progress every step of the way.",
  },
  {
    number: "04",
    title: "Launch",
    icon: Rocket,
    description: "Test, refine, deploy. Clean handoff. Continued support on request.",
    detail: "We stay for 2 weeks post-launch to squash anything that comes up.",
  },
];

export default function ProcessPreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-[#030303] relative overflow-hidden border-y border-[#0a0a0a]">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#DC143C]" />
              <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#DC143C]">
                How We Work
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white">
              A process built for{" "}
              <span className="text-ruby-gradient">clarity</span>, not comfort.
            </h2>
          </FadeIn>
        </div>

        {/* Animated connector line (desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#111]" />
          <motion.div
            className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#8B0000] via-[#DC143C] to-[#FF0040] shadow-[0_0_12px_#DC143C]"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="group relative flex flex-col gap-6 p-6 lg:p-7 bg-[#080808] border border-[#111] rounded-xl hover:border-[#1e1e1e] hover:bg-[#0c0c0c] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(220,20,60,0.06)] h-full">

                  {/* Node dot at top (aligns with connector line) */}
                  <div className="hidden lg:flex absolute -top-[25px] left-7 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#0c0c0c] border-2 border-[#333] group-hover:border-[#DC143C] transition-colors duration-500 z-10" />
                  </div>

                  {/* Step number + Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center border border-[#DC143C]/20 bg-[#DC143C]/08 group-hover:bg-[#DC143C]/15 group-hover:border-[#DC143C]/40 transition-all duration-300"
                    >
                      <Icon size={20} className="text-[#DC143C]" />
                    </div>
                    <span className="text-4xl font-display font-black text-[#111] group-hover:text-[#181818] transition-colors duration-500 select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-[#DC143C] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail — appears on hover */}
                  <div className="pt-4 border-t border-[#111] overflow-hidden">
                    <p className="text-[11px] font-mono text-[#DC143C]/60 leading-relaxed group-hover:text-[#DC143C]/90 transition-colors duration-300">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
