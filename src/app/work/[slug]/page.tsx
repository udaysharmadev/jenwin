import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const caseStudies: Record<string, {
  type: string;
  title: string;
  tagline: string;
  accent: string;
  bgGradient: string;
  context: string;
  problem: string;
  approach: string;
  execution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  role: string[];
  label?: string;
}> = {
  "fintrack-dashboard": {
    type: "SaaS Web App",
    title: "FinTrack",
    tagline: "Financial clarity for indie operators.",
    accent: "#D81B60",
    bgGradient: "from-[#180910]",
    context:
      "FinTrack was conceived by a solo operator who had tried every personal finance tool on the market — and found them either too consumer-focused or too complex. They needed something precise, fast, and built for a business context.",
    problem:
      "Existing tools buried the numbers that mattered under dashboards built for the average consumer. The founder needed a tool that surfaced the right data instantly and got out of the way.",
    approach:
      "We started with a two-day discovery session to map the exact data model and user flows. The core insight: the product needed to optimize for time-to-insight, not feature density. We built around a single-screen principle — everything visible without scrolling.",
    execution:
      "Built on Next.js 14 with a PostgreSQL backend. The dashboard was engineered for sub-200ms data loads using server-side rendering and aggressive caching. A custom charting layer was built on top of Recharts to match the brand aesthetic precisely.",
    outcome:
      "Shipped in 6 weeks. 200+ operators signed up in the first month. The client landed a seed round with the product as a live proof of concept.",
    metrics: [
      { value: "6 wks", label: "Delivery Timeline" },
      { value: "200+", label: "Users in Month 1" },
      { value: "<200ms", label: "Dashboard Load" },
    ],
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Recharts", "Vercel"],
    role: ["Product scoping", "UI/UX design", "Full-stack development", "Deployment and analytics setup"],
  },
  "launchpad-mvp": {
    type: "MVP Build",
    title: "Launchpad",
    tagline: "A client management tool built to validate fast.",
    accent: "#7c3aed",
    bgGradient: "from-[#0f0a1a]",
    context:
      "The founders of Launchpad had spent six months in spreadsheet hell managing B2B client onboarding. They needed a purpose-built tool — and they needed it live before their next sales cycle.",
    problem:
      "No existing CRM handled their specific onboarding workflow well. But building something custom felt risky without validated demand. They needed an MVP that was real enough to charge for, not a prototype.",
    approach:
      "We co-defined a tight feature set with the founders: onboarding checklists, client portals, and Stripe-gated access. Everything else was cut. We optimized for the three flows their users would hit in the first week.",
    execution:
      "Supabase handled auth, database, and real-time. Stripe Checkout and Customer Portal managed billing. The frontend was React with a custom design system — minimal but polished enough to feel premium at the price point they were charging.",
    outcome:
      "Live in 7 weeks. 40 paying customers at launch. Within three months, the traction led to a seed conversation with a tier-1 fund.",
    metrics: [
      { value: "7 wks", label: "Zero to Launch" },
      { value: "40", label: "Paying Users at Launch" },
      { value: "3 mo", label: "To Seed Conversation" },
    ],
    stack: ["React", "Supabase", "Stripe", "TypeScript", "Vercel", "Resend"],
    role: ["MVP scoping and prioritization", "Product design", "Full-stack development", "Billing integration", "Launch support"],
  },
  "atlas-brand-site": {
    type: "Brand Website",
    title: "Atlas",
    tagline: "A premium presence for a boutique consultancy.",
    accent: "#0ea5e9",
    bgGradient: "from-[#050f17]",
    context:
      "Atlas is a boutique strategy consultancy with a strong reputation in their niche. Their website didn't match their gravitas — it looked like a WordPress theme from 2018. They were losing deals at the digital-impression stage.",
    problem:
      "The website communicated the wrong things: generic, template-like, and inconsistent in voice. It undercut the trust they'd built in person. They needed a site that felt as serious as their work.",
    approach:
      "We ran a positioning session before touching a single pixel. The core question: what does a first-time visitor need to believe within 10 seconds? The answer shaped the IA, the copy brief, and the visual language.",
    execution:
      "Built on Next.js with Sanity CMS for content. Framer Motion handled the animation layer — restrained and intentional. The typographic system was designed to feel editorial and precise. Every section earned its place.",
    outcome:
      "Within the first quarter post-launch, qualified inquiry volume doubled. Three of those leads became six-figure engagements.",
    metrics: [
      { value: "2×", label: "Qualified Leads (Q1)" },
      { value: "3", label: "Six-Figure Deals from Web" },
      { value: "98", label: "Lighthouse Performance Score" },
    ],
    stack: ["Next.js 14", "Sanity CMS", "TypeScript", "Framer Motion", "Vercel"],
    role: ["Brand positioning consultation", "Content architecture", "UI/UX design", "Development", "CMS setup"],
  },
  "signal-dashboard": {
    type: "Design Exploration",
    title: "Signal",
    tagline: "What if founder metrics were actually readable?",
    accent: "#f59e0b",
    bgGradient: "from-[#161005]",
    label: "Conceptual",
    context:
      "Signal is an internal concept project — a thought experiment on how startup founders consume data. Most dashboards surface too much, in the wrong hierarchy, at the wrong time.",
    problem:
      "Founders don't lack data. They lack a clear answer to 'are we on track or not?' The problem is curation and hierarchy, not instrumentation.",
    approach:
      "We explored a single-question dashboard: is MRR trending up or not? Everything else is one level down. We designed around the 10-second glance — the check you do before a board call.",
    execution:
      "Figma prototype with a React proof-of-concept. Custom charting built on Recharts. The design system used a strict monochromatic palette with a single signal color for critical alerts.",
    outcome:
      "This remains a conceptual exploration. We're open to discussing it as a starting point for founders building internal tooling or investor-facing dashboards.",
    metrics: [
      { value: "1 view", label: "Core Design Principle" },
      { value: "3 days", label: "Prototype Timeline" },
      { value: "∞", label: "Conversations Started" },
    ],
    stack: ["Figma", "React", "Recharts", "TypeScript"],
    role: ["Product thinking", "UI design", "Frontend prototype"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: `${study.title} — Work — Jenwin`,
    description: study.tagline,
  } satisfies Metadata;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

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
      <section className={`relative pt-8 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b ${study.bgGradient} to-[#080808]`}>
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
          <FadeIn delay={0.15}>
            <div className="mt-12 inline-grid grid-cols-3 gap-px bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#1a1a1a]">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-[#0d0d0d] px-6 py-4">
                  <div className="text-2xl font-bold text-white">{m.value}</div>
                  <div className="text-xs text-[#555555] mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case study body */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {[
          { label: "Context", content: study.context },
          { label: "The Problem", content: study.problem },
          { label: "Approach", content: study.approach },
          { label: "Execution", content: study.execution },
          { label: "Outcome", content: study.outcome },
        ].map((section, i) => (
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

        {/* Stack + Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <FadeIn>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-sm p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#444444] mb-4">Stack Used</p>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-semibold uppercase tracking-widest text-[#666666] bg-[#111111] border border-[#1e1e1e] px-2.5 py-1.5 rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-sm p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#444444] mb-4">Jenwin&apos;s Role</p>
              <ul className="space-y-2">
                {study.role.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-xs text-[#666666]">
                    <CheckCircle2 size={12} style={{ color: study.accent }} className="shrink-0" />
                    {r}
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
