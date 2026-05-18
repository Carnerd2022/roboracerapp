"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Carbon fiber panel on the right side */}
      <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block">
        <div
          className="absolute inset-0 carbon-fiber"
          style={{ filter: "brightness(0.7)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(147, 51, 234, 0.18)",
            mixBlendMode: "color",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60" />
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent" />
      </div>

      {/* Engineering grid background overlay on the left */}
      <div className="absolute inset-0 grid-bg opacity-50 lg:[clip-path:inset(0_50%_0_0)]" />

      {/* Purple ambient glow in the bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="max-w-3xl">
          {/* Top label with pulsing dot */}
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

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            <span className="block text-white">ROBO</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 glow-purple">
              RACERS
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-purple-100/80 italic mb-10 max-w-xl"
          >
            &ldquo;{siteConfig.tagline}&rdquo;
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-purple-500/50 hover:border-purple-400 hover:bg-purple-900/30 text-purple-100 font-medium rounded-md transition-all"
            >
              Sponsor the Team
            </Link>
          </motion.div>

          {/* Race-style telemetry strip at the bottom */}
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

      {/* Scroll indicator at the bottom */}
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