import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = await createClient();
  const { data: study } = await supabase
    .from("case_studies")
    .select("title, tagline")
    .eq("slug", params.slug)
    .single();

  if (!study) {
    return { title: "Work Not Found | Jenwin" };
  }

  return {
    title: `${study.title} | Jenwin Case Study`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: study } = await supabase
    .from("case_studies")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!study || !study.published) {
    notFound();
  }

  return (
    <>
      {/* Back link */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[#555555] hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          All Work
        </Link>
      </div>

      {/* Hero */}
      <section className={`relative pt-8 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b ${study.bg_gradient || 'from-[#080808]'} to-[#080808]`}>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${study.accent}12 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                style={{
                  background: `${study.accent}18`,
                  color: study.accent,
                  border: `1px solid ${study.accent}28`,
                }}
              >
                {study.type}
              </span>
              {study.label && (
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#ffffff08] text-[#555555] border border-[#222222]">
                  {study.label}
                </span>
              )}
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-display text-white mb-4">{study.title}</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-[#888888] max-w-xl">{study.tagline}</p>
          </FadeIn>

          {/* Metrics */}
          {study.metrics && study.metrics.length > 0 && (
            <FadeIn delay={0.15}>
              <div className="mt-12 inline-grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#222] rounded-xl overflow-hidden border border-[#222] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {study.metrics.map((m: any) => (
                  <div key={m.label} className="bg-[#0a0a0a] px-8 py-6 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 text-3xl font-display font-bold text-white mb-1">{m.value}</div>
                    <div className="relative z-10 text-xs font-medium text-[#777] uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Hero Image / Mockup Slot */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <FadeIn delay={0.2}>
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#0d0d0d] rounded-2xl border border-[#1a1a1a] shadow-2xl flex items-center justify-center overflow-hidden relative">
            {study.hero_image ? (
              <Image 
                src={study.hero_image} 
                alt={`${study.title} showcase`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="text-center p-6">
                <p className="text-[#333] font-mono text-sm uppercase tracking-widest mb-2">Image Placeholder</p>
                <p className="text-[#555] text-xs max-w-xs mx-auto">Upload an image and set the hero_image URL.</p>
              </div>
            )}
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5 pointer-events-none" />
          </div>
        </FadeIn>
      </section>

      {/* Case study body */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {[
          { label: "Context", content: study.context },
          { label: "The Problem", content: study.problem },
          { label: "Approach", content: study.approach },
          { label: "Execution", content: study.execution },
          { label: "Outcome", content: study.outcome },
        ].filter(section => section.content).map((section, i) => (
          <FadeIn key={section.label} delay={i * 0.06}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: study.accent }}
                >
                  {section.label}
                </span>
                <span className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
              <p className="text-[#888888] leading-relaxed text-[15px]">{section.content}</p>
            </div>
          </FadeIn>
        ))}

        {/* Testimonial Block */}
        {study.testimonial && study.testimonial.quote && (
          <FadeIn delay={0.3}>
            <div className="my-16 bg-gradient-to-br from-[#0d0d0d] to-[#050505] border border-[#1a1a1a] rounded-2xl p-8 md:p-10 relative overflow-hidden group">
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${study.accent} 0%, transparent 70%)` }}
              />
              <Quote size={40} className="text-[#222] mb-6" />
              <p className="text-xl md:text-2xl text-white font-display leading-tight mb-8">
                "{study.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                {study.testimonial.avatar ? (
                  <Image 
                    src={study.testimonial.avatar} 
                    alt={study.testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full border border-[#333]"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-[#222] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#555]">{study.testimonial.author?.charAt(0) || "U"}</span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-white">{study.testimonial.author}</p>
                  <p className="text-xs text-[#777]">{study.testimonial.role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Stack + Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {study.stack && study.stack.length > 0 && (
            <FadeIn delay={0.35}>
              <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#555] mb-6">Stack Used</p>
                <div className="flex flex-wrap gap-2.5">
                  {study.stack.map((s: string) => (
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
          )}
          {study.role && study.role.length > 0 && (
            <FadeIn delay={0.4}>
              <div className="h-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#333] transition-colors">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#555] mb-6">Jenwin&apos;s Role</p>
                <ul className="space-y-3.5">
                  {study.role.map((r: string) => (
                    <li key={r} className="flex items-start gap-3 text-[13px] text-[#888]">
                      <CheckCircle2 size={14} style={{ color: study.accent }} className="shrink-0 mt-0.5" />
                      <span className="leading-tight">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
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
