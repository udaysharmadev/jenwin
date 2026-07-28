import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { Globe, LayoutDashboard, Rocket, Code2, Cpu, ArrowRight } from "lucide-react";

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
  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">
                What We Build
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white">
              Services built for<br />execution, not proposals.
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} direction="left">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#888888] hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            All Services
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141414] rounded-sm overflow-hidden border border-[#141414]">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.id} delay={i * 0.07}>
              <Link
                href={service.href}
                className="group flex flex-col gap-4 bg-[#0a0a0a] p-7 lg:p-8 h-full hover:bg-[#0f0f0f] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-sm bg-[#161616] border border-[#222222] flex items-center justify-center group-hover:border-[#D81B60]/40 group-hover:bg-[#D81B60]/10 transition-all duration-200">
                  <Icon size={18} className="text-[#D81B60]" />
                </div>
                <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{service.description}</p>
                <div className="mt-auto pt-3 flex items-center gap-1.5 text-xs font-semibold text-[#444444] group-hover:text-[#D81B60] transition-colors duration-200">
                  Learn more
                  <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </FadeIn>
          );
        })}

        {/* CTA tile */}
        <FadeIn delay={services.length * 0.07}>
          <Link
            href="/contact"
            className="group flex flex-col justify-between bg-[#D81B60]/5 border-[#D81B60]/10 p-7 lg:p-8 h-full hover:bg-[#D81B60]/10 transition-all duration-200"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60] mb-3">
                Start a Project
              </p>
              <p className="text-sm text-[#666666] leading-relaxed">
                Have something specific in mind? Let&apos;s talk scope, timeline, and what it takes to ship it right.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Book a Call
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
