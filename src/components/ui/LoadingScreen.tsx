"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("jenwin_loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }
    sessionStorage.setItem("jenwin_loaded", "true");
    // Reduced from 2000ms to 800ms for much faster perceived load
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#030303] flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-5xl font-bold tracking-tighter text-white font-display"
            >
              <span className="text-[#DC143C]">JEN</span>WIN.
            </motion.h1>

            {/* Loading bar */}
            <div className="w-40 h-[2px] bg-[#111] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8B0000] to-[#DC143C]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
