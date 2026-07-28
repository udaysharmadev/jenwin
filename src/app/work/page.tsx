import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — Jenwin",
  description:
    "Selected projects from Jenwin — websites, web apps, and MVPs built with engineering precision and design discipline.",
};

const projects = [
  {
    slug: "fintrack-dashboard",
    type: "SaaS Web App",
    title: "FinTrack",
    summary:
      "A personal finance dashboard built for indie operators who needed real-time clarity on their numbers — without the complexity of enterprise tools.",
    outcome: "6-week delivery. Used by 200+ operators in first month.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    accent: "#D81B60",
    bgGradient: "from-[#180910] to-[#0a0a0a]",
    label: "Case Study",
  },
  {
    slug: "launchpad-mvp",
    type: "MVP Build",
    title: "Launchpad",
    summary:
      "A B2B SaaS platform for bootstrapped founders to manage client onboarding — built from zero in 7 weeks with Supabase and Stripe.",
    outcome: "40 paying users at launch. Series A conversation in month 3.",
    tags: ["React", "Supabase", "Stripe", "Vercel"],
    accent: "#7c3aed",
    bgGradient: "from-[#0f0a1a] to-[#0a0a0a]",
    label: "Case Study",
  },
  {
    slug: "atlas-brand-site",
    type: "Brand Website",
    title: "Atlas",
    summary:
      "A premium brand website for a boutique consultancy — designed to communicate gravitas and drive qualified inquiry through clear positioning.",
    outcome: "2x qualified leads in Q1 post-launch.",
    tags: ["Next.js", "Framer Motion", "Sanity CMS"],
    accent: "#0ea5e9",
    bgGradient: "from-[#050f17] to-[#0a0a0a]",
    label: "Case Study",
  },
  {
    slug: "signal-dashboard",
    type: "Design Exploration",
    title: "Signal",
    summary:
      "A data visualization dashboard concept for startup founders — exploring how complex metrics can be surfaced with minimal cognitive load.",
    outcome: "Conceptual exploration — available for discussion.",
    tags: ["Figma", "Recharts", "Design Systems"],
    accent: "#f59e0b",
    bgGradient: "from-[#161005] to-[#0a0a0a]",
    label: "Concept",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(216,27,96,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">Selected Work</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-headline text-white max-w-2xl mb-6">
              Projects built for real outcomes.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#666666] max-w-lg leading-relaxed">
              A curated selection of our work. Every project here has a story — context, problem, approach, and what shipped.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="divider mx-6 lg:mx-8" />

      {/* Projects grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className={`group flex flex-col bg-gradient-to-b ${project.bgGradient} border border-[#161616] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]`}
              >
                {/* Visual area */}
                <div className="h-52 relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 50% 40%, ${project.accent}18 0%, transparent 65%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}80 1px, transparent 1px), linear-gradient(90deg, ${project.accent}80 1px, transparent 1px)`,
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div
                    className="relative z-10 text-8xl font-black tracking-tighter select-none"
                    style={{ color: `${project.accent}18` }}
                  >
                    {project.title.charAt(0)}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                      style={{
                        background: `${project.accent}18`,
                        color: project.accent,
                        border: `1px solid ${project.accent}28`,
                      }}
                    >
                      {project.type}
                    </span>
                    {project.label === "Concept" && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#ffffff08] text-[#555555] border border-[#222222]">
                        Conceptual
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-sm text-[#666666] leading-relaxed">{project.summary}</p>

                  {/* Outcome */}
                  <div
                    className="flex items-start gap-2 text-xs text-[#888888] bg-[#111111] border border-[#1a1a1a] rounded-sm px-3 py-2.5 mt-1"
                  >
                    <span className="text-[#D81B60] mt-0.5">→</span>
                    <span>{project.outcome}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-widest text-[#444444] bg-[#111111] border border-[#1e1e1e] px-2 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#444444] group-hover:text-[#D81B60] transition-colors duration-200">
                    Read Case Study
                    <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
        subtext="Bring a clear problem or a rough idea. We'll figure out the right scope and approach together."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />
    </>
  );
}
