"use client";

import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Strategy Before Screens",
    description:
      "We start with the problem, not the palette. Every project begins with a clear understanding of business goals, user needs, and the constraints that define a great solution.",
  },
  {
    number: "02",
    title: "Design With Restraint",
    description:
      "Good design is invisible. We apply visual discipline that serves clarity — not decoration. Every element earns its place.",
  },
  {
    number: "03",
    title: "Code With Maintainability",
    description:
      "We write code you can own. Clean architecture, documented decisions, and a codebase your team can build on long after we're done.",
  },
  {
    number: "04",
    title: "Delivery With Accountability",
    description:
      "We ship on time, communicate clearly, and treat your project with the same urgency we'd want for our own. No surprises.",
  },
];

export default function WhyJenwin() {
  return (
    <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <FadeIn>
          <p className="flex items-center gap-3 mb-4">
            <span className="inline-block w-6 h-px bg-[#DC143C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C] font-mono">
              Why Jenwin
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-headline text-white">
            Sharp taste.<br />
            Clean code.<br />
            <span className="text-ruby-gradient">Real accountability.</span>
          </h2>
        </FadeIn>
      </div>

      {/* Differentiators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {differentiators.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1} direction="up">
            <div className="relative p-8 lg:p-12 h-full flex flex-col gap-6 group overflow-hidden bg-[#0a0a0a] border border-[#141414] rounded-sm transition-colors duration-500 hover:bg-[#0d0d0d]">
              
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#DC143C] to-[#FF0040] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] -z-10" />
              <div className="absolute inset-[1px] bg-[#0a0a0a] group-hover:bg-[#050505] transition-colors duration-500 rounded-sm -z-10" />

              {/* Number background (Large) */}
              <div className="absolute -right-4 -bottom-8 text-[180px] font-display font-bold text-[#111111] leading-none select-none transition-transform duration-700 group-hover:-translate-y-4 group-hover:text-[#161616]">
                {item.number}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold text-[#DC143C] tracking-widest font-mono">
                    {item.number}
                  </span>
                  <div className="h-px bg-[#222] flex-1 relative overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full w-1/3 bg-[#DC143C]"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "300%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-[#DC143C] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-base text-[#888888] leading-relaxed max-w-sm group-hover:text-[#aaaaaa] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
