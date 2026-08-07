"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import HolographicCard from "@/components/ui/HolographicCard";
import {
  Globe,
  Smartphone,
  BarChart2,
  Palette,
  LayoutDashboard,
  PenTool,
  Users,
  Code2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useProjectModal } from "@/components/ui/ModalContext";

const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    description: "Brand sites, landing pages, and marketing sites built to convert and engineered to last.",
    href: "/services#website-development",
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    description: "Mobile and web apps that work smoothly across Android, iOS, and browser. Built to scale.",
    href: "/services#app-development",
  },
  {
    id: "social-media-marketing",
    icon: BarChart2,
    title: "Social Media Marketing",
    description: "Real growth through good content, consistent posting, and campaigns that actually work.",
    href: "/services#social-media-marketing",
  },
  {
    id: "graphic-designing",
    icon: Palette,
    title: "Graphic Designing",
    description: "Logos, brand kits, social creatives, and pitch decks. Visuals that stay consistent everywhere.",
    href: "/services#graphic-designing",
  },
  {
    id: "saas-applications",
    icon: LayoutDashboard,
    title: "SaaS Applications",
    description: "Subscription products built from scratch with clean architecture, billing, and dashboards.",
    href: "/services#saas-applications",
  },
  {
    id: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    description: "Interfaces that guide users naturally. Wireframes to Figma to production-ready specs.",
    href: "/services#ui-ux-design",
  },
  {
    id: "crm-tools",
    icon: Users,
    title: "CRM Tools",
    description: "Stop losing leads. We build or integrate CRMs that match how your business actually runs.",
    href: "/services#crm-tools",
  },
  {
    id: "custom-softwares",
    icon: Code2,
    title: "Custom Softwares",
    description: "When no off-the-shelf tool fits. We build exactly what your process needs, from scratch.",
    href: "/services#custom-softwares",
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
              Eight services.{" "}
              <span className="text-ruby-gradient">One standard.</span>
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} direction="left">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#888] hover:text-[#DC143C] transition-colors duration-200 whitespace-nowrap magnetic"
          >
            All Services
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>

      {/* Service grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.id} delay={i * 0.07}>
              <Link href={service.href} className="block h-full magnetic group">
                <HolographicCard className="h-full">
                  <div className="flex flex-col gap-5 p-6 h-full">
                    {/* Animated Icon Container */}
                    <div className="w-11 h-11 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#DC143C]/50 group-hover:bg-[#DC143C]/10 transition-all duration-300 relative overflow-hidden">
                      <motion.div className="absolute inset-0 bg-gradient-to-tr from-[#DC143C] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <Icon
                        size={20}
                        className="text-[#666] group-hover:text-[#DC143C] transition-colors duration-300 relative z-10 group-hover:scale-110 transform"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-display font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-xs text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#111] flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#444] group-hover:text-[#DC143C] transition-colors duration-300">
                      Learn more
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 5, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={12} />
                      </motion.div>
                    </div>
                  </div>
                </HolographicCard>
              </Link>
            </FadeIn>
          );
        })}

        {/* CTA tile */}
        <FadeIn delay={services.length * 0.07}>
          <button
            onClick={openModal}
            className="group flex flex-col justify-between p-6 h-full bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 cyber-border rounded-sm overflow-hidden relative magnetic text-left w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <p className="text-xs font-bold font-mono uppercase tracking-[0.18em] text-[#DC143C] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse" />
                Start a Project
              </p>
              <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#DC143C] transition-all">
                Something specific in mind?
              </h3>
              <p className="text-xs text-[#888] leading-relaxed">
                Tell us what you&apos;re building and we&apos;ll figure out the right approach.
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Book a Call</span>
              <ArrowRight size={16} className="text-[#888] transition-colors group-hover:text-white" />
            </div>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
