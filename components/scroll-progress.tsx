"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Minimal scroll-progress ring in the bottom-right corner. Fills as you scroll,
 * shows the percentage, and swaps to an up-arrow on hover so it doubles as a
 * back-to-top button. Fades in only once you've started scrolling.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const R = 21;
  const CIRC = 2 * Math.PI * R;
  const dashOffset = useTransform(progress, [0, 1], [CIRC, 0]);

  const [pct, setPct] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return progress.on("change", (v) => {
      setPct(Math.min(100, Math.round(v * 100)));
      setVisible(v > 0.015);
    });
  }, [progress]);

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 14,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full border border-purple-500/25 bg-black/50 backdrop-blur-md transition-colors hover:border-purple-400/70 md:flex"
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(168,85,247,0.14)" strokeWidth="2.5" />
        <motion.circle
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="#a855f7"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>

      <span className="relative font-mono text-[11px] tabular-nums text-purple-200/90 transition-opacity group-hover:opacity-0">
        {pct}
      </span>
      <ArrowUp
        size={16}
        className="absolute text-purple-100 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
}
