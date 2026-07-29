"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  useEffect(() => {
    setIsClient(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isClient) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        backgroundColor: "white", // mix-blend-difference will make this opposite of background
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="w-1 h-1 rounded-full bg-[#DC143C]"
        animate={{
          opacity: isHovering ? 0 : 1
        }}
      />
    </motion.div>
  );
}
