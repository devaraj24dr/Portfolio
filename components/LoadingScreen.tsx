"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress counter 0 → 100
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.round(obj.val)),
      onComplete: () => {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 900);
        }, 300);
      },
    });
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Cyber grid bg */}
          <div className="absolute inset-0 cyber-grid opacity-40" />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,59,48,0.08)_0%,transparent_70%)]" />

          {/* Corner decorators */}
          {[
            "top-6 left-6 border-t border-l",
            "top-6 right-6 border-t border-r",
            "bottom-6 left-6 border-b border-l",
            "bottom-6 right-6 border-b border-r",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-10 h-10 border-[#ff3b30] opacity-50 ${cls}`}
            />
          ))}

          {/* Logo / name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="font-orbitron font-black text-5xl md:text-7xl text-white tracking-tighter mb-3">
              DEV<span className="text-[#ff3b30]">.</span>
            </div>
            <div className="font-orbitron text-[0.6rem] tracking-[0.5em] text-[#ff3b30] uppercase">
              Initializing Systems
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 md:w-96 space-y-3">
            <div className="relative h-[1px] bg-[rgba(255,59,48,0.15)] overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#ff3b30]"
                style={{ width: `${progress}%` }}
              />
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,59,48,0.5)] to-transparent animate-[shimmer_1.5s_infinite] -translate-x-full" />
            </div>

            <div className="flex items-center justify-between">
              <span className="font-orbitron text-[0.55rem] tracking-[0.3em] text-[rgba(255,255,255,0.3)] uppercase">
                Loading
              </span>
              <span className="font-orbitron font-black text-2xl text-[#ff3b30] tabular-nums">
                {String(progress).padStart(3, "0")}
                <span className="text-sm">%</span>
              </span>
            </div>
          </div>

          {/* Status lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center space-y-1"
          >
            {[
              "AI_SYSTEMS......ONLINE",
              "NEURAL_NETWORKS.READY",
              "PORTFOLIO.......LOADING",
            ].map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: progress > i * 33 ? 1 : 0.2, x: 0 }}
                transition={{ delay: i * 0.3 + 0.5 }}
                className="font-orbitron text-[0.55rem] tracking-[0.2em] text-[rgba(255,255,255,0.25)]"
              >
                <span className="text-[#ff3b30] mr-2">›</span>
                {line}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
