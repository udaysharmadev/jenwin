import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight, Folder } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Work — Jenwin",
  description:
    "Selected projects from Jenwin — websites, web apps, and MVPs built with engineering precision and design discipline.",
};

async function ProjectGrid() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("case_studies")
    .select("slug, type, title, tagline, outcome, stack, accent, bg_gradient, label")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#111] border border-[#1e1e1e] flex items-center justify-center">
          <Folder size={28} className="text-[#333]" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-white mb-2">Case studies coming soon</h2>
          <p className="text-sm text-[#555] max-w-sm leading-relaxed">
            We&apos;re documenting our work properly. In the meantime, start a conversation and we&apos;ll walk you through what we&apos;ve built.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC143C] text-white text-sm font-bold rounded-md hover:bg-[#FF0040] transition-all duration-200"
        >
          Start a Conversation
          <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <FadeIn key={project.slug} delay={index * 0.1}>
          <Link
            href={`/work/${project.slug}`}
            className="group block relative overflow-hidden rounded-2xl bg-[#080808] border border-[#1a1a1a] transition-all duration-500 hover:border-[#333] hover:bg-[#0c0c0c]"
          >
            <div className="flex flex-col gap-3 p-7 flex-1">
              <h2 className="text-xl font-bold text-white group-hover:text-[#DC143C] transition-colors">{project.title}</h2>
              <p className="text-sm text-[#666666] leading-relaxed group-hover:text-[#888]">{project.tagline}</p>

              <div className="flex items-start gap-2 text-xs text-[#888888] bg-[#111111] border border-[#1a1a1a] rounded-sm px-3 py-2.5 mt-1">
                <span className="text-[#DC143C] mt-0.5">→</span>
                <span>{project.outcome || "See case study for details"}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {project.stack?.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-widest text-[#444444] bg-[#111111] border border-[#1e1e1e] px-2 py-1 rounded-sm group-hover:border-[#333] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#444444] group-hover:text-[#DC143C] transition-colors duration-200">
                Read Case Study
                <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}

function ProjectGridSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="h-[280px] rounded-2xl bg-[#080808] border border-[#111] animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );
}

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
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C]">Selected Work</span>
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
        <Suspense fallback={<ProjectGridSkeleton />}>
          <ProjectGrid />
        </Suspense>
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
