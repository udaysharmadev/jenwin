"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        
        {/* The cinematic crimson wipe that covers the screen when exiting */}
        <motion.div
          className="fixed inset-0 z-[150] bg-[#DC143C] pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
          style={{ originY: 1 }} // animate from bottom to top
        />
        
        {/* The actual page content animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {children}
        </motion.div>
        
      </motion.div>
    </AnimatePresence>
  );
}
