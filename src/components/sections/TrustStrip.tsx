"use client";

import { motion } from "framer-motion";

const trustedBy = [
  { name: "FinTrack", type: "SaaS" },
  { name: "Launchpad", type: "MVP" },
  { name: "Atlas Brand", type: "Website" },
  { name: "Nexus Tech", type: "Web App" },
  { name: "Lumina", type: "UI Eng" },
  { name: "Vector Studio", type: "Brand" },
  { name: "Aura Medical", type: "SaaS" },
  { name: "Vertex AI", type: "AI" },
];

const techBadges = [
  "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Framer Motion", "Three.js", "Vercel", "Stripe"
];

export default function TrustStrip() {
  const clientItems = [...trustedBy, ...trustedBy, ...trustedBy];
  const techItems = [...techBadges, ...techBadges, ...techBadges, ...techBadges];

  return (
    <section className="bg-[#030303] overflow-hidden relative border-y border-[#0f0f0f]">
      {/* Row 1: Trusted By — scrolls right */}
      <div className="py-5 border-b border-[#0f0f0f] relative">
        <div className="absolute top-0 left-0 bottom-0 w-28 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-28 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {clientItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex items-center gap-10 group">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#DC143C]/60 bg-[#DC143C]/10 px-1.5 py-0.5 rounded">
                  {item.type}
                </span>
                <span className="text-sm font-display font-semibold tracking-widest uppercase text-[#444] group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#2a2a2a] group-hover:bg-[#DC143C] transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Tech Stack — scrolls left (reverse) */}
      <div className="py-4 relative">
        <div className="absolute top-0 left-0 bottom-0 w-28 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-28 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-6 whitespace-nowrap"
          style={{ width: "max-content" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {techItems.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#333] hover:text-[#DC143C] transition-colors duration-300 px-3 py-1 border border-[#111] rounded-full hover:border-[#DC143C]/30"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
