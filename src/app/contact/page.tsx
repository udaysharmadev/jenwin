import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ContactForm";
import { Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Jenwin",
  description:
    "Start a project with Jenwin. Tell us what you're building and we'll respond within one business day (IST).",
};

const trustItems = [
  {
    icon: Clock,
    title: "We respond within 24 hrs.",
    description: "Every inquiry is read by the team and gets a reply the same day or next morning (IST).",
  },
  {
    icon: MessageSquare,
    title: "No sales pressure.",
    description: "The first call is just a conversation. We'll give you honest feedback on scope and fit.",
  },
  {
    icon: Mail,
    title: "Direct access.",
    description: "You'll communicate with the people actually doing the work — not an account manager.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 20% 0%, rgba(216,27,96,0.08) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-[#D81B60]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D81B60]">Contact</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-headline text-white max-w-2xl mb-4">
              Tell us what you&apos;re building.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-[#666666] max-w-lg leading-relaxed">
              We review every message and respond within one business day (IST). The brief doesn&apos;t have to be perfect — just honest.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main contact layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.05}>
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-sm p-7 lg:p-10">
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Trust items */}
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={0.1 + i * 0.08} direction="left">
                  <div className="flex gap-4 p-5 bg-[#0a0a0a] border border-[#161616] rounded-sm">
                    <div className="w-8 h-8 rounded-sm bg-[#D81B60]/10 border border-[#D81B60]/20 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-[#D81B60]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-xs text-[#555555] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}

            {/* Direct email */}
            <FadeIn delay={0.35} direction="left">
              <div className="p-5 bg-[#0a0a0a] border border-[#161616] rounded-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#444444] mb-3">
                  Prefer email?
                </p>
                <a
                  href="mailto:hello@jenw.in"
                  className="text-sm font-semibold text-white hover:text-[#D81B60] transition-colors duration-200"
                >
                  hello@jenw.in
                </a>
                <p className="text-xs text-[#444444] mt-1">Mon–Sat · IST timezone.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
