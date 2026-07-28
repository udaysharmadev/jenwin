import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { Globe, LayoutDashboard, Rocket, Code2, Cpu, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Jenwin",
  description:
    "Website development, web apps, MVP builds, UI engineering, and AI workflow integrations. Built with product thinking, executed with precision.",
};

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Development",
    tagline: "Your brand, engineered to perform.",
    description:
      "For founders and businesses who need a digital presence that reflects their ambition — not a template. We build brand websites, marketing sites, and premium landing pages that convert visitors into leads.",
    forWho: ["Early-stage startups establishing credibility", "D2C brands launching online", "Businesses replacing outdated sites"],
    deliverables: [
      "Responsive, cross-browser build",
      "SEO-optimized structure",
      "Performance-tuned assets",
      "CMS integration (if needed)",
      "Analytics setup",
    ],
    accent: "#D81B60",
  },
  {
    id: "webapps",
    icon: LayoutDashboard,
    title: "Web App Development",
    tagline: "Products people actually want to use.",
    description:
      "Dashboards, portals, internal tools, and SaaS products. We design and build web apps with clean architecture, intuitive UX, and a codebase that scales without drama.",
    forWho: ["SaaS founders building v1 or v2", "Operators needing internal tooling", "Product teams that need a reliable execution partner"],
    deliverables: [
      "Full-stack development",
      "Authentication and user management",
      "Database design and integration",
      "Admin panel setup",
      "API development and integration",
    ],
    accent: "#7c3aed",
  },
  {
    id: "mvp",
    icon: Rocket,
    title: "MVP Development",
    tagline: "Zero to launch. Structured for speed.",
    description:
      "For founders who need to validate fast without cutting corners that create debt. Our MVP builds are scoped carefully, built cleanly, and launched with enough quality to earn your first real users.",
    forWho: ["Founders with a validated idea ready to build", "Operators testing a new product line", "Teams who want to ship before raising"],
    deliverables: [
      "Scoped feature set definition",
      "Design and development in one engagement",
      "Core user flows built and tested",
      "Deployment on modern hosting",
      "Handoff documentation",
    ],
    accent: "#0ea5e9",
  },
  {
    id: "ui",
    icon: Code2,
    title: "UI Engineering",
    tagline: "Design translated faithfully into code.",
    description:
      "You have a design. You need it built — precisely, responsively, and with the micro-interactions that make it feel alive. We translate Figma into production-ready React with pixel discipline.",
    forWho: ["Product teams with design ready for development", "Agencies needing a front-end execution partner", "Founders who already have design assets"],
    deliverables: [
      "Component library build",
      "Responsive implementation",
      "Animation and micro-interaction coding",
      "Cross-browser QA",
      "Design system documentation",
    ],
    accent: "#f59e0b",
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI-Enabled Workflows",
    tagline: "Practical AI. Not performative.",
    description:
      "We integrate AI features where they create genuine product value — not where they make a press release look good. Search, summarization, generation, and intelligent automation built into your product.",
    forWho: ["SaaS products adding intelligent features", "Teams building AI-native tools", "Founders who want AI that actually works"],
    deliverables: [
      "LLM API integration (OpenAI, Anthropic, Gemini)",
      "RAG pipelines and vector search",
      "Prompt engineering and iteration",
      "AI feature UX design",
      "Evaluation and monitoring setup",
    ],
    accent: "#10b981",
  },
];

const engagementTypes = [
  {
    title: "Project-Based",
    description: "A clear scope, fixed timeline, and defined deliverables. Best for websites, MVPs, and feature builds.",
  },
  {
    title: "Retainer",
    description: "Ongoing development partnership. Best for product teams who need reliable execution capacity.",
  },
  {
    title: "Consultation",
    description: "Technical review, architecture planning, or design audit. Best for founders and CTOs who need expert input.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(216,27,96,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">Services</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-headline text-white max-w-3xl mb-6">
              What we build — and how we build it.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#666666] max-w-xl leading-relaxed">
              Five core disciplines, one consistent standard: work that ships on time, holds up under pressure, and makes its users feel something.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="divider mx-6 lg:mx-8" />

      {/* Services detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text side */}
              <FadeIn delay={0.05} direction={isEven ? "right" : "left"}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}30` }}
                    >
                      <Icon size={18} style={{ color: service.accent }} />
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: service.accent }}
                    >
                      {service.title}
                    </span>
                  </div>
                  <h2 className="text-title text-white mb-4">{service.tagline}</h2>
                  <p className="text-sm text-[#666666] leading-relaxed mb-8">{service.description}</p>

                  {/* For who */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#444444] mb-3">Best for</p>
                    <ul className="space-y-2">
                      {service.forWho.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#666666]">
                          <div
                            className="w-1 h-1 rounded-full mt-2 shrink-0"
                            style={{ background: service.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Deliverables side */}
              <FadeIn delay={0.1} direction={isEven ? "left" : "right"}>
                <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-sm p-7 lg:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#444444] mb-5">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-[#888888]">
                        <CheckCircle2 size={14} style={{ color: service.accent }} className="shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          );
        })}
      </section>

      {/* Engagement types */}
      <section className="bg-[#060606] border-y border-[#111111] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">Engagement Models</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white mb-12">How we engage.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {engagementTypes.map((type, i) => (
              <FadeIn key={type.title} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] border border-[#161616] rounded-sm p-7 h-full hover:border-[#2a2a2a] transition-colors duration-200">
                  <h3 className="text-sm font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Start a conversation"
        heading="Know what you need? Let's scope it."
        subtext="We keep the intake process simple. Tell us what you're building, and we'll tell you how we'd approach it."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />
    </>
  );
}
