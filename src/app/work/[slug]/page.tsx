import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Work Not Found | Jenwin" };
  }

  return {
    title: `${project.title} | Jenwin`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { label: "Context", content: project.context },
    { label: "The Problem", content: project.problem },
    { label: "Approach", content: project.approach },
    { label: "Outcome", content: project.outcome },
  ].filter((s) => s.content);

  return (
    <>
      {/* Back link */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          All Work
        </Link>
      </div>

      {/* Hero */}
      <section
        className={`relative pt-8 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b ${project.bgGradient} to-[#080808]`}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${project.accent}12 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
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
              {project.label && (
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#ffffff08] text-[#555] border border-[#222]">
                  {project.label}
                </span>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-display text-white mb-4">{project.title}</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2 mb-6">
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-mono transition-colors duration-200"
                style={{ color: project.accent }}
              >
                {project.url}
                <ExternalLink size={12} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-lg text-[#888] max-w-xl">{project.tagline}</p>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image / Screenshot */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <FadeIn delay={0.2}>
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#0d0d0d] rounded-2xl border border-[#1a1a1a] shadow-2xl flex items-center justify-center overflow-hidden relative">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${project.accent}08 0%, transparent 70%)`,
                }}
              >
                <span className="text-5xl font-black font-display text-[#1a1a1a]">
                  {project.logoText || project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5 pointer-events-none" />
          </div>
        </FadeIn>
      </section>

      {/* Project body */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Description */}
        <FadeIn>
          <p className="text-base text-[#888] leading-relaxed mb-12">
            {project.description}
          </p>
        </FadeIn>

        {/* Context / Problem / Approach / Outcome */}
        {sections.map((section, i) => (
          <FadeIn key={section.label} delay={i * 0.06}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: project.accent }}
                >
                  {section.label}
                </span>
                <span className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
              <p className="text-[#888] leading-relaxed text-[15px]">{section.content}</p>
            </div>
          </FadeIn>
        ))}

        {/* Stack + Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <FadeIn delay={0.35}>
            <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#555] mb-6">
                Stack Used
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-semibold text-[#888] bg-[#111] border border-[#1e1e1e] px-3 py-1.5 rounded-md hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#555] mb-6">
                Key Features
              </p>
              <ul className="space-y-3.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px] text-[#888]">
                    <CheckCircle2
                      size={14}
                      style={{ color: project.accent }}
                      className="shrink-0 mt-0.5"
                    />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        eyebrow="Work with us"
        heading="Ready to build something like this?"
        subtext="Every project starts with a clear brief and an honest scope conversation."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View All Work", href: "/work" }}
      />
    </>
  );
}
