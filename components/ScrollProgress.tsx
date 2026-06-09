"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [pct, setPct] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setPct(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#ff3b30] origin-left z-[9990]"
        style={{ scaleX }}
      />
      {/* Percentage badge — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: pct > 2 ? 1 : 0 }}
        className="fixed bottom-6 right-6 z-[9990] font-orbitron text-[0.55rem] tracking-[0.25em] text-[#ff3b30] flex items-center gap-1.5 pointer-events-none"
      >
        <span className="w-1 h-1 rounded-full bg-[#ff3b30] animate-pulse" />
        {String(pct).padStart(3, "0")}%
      </motion.div>
    </>
  );
}
