import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Jenwin",
  description:
    "Real projects we've built — e-commerce stores, apps, brand sites, and full-stack platforms for founders across India.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(220,20,60,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-[#DC143C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C]">Our Work</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-headline text-white max-w-2xl mb-6">
              Real projects. Real results.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#666666] max-w-lg leading-relaxed">
              We don&apos;t do portfolio fluff. Every project here is live, built by us, and shipped to real users.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="divider mx-6 lg:mx-8" />

      {/* Projects grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.07}>
              <Link
                href={`/work/${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl bg-[#080808] border border-[#1a1a1a] transition-all duration-500 hover:border-[#333] hover:bg-[#0c0c0c] hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
              >
                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                />

                {/* Screenshot / Image area */}
                <div className="relative w-full h-48 bg-[#0d0d0d] overflow-hidden border-b border-[#111]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: `radial-gradient(circle, ${project.accent}10 0%, transparent 70%)` }}
                    >
                      <span className="text-2xl font-black font-display text-[#333]">
                        {project.logoText || project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

                  {/* Type badge — overlaid on image */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                      style={{
                        background: `${project.accent}22`,
                        color: project.accent,
                        border: `1px solid ${project.accent}35`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 lg:p-7">
                  {/* Logo + title row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-[#DC143C] transition-colors duration-300">
                        {project.title}
                      </h2>
                      <div
                        className="text-xs font-mono text-[#444] hover:text-[#DC143C] transition-colors flex items-center gap-1 mt-0.5"
                      >
                        {project.url}
                        <ExternalLink size={10} />
                      </div>
                    </div>
                    {project.label && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#555] bg-[#111] border border-[#1e1e1e] px-2 py-1 rounded-sm whitespace-nowrap shrink-0">
                        {project.label}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#666] leading-relaxed mb-4 group-hover:text-[#888] transition-colors">
                    {project.tagline}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#888]">
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: project.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#111]">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-widest text-[#444] bg-[#111] border border-[#1e1e1e] px-2 py-1 rounded-sm group-hover:border-[#2a2a2a] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Work with us"
        heading="Your project could be next."
        subtext="Bring us a clear problem or a rough idea. We'll figure out the scope and approach together."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />
    </>
  );
}
