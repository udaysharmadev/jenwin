import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Work — Jenwin",
  description:
    "Selected projects from Jenwin — websites, web apps, and MVPs built with engineering precision and design discipline.",
};

export default async function WorkPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("case_studies")
    .select("slug, type, title, tagline, outcome, stack, accent, bg_gradient, label")
    .eq("published", true)
    .order("created_at", { ascending: false });

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
          {projects?.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl bg-[#080808] border border-[#1a1a1a] transition-all duration-500 hover:border-[#333]"
              >
                {/* Content */}
                <div className="flex flex-col gap-3 p-7 flex-1">
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-sm text-[#666666] leading-relaxed">{project.tagline}</p>

                  {/* Outcome */}
                  <div
                    className="flex items-start gap-2 text-xs text-[#888888] bg-[#111111] border border-[#1a1a1a] rounded-sm px-3 py-2.5 mt-1"
                  >
                    <span className="text-[#D81B60] mt-0.5">→</span>
                    <span>{project.outcome || "See case study for details"}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.stack?.map((tag: string) => (
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
