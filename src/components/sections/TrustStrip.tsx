"use client";

const trustedBy = [
  { name: "FinTrack", type: "SaaS" },
  { name: "Launchpad", type: "MVP" },
  { name: "Atlas", type: "Website" },
  { name: "Nexus", type: "Web App" },
  { name: "Lumina", type: "UI Eng" },
  { name: "Vector Studio", type: "Brand" },
  { name: "Aura Health", type: "SaaS" },
  { name: "Orion AI", type: "AI" },
];

const techBadges = [
  "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL",
  "Tailwind", "Framer Motion", "Three.js", "Vercel", "Stripe",
];

export default function TrustStrip() {
  const clientItems = [...trustedBy, ...trustedBy, ...trustedBy];
  const techItems   = [...techBadges, ...techBadges, ...techBadges, ...techBadges];

  return (
    <section className="bg-[#030303] overflow-hidden relative border-y border-[#0f0f0f]">
      {/* Row 1: Clients — scrolls left via pure CSS */}
      <div className="py-5 border-b border-[#0f0f0f] relative">
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track marquee-track--left items-center gap-10">
          {clientItems.map((item, i) => (
            <div key={`${item.name}-${i}`} className="flex items-center gap-10 group shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#DC143C]/60 bg-[#DC143C]/10 px-1.5 py-0.5 rounded">
                  {item.type}
                </span>
                <span className="text-sm font-display font-semibold tracking-widest uppercase text-[#444] group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Tech stack — scrolls right via pure CSS */}
      <div className="py-4 relative">
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track marquee-track--right items-center gap-6">
          {techItems.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#333] hover:text-[#DC143C] transition-colors duration-300 px-3 py-1 border border-[#111] rounded-full hover:border-[#DC143C]/30 shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
