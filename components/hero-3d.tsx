"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero3D() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Left scrim so the headline stays legible over the moving circuit */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#05030a] via-[#05030a]/60 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05030a]/90 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full pointer-events-none">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              FTC Team {siteConfig.teamNumber} &middot; Active Season
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            <span className="block text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              ROBO
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 glow-purple">
              RACERS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-purple-100/80 italic mb-10 max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            &ldquo;{siteConfig.tagline}&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
          >
            <Link
              href="/robot"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-md transition-all hover:shadow-xl hover:shadow-purple-500/50"
            >
              View the Robot
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/sponsors"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black/40 backdrop-blur-sm border border-purple-500/50 hover:border-purple-400 hover:bg-purple-900/40 text-purple-100 font-medium rounded-md transition-all"
            >
              Sponsor the Team
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-purple-900/40"
          >
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-purple-400" />
              <span className="font-mono text-xs text-purple-300/80 tracking-wider">
                STATUS: COMPETING
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-purple-300/80 tracking-wider">
                SEASON 2025-2026
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              <span className="font-mono text-xs text-purple-300/80 tracking-wider">
                {siteConfig.stats.yearsActive} YEARS ACTIVE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-purple-400/60">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
