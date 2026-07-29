"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    slug: "fintrack-dashboard",
    type: "SaaS Web App",
    title: "FinTrack",
    outcome: "Financial dashboard for indie operators — built in 6 weeks, used daily by 200+ operators.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    accent: "#DC143C",
    num: "01",
  },
  {
    slug: "launchpad-mvp",
    type: "MVP Build",
    title: "Launchpad",
    outcome: "Zero-to-launch for a B2B SaaS founder — 40 paying users within the first week.",
    tags: ["React", "Supabase", "Stripe"],
    accent: "#8b5cf6",
    num: "02",
  },
  {
    slug: "atlas-brand-site",
    type: "Brand Website",
    title: "Atlas",
    outcome: "Premium brand website that doubled qualified inquiry volume in Q1.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    accent: "#0ea5e9",
    num: "03",
  },
];

export default function FeaturedWork() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-40 bg-[#030303] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <FadeIn>
              <p className="flex items-center gap-3 mb-4">
                <span className="inline-block w-6 h-px bg-[#DC143C]" />
                <span className="text-xs font-bold font-mono uppercase tracking-[0.18em] text-[#DC143C]">
                  Selected Work
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="text-headline text-white">
                Proof, not promises.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1} direction="left">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#888] hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              View All Work
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Project List — horizontal card layout */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                onMouseEnter={() => setHovered(project.slug)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 bg-[#080808] border border-[#111] rounded-xl hover:border-[#1e1e1e] transition-all duration-500 hover:bg-[#0c0c0c] relative overflow-hidden"
              >
                {/* Hover glow bg */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: hovered === project.slug ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, ${project.accent}08 0%, transparent 60%)`
                  }}
                />

                {/* Left — Number */}
                <div className="flex-shrink-0 hidden lg:block">
                  <span
                    className="text-7xl font-display font-black leading-none select-none transition-colors duration-500"
                    style={{ color: hovered === project.slug ? `${project.accent}40` : "#111" }}
                  >
                    {project.num}
                  </span>
                </div>

                {/* Left border accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-xl"
                  style={{ background: project.accent }}
                  animate={{ scaleY: hovered === project.slug ? 1 : 0 }}
                  initial={{ scaleY: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Center — Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                      style={{
                        color: project.accent,
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accent}25`,
                      }}
                    >
                      {project.type}
                    </span>
                    <span className="text-[10px] text-[#333] font-mono uppercase tracking-widest hidden lg:block">
                      {project.num}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#aaa] transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#888] leading-relaxed max-w-lg group-hover:text-[#aaa] transition-colors duration-300">
                    {project.outcome}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#555] bg-[#111] border border-[#1a1a1a] px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — CTA Arrow */}
                <div className="flex-shrink-0 relative z-10 hidden lg:flex items-center">
                  <motion.div
                    animate={{
                      x: hovered === project.slug ? 0 : -10,
                      opacity: hovered === project.slug ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-sm font-bold whitespace-nowrap"
                    style={{ color: project.accent }}
                  >
                    View Case Study
                    <ExternalLink size={14} />
                  </motion.div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
