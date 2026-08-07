import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import {
  Globe,
  Smartphone,
  BarChart2,
  Palette,
  LayoutDashboard,
  PenTool,
  Users,
  Code2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Jenwin",
  description:
    "Website development, app development, social media marketing, graphic design, SaaS applications, UI/UX design, CRM tools, and custom software. Built by people who give a damn.",
};

const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Your brand online, done right.",
    description:
      "Whether you need a simple landing page or a full marketing site, we build websites that look sharp, load fast, and actually bring in results. No templates. No shortcuts.",
    forWho: [
      "Startups building their first online presence",
      "D2C brands going digital",
      "Businesses that outgrew their old site",
    ],
    deliverables: [
      "Responsive, cross-browser build",
      "SEO-ready structure",
      "Fast loading assets",
      "CMS integration if needed",
      "Analytics setup",
    ],
    accent: "#DC143C",
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "App Development",
    tagline: "Mobile and web apps people actually use.",
    description:
      "From native mobile apps to cross-platform builds, we design and develop apps that work smoothly, feel good to use, and hold up as you grow. Android, iOS, or both.",
    forWho: [
      "Founders with an app idea ready to build",
      "Businesses taking their service mobile",
      "Teams needing a cross-platform solution",
    ],
    deliverables: [
      "Android and iOS development",
      "Cross-platform (React Native / Flutter)",
      "API and backend integration",
      "App Store and Play Store submission",
      "Post-launch support",
    ],
    accent: "#3b82f6",
  },
  {
    id: "social-media-marketing",
    icon: BarChart2,
    title: "Social Media Marketing",
    tagline: "Grow your brand where your audience already is.",
    description:
      "We handle your social media the right way. Good content, consistent posting, real engagement, and campaigns that build your brand over time. No fake followers, no empty metrics.",
    forWho: [
      "Brands that want to grow on Instagram, LinkedIn, or X",
      "D2C businesses looking for organic reach",
      "Founders who don't have time to manage socials",
    ],
    deliverables: [
      "Content strategy and calendar",
      "Post creation and scheduling",
      "Community engagement",
      "Paid ad campaigns",
      "Monthly performance reports",
    ],
    accent: "#f59e0b",
  },
  {
    id: "graphic-designing",
    icon: Palette,
    title: "Graphic Designing",
    tagline: "Design that makes people stop scrolling.",
    description:
      "Logos, brand kits, social posts, pitch decks, banners, and more. We create visuals that look intentional and stay consistent across everything you put out.",
    forWho: [
      "Brands starting from scratch",
      "Companies refreshing their identity",
      "Teams that need ongoing design support",
    ],
    deliverables: [
      "Logo and brand identity",
      "Social media creatives",
      "Marketing collateral",
      "Pitch deck design",
      "Brand style guide",
    ],
    accent: "#ec4899",
  },
  {
    id: "saas-applications",
    icon: LayoutDashboard,
    title: "SaaS Applications",
    tagline: "Software your customers pay for, every month.",
    description:
      "We build subscription-based SaaS products from the ground up. Clean architecture, user authentication, billing integration, and dashboards that make your users feel smart.",
    forWho: [
      "Founders building their first SaaS",
      "Businesses productizing their service",
      "Teams on v2 of an existing SaaS",
    ],
    deliverables: [
      "Full-stack SaaS build",
      "Auth and user management",
      "Subscription and billing (Stripe / Razorpay)",
      "Admin dashboard",
      "API and integrations",
    ],
    accent: "#7c3aed",
  },
  {
    id: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    tagline: "Design that makes things easy, not just pretty.",
    description:
      "Good UX is invisible. We design interfaces that guide users naturally, reduce friction, and make your product a pleasure to use. Figma prototypes to production-ready specs.",
    forWho: [
      "Product teams needing a design partner",
      "Founders with an idea but no design",
      "Apps that feel clunky and need a UX rework",
    ],
    deliverables: [
      "User flow mapping",
      "Wireframes and prototypes",
      "High-fidelity Figma designs",
      "Design system creation",
      "Handoff-ready specs for developers",
    ],
    accent: "#06b6d4",
  },
  {
    id: "crm-tools",
    icon: Users,
    title: "CRM Tools",
    tagline: "Stop losing leads. Start managing them properly.",
    description:
      "We build or integrate CRM systems that actually fit how your business works. Track leads, manage follow-ups, automate pipelines, and never let a hot prospect go cold again.",
    forWho: [
      "Sales teams with no system in place",
      "Businesses outgrowing spreadsheets",
      "Companies needing custom CRM workflows",
    ],
    deliverables: [
      "CRM setup and customization",
      "Lead tracking and pipeline management",
      "Automated follow-up workflows",
      "WhatsApp and email integration",
      "Reporting and dashboards",
    ],
    accent: "#10b981",
  },
  {
    id: "custom-softwares",
    icon: Code2,
    title: "Custom Softwares",
    tagline: "When off-the-shelf tools just don't cut it.",
    description:
      "If your business has a unique process that no existing software handles well, we build it from scratch. Inventory systems, booking platforms, automation tools, internal dashboards. Whatever you need.",
    forWho: [
      "Businesses with workflows no tool covers",
      "Ops teams wanting to automate manual work",
      "Companies replacing legacy software",
    ],
    deliverables: [
      "Requirements analysis",
      "Custom software architecture",
      "Full build and testing",
      "Staff training and documentation",
      "Ongoing maintenance and updates",
    ],
    accent: "#8b5cf6",
  },
];

const engagementTypes = [
  {
    title: "Project-Based",
    description:
      "Fixed scope, fixed timeline, clear deliverables. Good for websites, apps, and one-time builds.",
  },
  {
    title: "Retainer",
    description:
      "Ongoing development or design support. Good for product teams that need steady execution capacity.",
  },
  {
    title: "Consultation",
    description:
      "Tech review, architecture planning, or design audit. Good for founders who need a second opinion.",
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
            background: "radial-gradient(circle, rgba(220,20,60,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-[#DC143C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C]">
                Services
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-headline text-white max-w-3xl mb-6">
              What we build and how we build it.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#666666] max-w-xl leading-relaxed">
              Eight services. One standard. Work that ships on time, holds up under pressure, and makes your users feel something.
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                !isEven ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text side */}
              <FadeIn delay={0.05} direction={isEven ? "right" : "left"}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{
                        background: `${service.accent}15`,
                        border: `1px solid ${service.accent}30`,
                      }}
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
                  <p className="text-sm text-[#666666] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* For who */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#444] mb-3">
                      Good for
                    </p>
                    <ul className="space-y-2">
                      {service.forWho.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#666]">
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
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#444] mb-5">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-[#888]">
                        <CheckCircle2
                          size={14}
                          style={{ color: service.accent }}
                          className="shrink-0"
                        />
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
      <section className="bg-[#060606] border-y border-[#111] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-[#DC143C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC143C]">
                How We Work Together
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-headline text-white mb-12">Pick what works for you.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {engagementTypes.map((type, i) => (
              <FadeIn key={type.title} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] border border-[#161616] rounded-sm p-7 h-full hover:border-[#2a2a2a] transition-colors duration-200">
                  <h3 className="text-sm font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Start a conversation"
        heading="Know what you need? Let's scope it."
        subtext="Tell us what you're building and we'll tell you how we'd approach it. No pitch deck required."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />
    </>
  );
}
