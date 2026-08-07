"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Code2 } from "lucide-react";
import Link from "next/link";

// Static config — update manually when working on a project
const CURRENTLY_BUILDING = {
  active: false,
  title: "Working on something cool",
  link: "/work",
};

export default function CurrentlyBuildingWidget() {
  const [isVisible, setIsVisible] = useState(CURRENTLY_BUILDING.active);

  if (!isVisible || !CURRENTLY_BUILDING.active) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 1 }}
        className="fixed bottom-6 left-6 z-[200] max-w-[280px]"
      >
        <div className="bg-[#0a0a0a] border border-[#1e1e1e] rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Red glow accent */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#DC143C]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
          >
            <X size={10} className="text-[#666]" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DC143C]/15 border border-[#DC143C]/30 flex items-center justify-center shrink-0">
              <Code2 size={14} className="text-[#DC143C]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DC143C] animate-pulse" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#DC143C]">
                  Currently Building
                </span>
              </div>
              <Link
                href={CURRENTLY_BUILDING.link}
                className="text-sm font-bold text-white hover:text-[#DC143C] transition-colors leading-tight block"
              >
                {CURRENTLY_BUILDING.title}
              </Link>
              <p className="text-[10px] text-[#555] mt-1">Click to see more work</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
