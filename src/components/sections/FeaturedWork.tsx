import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    slug: "fintrack-dashboard",
    type: "SaaS Web App",
    title: "FinTrack",
    outcome: "Financial dashboard for indie operators — built in 6 weeks.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    accent: "#D81B60",
    bgGradient: "from-[#1a0810] to-[#0d0d0d]",
  },
  {
    slug: "launchpad-mvp",
    type: "MVP Build",
    title: "Launchpad",
    outcome: "Zero-to-launch for a B2B SaaS founder — 40 paying users at launch.",
    tags: ["React", "Supabase", "Stripe"],
    accent: "#8b5cf6",
    bgGradient: "from-[#100d1a] to-[#0d0d0d]",
  },
  {
    slug: "atlas-brand-site",
    type: "Brand Website",
    title: "Atlas",
    outcome: "Premium brand website that doubled qualified inquiry volume.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    accent: "#0ea5e9",
    bgGradient: "from-[#070f17] to-[#0d0d0d]",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <p className="flex items-center gap-3 mb-4">
                <span className="inline-block w-6 h-px bg-[#D81B60]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">
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
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#888888] hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              View All Work
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className={`group flex flex-col h-full bg-gradient-to-b ${project.bgGradient} border border-[#161616] rounded-sm overflow-hidden hover:border-[#2a2a2a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]`}
              >
                {/* Visual placeholder */}
                <div className="h-48 relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accent} 0%, transparent 70%)`,
                    }}
                  />
                  {/* Abstract grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative z-10 text-6xl font-bold tracking-tighter"
                    style={{ color: `${project.accent}30` }}>
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                      style={{
                        background: `${project.accent}20`,
                        color: project.accent,
                        border: `1px solid ${project.accent}30`,
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{project.outcome}</p>
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
                    View Case Study
                    <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
