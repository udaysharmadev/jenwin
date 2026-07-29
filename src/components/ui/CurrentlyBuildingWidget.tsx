"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Code2 } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function CurrentlyBuildingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState<{ active: boolean; title: string; link: string } | null>(null);

  useEffect(() => {
    async function loadConfig() {
      const supabase = createClient();
      const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("id", "currently_building")
        .single();
      
      if (data?.value) {
        setConfig(data.value);
        if (data.value.active) {
          setIsVisible(true);
        }
      }
    }
    loadConfig();
  }, []);

  if (!isVisible || !config || !config.active) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 1 }}
        className="fixed bottom-6 right-6 z-[100] hidden md:block"
      >
        <div className="relative group bg-[#0d0d0d]/80 backdrop-blur-md border border-[#1a1a1a] rounded-2xl p-4 shadow-2xl hover:border-[#333] transition-colors pr-12">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#DC143C]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-[#555] hover:text-white transition-colors p-1"
            aria-label="Close widget"
          >
            <X size={14} />
          </button>

          <Link href={config.link} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center shrink-0 relative">
              <Code2 size={18} className="text-[#DC143C]" />
              {/* Pulse dot */}
              <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border-2 border-[#111]"></span>
              </span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1">
                Currently Building
              </p>
              <p className="text-sm font-bold text-white group-hover:text-[#DC143C] transition-colors">
                {config.title}
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
