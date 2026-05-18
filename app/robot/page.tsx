"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Weight,
  Ruler,
  Zap,
  Target,
  RotateCcw,
  Layers,
  Boxes,
  Wind,
  ArrowRight,
} from "lucide-react";

// Robot specs — same source of truth as homepage
const robotSpecs = {
  name: "OUR ROBOT",
  season: "DECODE 2025-2026",
  weight: "TBD",
  dimensions: '18" × 18" × 18"',
  drivetrain: "Mecanum 4WD",
  language: "Java / FTC SDK",
};

const subsystems = [
  {
    icon: Target,
    name: "DEPOSIT",
    tagline: "Precision artifact placement",
    description:
      "Adjustable hood with helix gears. Range of 30°–60° to allow for flat shots that reduce artifact bounce-outs at the goal.",
    highlights: ["Adjustable hood", "30°–60° range", "Helix gear actuation"],
  },
  {
    icon: RotateCcw,
    name: "TURRET",
    tagline: "Full 360° tracking",
    description:
      "Ball-bearing integrated shooting system driven by a motor for 360° motion. Smooth turns and precise aim with fully 3D-printed custom gear teeth for accurate turning.",
    highlights: [
      "Ball-bearing integrated",
      "360° motion",
      "Custom 3D-printed gears",
    ],
  },
  {
    icon: Wind,
    name: "INTAKE",
    tagline: "High-volume collection",
    description:
      "Intake sized to take numerous artifacts at once. A ramp pulls collected artifacts up onto the transfer plate with ease.",
    highlights: ["High capacity", "Ramp-fed transfer plate", "Wide pickup zone"],
  },
  {
    icon: Layers,
    name: "TRANSFER",
    tagline: "Sub-second cycle time",
    description:
      "Greater than 0.7 second cycle time to shoot all 3 balls from transfer. Custom 'Flickers' integrated with color sensors flick the required artifacts upwards into the deposit.",
    highlights: ["<0.7s cycle", "Color sensors", "Custom Flickers"],
  },
  {
    icon: Boxes,
    name: "VECTOR",
    tagline: "Smart artifact funneling",
    description:
      "Helps vector incoming balls with passive rollers. Funnels ball direction directly into the transfer system, increasing intake reliability.",
    highlights: ["Passive rollers", "Directional funneling", "Reliability boost"],
  },
];

const goals = [
  "Consistently score artifacts",
  "Fast sorting mechanism",
  "Modular subsystems",
  "Adaptive robot",
];

export default function RobotPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            The Build // {robotSpecs.season}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Engineered to
          <span className="block text-purple-400 glow-purple">compete.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-20"
        >
          Every season we design and build a robot from the ground up &mdash;
          tuned for the season&apos;s challenge, refined through iteration, and
          built to win matches. Here&apos;s a look under the hood of our{" "}
          <span className="text-purple-300 font-medium">DECODE</span> machine.
        </motion.p>

        {/* Big CAD render area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/10] lg:aspect-[16/8] rounded-xl overflow-hidden border border-purple-900/50 mb-20"
        >
          <div
            className="absolute inset-0 carbon-fiber"
            style={{ filter: "brightness(0.4)" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_70%)]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="w-24 h-24 rounded-full border-2 border-purple-500 flex items-center justify-center mb-6 bg-black/40 backdrop-blur-sm">
              <Cpu size={40} className="text-purple-400" />
            </div>
            <p className="font-display text-3xl text-white mb-2">
              {robotSpecs.name}
            </p>
            <p className="font-mono text-[11px] tracking-[0.3em] text-purple-400 mb-1">
              CAD RENDER PLACEHOLDER
            </p>
            <p className="font-mono text-[10px] text-purple-300/60">
              Drop your robot CAD render or photo here
            </p>
          </div>

          {/* HUD corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-purple-400" />
          <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-purple-400" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-purple-400" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-purple-400" />

          {/* Status pill */}
          <div className="absolute top-6 right-1/2 translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/50">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-green-400 tracking-wider">
              COMPETITION READY
            </span>
          </div>
        </motion.div>

        {/* Spec strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-32"
        >
          <SpecCard icon={Weight} label="WEIGHT" value={robotSpecs.weight} />
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
        </motion.div>

        {/* Design goals section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Design Goals
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            What we built it for.
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {goals.map((goal, index) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative p-5 rounded-lg bg-purple-950/20 border border-purple-900/50 hover:border-purple-500/70 transition-colors overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-purple-600" />
                <div className="font-mono text-[10px] text-purple-500/70 mb-3">
                  0{index + 1}
                </div>
                <p className="font-display text-base text-white leading-tight">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subsystems section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Subsystems
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Under the hood.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-2xl mb-12"
          >
            Five custom-engineered subsystems working in unison. Each one
            designed, prototyped, and tuned for this season&apos;s challenge.
          </motion.p>

          {/* Subsystem cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((sys, index) => {
              const Icon = sys.icon;
              return (
                <motion.div
                  key={sys.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Number */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-purple-500/60 tracking-wider">
                    0{index + 1} / 0{subsystems.length}
                  </div>

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon
                      size={20}
                      className="text-purple-300 group-hover:text-white transition-colors"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-2xl font-bold text-white tracking-wider mb-1">
                    {sys.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-4">
                    {sys.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-purple-100/70 leading-relaxed text-sm mb-5">
                    {sys.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {sys.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Bottom racing stripe */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA: link to programming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative p-8 lg:p-12 rounded-xl border border-purple-900/50 bg-gradient-to-br from-purple-950/40 to-black overflow-hidden"
        >
          <div className="absolute inset-0 carbon-fiber opacity-15" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-purple-400 mb-2">
                NEXT // CODE
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                See how we made it move.
              </h3>
              <p className="text-purple-100/60">
                Autonomous paths, sensor fusion, computer vision &mdash; the
                full software story.
              </p>
            </div>
            <Link
              href="/programming"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-md transition-all hover:shadow-xl hover:shadow-purple-500/50 whitespace-nowrap"
            >
              Programming page
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
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