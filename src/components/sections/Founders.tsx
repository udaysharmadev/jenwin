"use client";

import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Server, BarChart3 } from "lucide-react";
import Image from "next/image";

const founders = [
  {
    name: "Mohd Adeeb",
    role: "Co-founder & Lead Developer",
    tagline: "The code behind the craft.",
    focus: "Development & AI",
    description:
      "Adeeb leads the development front at Jenwin. He architects full-stack products, integrates cutting-edge AI capabilities, and is obsessed with writing code that is both powerful and maintainable.",
    skills: ["Full-Stack Dev", "AI/LLM Integration", "Next.js", "Python"],
    initials: "MA",
    icon: Code2,
    photoSrc: null, // Replace with: "/founders/adeeb.jpg"
    gradient: "from-[#8B0000] via-[#DC143C] to-[#FF0040]",
    glowColor: "rgba(220,20,60,0.2)",
    borderColor: "rgba(220,20,60,0.2)",
    accentColor: "#DC143C",
    num: "01",
  },
  {
    name: "Uday Sharma",
    role: "Co-founder & Tech Lead",
    tagline: "Infrastructure that never sleeps.",
    focus: "Integrations & DevOps",
    description:
      "Uday owns the technical infrastructure at Jenwin. From CI/CD pipelines to third-party integrations and cloud deployments. He makes sure everything runs fast, reliably, and scales when it needs to.",
    skills: ["DevOps & CI/CD", "System Integrations", "Cloud Infra", "APIs"],
    initials: "US",
    icon: Server,
    photoSrc: null, // Replace with: "/founders/uday.jpg"
    gradient: "from-[#1a0050] via-[#4c0099] to-[#8b5cf6]",
    glowColor: "rgba(139,92,246,0.2)",
    borderColor: "rgba(139,92,246,0.2)",
    accentColor: "#8b5cf6",
    num: "02",
  },
  {
    name: "Sameer Saifi",
    role: "Co-founder & Head of Operations",
    tagline: "The engine that makes things ship.",
    focus: "Management & Marketing",
    description:
      "Sameer runs the operational and marketing side of Jenwin. He manages client relationships, coordinates delivery, drives outreach strategy, and makes sure every project lands the way it should. On time and on brand.",
    skills: ["Project Management", "Marketing Strategy", "Client Success", "Growth"],
    initials: "SS",
    icon: BarChart3,
    photoSrc: null, // Replace with: "/founders/sameer.jpg"
    gradient: "from-[#003d4c] via-[#006080] to-[#0ea5e9]",
    glowColor: "rgba(14,165,233,0.2)",
    borderColor: "rgba(14,165,233,0.2)",
    accentColor: "#0ea5e9",
    num: "03",
  },
];

export default function Founders() {
  return (
    <section className="py-24 lg:py-40 bg-[#030303] relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#DC143C] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <FadeIn>
          <p className="flex items-center gap-3 mb-5">
            <span className="inline-block w-6 h-px bg-[#DC143C]" />
            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#DC143C]">
              The Founders
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-headline text-white max-w-2xl">
            Three builders.<br />
            <span className="text-ruby-gradient">One obsession.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-base text-[#888] mt-6 max-w-lg leading-relaxed">
            We got tired of agencies that overpromised and underdelivered. So we built the one we&apos;d always wanted to hire.
          </p>
        </FadeIn>
      </div>

      {/* Founders grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {founders.map((founder, i) => {
          const Icon = founder.icon;
          return (
            <FadeIn key={founder.name} delay={i * 0.12}>
              <motion.div
                className="group relative flex flex-col rounded-2xl overflow-hidden border bg-[#080808] transition-all duration-500 h-full"
                style={{ borderColor: founder.borderColor }}
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${founder.glowColor}` }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Gradient top strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${founder.gradient} flex-shrink-0`} />

                {/* ── PHOTO / AVATAR AREA ── */}
                <div className="relative h-52 flex-shrink-0 overflow-hidden bg-[#0c0c0c]">
                  {/* Ambient bg glow */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${founder.accentColor} 0%, transparent 70%)`
                    }}
                  />

                  {/* Architect grid lines */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(${founder.accentColor}40 1px, transparent 1px), linear-gradient(90deg, ${founder.accentColor}40 1px, transparent 1px)`,
                      backgroundSize: "30px 30px"
                    }}
                  />

                  {/* Actual photo OR placeholder avatar */}
                  {founder.photoSrc ? (
                    <Image
                      src={founder.photoSrc}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    /* Placeholder — remove when adding real photo */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-display font-black text-white shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${founder.accentColor}40, ${founder.accentColor}15)`,
                          border: `1px solid ${founder.accentColor}40`,
                        }}
                      >
                        {founder.initials}
                      </div>
                      <span className="text-[9px] font-mono text-[#333] uppercase tracking-[0.25em]">
                        Photo Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Number badge — top right */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5">
                    <span
                      className="text-[10px] font-mono font-bold tracking-widest px-2 py-1 rounded"
                      style={{
                        color: founder.accentColor,
                        background: `${founder.accentColor}15`,
                        border: `1px solid ${founder.accentColor}30`
                      }}
                    >
                      {founder.num}
                    </span>
                  </div>

                  {/* Role icon — bottom left */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${founder.accentColor}20`,
                        border: `1px solid ${founder.accentColor}30`
                      }}
                    >
                      <Icon size={15} style={{ color: founder.accentColor }} />
                    </div>
                  </div>
                </div>

                {/* ── CONTENT ── */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Name & role */}
                  <div className="mb-4">
                    <p
                      className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-2"
                      style={{ color: founder.accentColor }}
                    >
                      {founder.focus}
                    </p>
                    <h3 className="text-2xl font-display font-bold text-white leading-tight mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-[#555] font-medium">
                      {founder.role}
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs font-mono text-[#444] italic mb-4 border-l-2 pl-3" style={{ borderColor: `${founder.accentColor}40` }}>
                    &ldquo;{founder.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#888] leading-relaxed mb-6 flex-1 group-hover:text-[#aaa] transition-colors duration-300">
                    {founder.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                        style={{
                          color: founder.accentColor,
                          background: `${founder.accentColor}10`,
                          border: `1px solid ${founder.accentColor}20`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="flex items-center justify-between pt-5 border-t"
                    style={{ borderColor: "#111" }}
                  >
                    <span className="text-[10px] font-mono text-[#333] uppercase tracking-widest">
                      Co-Founder
                    </span>
                    <motion.div
                      className="flex items-center gap-1.5 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: founder.accentColor }}
                    >
                      Connect <ArrowUpRight size={11} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>

      {/* Bottom strip */}
      <FadeIn delay={0.35}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-10 border-t border-[#0f0f0f] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="text-sm text-[#555] max-w-md leading-relaxed">
            Based in India. Building for the world. Every line of code, every pixel, every decision. By people who care deeply about craft.
          </p>
          <div className="flex items-center gap-2.5 px-4 py-2 bg-[#0a0a0a] border border-[#111] rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_#22c55e]" />
            <span className="text-[11px] font-mono text-[#555] uppercase tracking-widest">Open for projects · 2026</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
