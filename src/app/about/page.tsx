import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About — Jenwin",
  description:
    "Jenwin is a development agency built on craft, clarity, and honest execution. Learn who we are, what we believe, and how we work.",
};

const values = [
  {
    title: "Craft over volume.",
    description:
      "We take fewer projects so we can do them properly. A website built with care outperforms ten built carelessly — for everyone involved.",
  },
  {
    title: "Clarity before delivery.",
    description:
      "Ambiguity is the enemy of good work. We invest in understanding before we execute, and we communicate clearly throughout.",
  },
  {
    title: "Taste as a discipline.",
    description:
      "Good design isn't decoration. It's a function of judgment, restraint, and understanding what the work is actually trying to do.",
  },
  {
    title: "Accountability without noise.",
    description:
      "We deliver what we say we will, when we say we will. If something changes, we say so early and offer a path forward.",
  },
];

const philosophy = [
  {
    area: "Engineering",
    belief:
      "Code should be readable, maintainable, and predictable. We write for the next developer as much as for the current feature. The best architecture is the one that doesn't surprise you six months later.",
  },
  {
    area: "Design",
    belief:
      "Restraint is the hardest design skill. We resist the urge to fill space, add motion, or add elements that aren't earning their place. Good design is quiet confidence.",
  },
  {
    area: "Product",
    belief:
      "We think in outcomes, not deliverables. What does this feature actually change for a real user? If we can't answer that, we push back before we build it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 80% 20%, rgba(216,27,96,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">About</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-headline text-white max-w-3xl mb-6">
              We care about what we build. That's not as common as it should be.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#666666] max-w-xl leading-relaxed">
              Jenwin exists because too many digital products are built quickly, forgotten quickly, and replaced quickly. We're here to change that ratio — for the clients who care enough to do it right.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-8" />

      {/* Origin story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60] mb-5">Our Story</p>
              <h2 className="text-title text-white mb-6">
                Built by people who got tired of seeing good ideas shipped badly.
              </h2>
              <div className="space-y-4 text-sm text-[#666666] leading-relaxed">
                <p>
                  Jenwin was founded in India with a specific frustration in mind: founders with real ideas, real budgets, and real urgency — consistently receiving work that looked generic, shipped late, or broke under pressure.
                </p>
                <p>
                  We built an agency that solves for that. Not by being the cheapest, or the biggest, or the fastest. By being the most deliberate. By treating every project as if it&apos;s a product we&apos;re proud to put our name on.
                </p>
                <p>
                  Today, Jenwin works with Indian startups, D2C founders, SaaS builders, and growth-stage businesses who want a development partner that thinks before it builds, communicates clearly, and ships work that holds up.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#444444] mb-5">What we stand for</p>
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="border-l-2 border-[#1a1a1a] hover:border-[#D81B60] pl-5 py-1 transition-colors duration-300 group"
                >
                  <p className="text-sm font-semibold text-white mb-1 group-hover:text-white">{v.title}</p>
                  <p className="text-sm text-[#555555] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#060606] border-y border-[#111111] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">Philosophy</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white mb-14">How we think about our work.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#141414] border border-[#141414] rounded-sm overflow-hidden">
            {philosophy.map((p, i) => (
              <FadeIn key={p.area} delay={i * 0.08}>
                <div className="bg-[#0a0a0a] p-8 flex flex-col gap-4 h-full hover:bg-[#0d0d0d] transition-colors duration-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D81B60]">{p.area}</span>
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed">{p.belief}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Agency snapshot */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#141414] border border-[#141414] rounded-sm overflow-hidden">
          {[
            { value: "2021", label: "Founded in India" },
            { value: "50+", label: "Projects Delivered" },
            { value: "15+", label: "Sectors Served" },
            { value: "100%", label: "Remote-Native" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06}>
              <div className="bg-[#0a0a0a] px-7 py-8 flex flex-col gap-1 hover:bg-[#0d0d0d] transition-colors duration-200">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-[#555555]">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Work together"
        heading="We'd rather show you than tell you."
        subtext="The easiest way to understand how we work is to start a conversation. No pitch deck, no retainer pressure."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />
    </>
  );
}
