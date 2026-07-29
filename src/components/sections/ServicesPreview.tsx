"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import HolographicCard from "@/components/ui/HolographicCard";
import { Globe, LayoutDashboard, Rocket, Code2, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useProjectModal } from "@/components/ui/ModalContext";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    description:
      "Brand websites, marketing sites, and premium online presences — built to convert and engineered to last.",
    href: "/services#websites",
  },
  {
    id: "webapps",
    icon: LayoutDashboard,
    title: "Web App Development",
    description:
      "Dashboards, portals, and SaaS products with clean architecture and thoughtful UX.",
    href: "/services#webapps",
  },
  {
    id: "mvp",
    icon: Rocket,
    title: "MVP Development",
    description:
      "From concept to launch in weeks. Structured for speed without sacrificing foundation.",
    href: "/services#mvp",
  },
  {
    id: "ui",
    icon: Code2,
    title: "UI Engineering",
    description:
      "Pixel-precise, responsive, performant interfaces — translated faithfully from design to code.",
    href: "/services#ui",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI-Enabled Workflows",
    description:
      "Practical AI integrations that add real value — not buzzwords bolted on.",
    href: "/services#ai",
  },
];

export default function ServicesPreview() {
  const { openModal } = useProjectModal();

  return (
    <section className="relative py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8 bg-[#030303]">
      
      {/* Background scanline effect */}
      <div className="absolute inset-0 scanline-overlay opacity-20" />
      
      {/* Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#DC143C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C] font-mono">
                What We Build
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white">
              Services built for<br />
              <span className="text-ruby-gradient">execution</span>, not proposals.
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} direction="left">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#888888] hover:text-[#DC143C] transition-colors duration-200 whitespace-nowrap magnetic"
          >
            All Services
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>

      {/* Service grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.id} delay={i * 0.1}>
              <Link href={service.href} className="block h-full magnetic group">
                <HolographicCard className="h-full">
                  <div className="flex flex-col gap-6 p-7 lg:p-8 h-full">
                    {/* Animated Icon Container */}
                    <div className="w-12 h-12 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#DC143C]/50 group-hover:bg-[#DC143C]/10 transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-[#DC143C] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      />
                      <Icon 
                        size={22} 
                        className="text-[#666] group-hover:text-[#DC143C] transition-colors duration-300 relative z-10 group-hover:scale-110 transform" 
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-display font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors">{service.description}</p>
                    </div>
                    
                    <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#444] group-hover:text-[#DC143C] transition-colors duration-300">
                      Explore
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 5, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </div>
                </HolographicCard>
              </Link>
            </FadeIn>
          );
        })}

        {/* CTA tile */}
        <FadeIn delay={services.length * 0.1}>
          <button
            onClick={openModal}
            className="group flex flex-col justify-between p-7 lg:p-8 h-full bg-[#0a0a0a] hover:bg-[#111111] transition-all duration-300 cyber-border rounded-sm overflow-hidden relative magnetic text-left w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <p className="text-xs font-bold font-mono uppercase tracking-[0.18em] text-[#DC143C] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse" />
                Start a Project
              </p>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#DC143C] transition-all">
                Custom Requirement?
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed">
                Have something specific in mind? Let&apos;s talk scope, timeline, and what it takes to ship it right.
              </p>
            </div>
            
            <div className="relative z-10 mt-8 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Book a Call</span>
              <ArrowRight size={18} className="text-[#888888] transition-colors group-hover:text-white" />
            </div>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
