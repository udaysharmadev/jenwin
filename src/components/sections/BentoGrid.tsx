"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, Code2, Rocket, Globe, ShieldCheck, Cpu } from "lucide-react";

const bentoItems = [
  {
    id: 1,
    size: "large", // col-span-2
    icon: Rocket,
    label: "Speed",
    title: "< 8 week MVPs",
    description: "From validated idea to live product. We've built and shipped 12+ MVPs in under 8 weeks — without cutting corners on architecture.",
    stat: "12+",
    statLabel: "MVPs shipped",
    accent: "#DC143C",
    bg: "from-[#0e0404] to-[#0a0a0a]",
  },
  {
    id: 2,
    size: "small",
    icon: Code2,
    label: "Engineering",
    title: "Clean Code, Always",
    description: "No tech debt hand-offs. We write code you can own for years.",
    stat: "100%",
    statLabel: "documented",
    accent: "#8B0000",
    bg: "from-[#080808] to-[#0a0a0a]",
  },
  {
    id: 3,
    size: "small",
    icon: ShieldCheck,
    label: "Reliability",
    title: "On-time, Every time",
    description: "100% on-time delivery across 50+ projects. Accountability is our default.",
    stat: "50+",
    statLabel: "projects on time",
    accent: "#DC143C",
    bg: "from-[#080808] to-[#0a0a0a]",
  },
  {
    id: 4,
    size: "small",
    icon: Globe,
    label: "Scale",
    title: "Global-Ready Infra",
    description: "Edge-deployed, CDN-optimized, sub-100ms TTFB.",
    stat: "<100ms",
    statLabel: "time to byte",
    accent: "#8B0000",
    bg: "from-[#080808] to-[#0a0a0a]",
  },
  {
    id: 5,
    size: "large",
    icon: Cpu,
    label: "AI",
    title: "AI-Enabled Products",
    description: "Not AI for buzzwords — AI for real leverage. We build workflows that reduce ops cost, automate repetitive tasks, and give your product an unfair edge.",
    stat: "GPT-4o / Gemini",
    statLabel: "integrated",
    accent: "#FF0040",
    bg: "from-[#0e0404] to-[#0a0a0a]",
  },
  {
    id: 6,
    size: "small",
    icon: Zap,
    label: "Performance",
    title: "Lighthouse 95+",
    description: "Performance isn't optional — it's baked into every build.",
    stat: "95+",
    statLabel: "lighthouse score",
    accent: "#DC143C",
    bg: "from-[#080808] to-[#0a0a0a]",
  },
];

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#030303] relative overflow-hidden">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="inline-block w-6 h-px bg-[#DC143C]" />
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#DC143C]">
            Why We&apos;re Different
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-headline text-white"
        >
          Numbers that<br />
          <span className="text-ruby-gradient">actually matter.</span>
        </motion.h2>
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {bentoItems.map((item, i) => {
          const Icon = item.icon;
          const isLarge = item.size === "large";
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${isLarge ? "lg:col-span-2" : ""} group relative rounded-xl overflow-hidden border border-[#111] bg-gradient-to-b ${item.bg} p-7 flex flex-col gap-5 hover:border-[#2a2a2a] transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,20,60,0.08)]`}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${item.accent}08 0%, transparent 70%)`
                }}
              />

              {/* Icon + Label */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border"
                  style={{
                    background: `${item.accent}15`,
                    borderColor: `${item.accent}25`,
                  }}
                >
                  <Icon size={18} style={{ color: item.accent }} />
                </div>
                <span
                  className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-1 rounded-full border"
                  style={{
                    color: item.accent,
                    borderColor: `${item.accent}30`,
                    background: `${item.accent}10`,
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#aaa] transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed group-hover:text-[#888] transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Stat */}
              <div className="pt-4 border-t border-[#111] flex items-end justify-between">
                <div>
                  <div
                    className="text-2xl font-display font-black tracking-tight"
                    style={{ color: item.accent }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-[10px] font-mono text-[#444] uppercase tracking-wider mt-0.5">
                    {item.statLabel}
                  </div>
                </div>
                {/* Animated corner accent */}
                <motion.div
                  className="w-8 h-8 rounded-full"
                  style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
                  animate={isMobile ? {} : { scale: [1, 1.2, 1] }}
                  transition={isMobile ? {} : { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
