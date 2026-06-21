"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Ruler, Zap } from "lucide-react";

const robotSpecs = {
  name: "OUR ROBOT",
  season: "DECODE 2025-2026",
  dimensions: '18" × 18" × 18"',
  drivetrain: "Mecanum 4WD",
  language: "Java / FTC SDK",
};

export function RobotHighlight() {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Current Season // Robot
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-16"
        >
          Meet our race machine.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square rounded-lg overflow-hidden border border-purple-900/50 bg-gradient-to-br from-purple-950/30 to-black"
          >
            <div
              className="absolute inset-0 carbon-fiber"
              style={{ filter: "brightness(0.4)" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_70%)]" />

            {/* Robot render — replace placeholder when you add public/robot-render.png */}
            <Image
              src="/robot-render.png"
              alt="Our DECODE robot"
              fill
              className="object-contain p-12 relative z-10"
              priority
            />

            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-purple-400 z-20" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-purple-400 z-20" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-purple-400 z-20" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-purple-400 z-20" />

            <div className="absolute top-6 right-12 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/50">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-green-400 tracking-wider">
                LIVE
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-6">
              <p className="font-mono text-[11px] tracking-[0.3em] text-purple-400 mb-2">
                {robotSpecs.season}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {robotSpecs.name}
              </h3>
            </div>

            <p className="text-purple-100/70 leading-relaxed mb-8">
              Our DECODE season competition robot &mdash; engineered, built, and
              programmed from the ground up by team members. Every subsystem
              tuned for speed, reliability, and the challenges of this
              season&apos;s game.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <SpecCard
                icon={Ruler}
                label="DIMENSIONS"
                value={robotSpecs.dimensions}
              />
              <SpecCard
                icon={Zap}
                label="DRIVETRAIN"
                value={robotSpecs.drivetrain}
              />
              <SpecCard icon={Cpu} label="STACK" value={robotSpecs.language} />
            </div>

            <Link
              href="/robot"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-md transition-all hover:shadow-xl hover:shadow-purple-500/50"
            >
              Explore the build
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpecCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="p-4 rounded-md bg-purple-950/20 border border-purple-900/50 hover:border-purple-500/70 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={14} className="text-purple-400" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
          {label}
        </span>
      </div>
      <p className="font-display text-base text-white">{value}</p>
    </div>
  );
}