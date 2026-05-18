"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Eye,
  Radar,
  Database,
  GitBranch,
  Target,
  Gauge,
  Zap,
  Brain,
  Compass,
  Crosshair,
} from "lucide-react";

const coreTenets = [
  {
    name: "Consistency",
    description:
      "Failing 5% of the time is failing all the time. Robust autonomous, adaptive control systems, sensor-based actions.",
  },
  {
    name: "Optimal",
    description:
      "Spend the least amount of effort for the most amount of points. Reliable subsystems, minimal wasted resources.",
  },
  {
    name: "Redundancy",
    description:
      "Better to have it twice than to need it once. Back-up sensors paired with mechanical and software solutions.",
  },
  {
    name: "Ease-of-use",
    description:
      "If your driver needs a manual, your code needs a redesign. Auto-advancing states, teleop sensor assistance.",
  },
];

const innovations = [
  {
    icon: Compass,
    name: "Real-Time SLAM",
    tagline: "Simultaneous Localization & Mapping",
    description:
      "Combined vision, depth sensing, and odometry to continuously map the field and localize the robot in real time. Allows us to adapt to alliance partners, update paths on the fly, and make informed autonomous decisions based on an accurate understanding of our surroundings.",
    highlights: ["Vision + depth + odometry", "Dynamic path generation", "Field-wide localization"],
  },
  {
    icon: Eye,
    name: "Computer Vision",
    tagline: "Limelight + HuskyLens AI",
    description:
      "Limelight handles AprilTag detection for auto-aligning to the backboard and reading IDs to dynamically choose patterns. Ball detection identifies game pieces and feeds into the multi-zone sensor pipeline to compute SLAM updates.",
    highlights: ["AprilTag detection", "Auto-align", "Ball tracking"],
  },
  {
    icon: Radar,
    name: "Multi-Zone Depth Sensing",
    tagline: "VL53L1X distance arrays",
    description:
      "Multi-zone depth sensors detect approaching objects and measure their distance with sub-centimeter precision. Critical for collision avoidance during autonomous and for understanding the robot's micro-environment.",
    highlights: ["VL53L1X sensors", "Object distance", "Collision avoidance"],
  },
  {
    icon: Crosshair,
    name: "Pinpoint Localization",
    tagline: "IMU + dead-wheel odometry",
    description:
      "The Pinpoint computer fuses IMU and dead-wheel odometry into a single, precise localization system using global field coordinates rather than relative-to-robot. This is what powers our SLAM module.",
    highlights: ["Global coordinates", "Sensor fusion", "SLAM-ready"],
  },
  {
    icon: Layers,
    name: "Layered Architecture",
    tagline: "Custom Physical Layer",
    description:
      "Built our own layered architecture: a Physical Layer with custom controls applicable to every season, a Logical Layer on top, and a Coordinator that ties subsystems together. Enables fast prototyping and clean transfer between seasons.",
    highlights: ["Reusable per season", "Centralized actuators", "Tunable PIDs"],
  },
  {
    icon: Database,
    name: "SQLite Persistence",
    tagline: "State across disconnects",
    description:
      "Custom SQLite database persists transfer state and sensor data through robot disconnects between Auton and TeleOp. Static variables get reset on disconnect — the database doesn't.",
    highlights: ["Cross-phase state", "Disconnect-proof", "Sensor history"],
  },
  {
    icon: Target,
    name: "Physics-Based Shooting",
    tagline: "Adaptive auto-shoot",
    description:
      "Physics-based shooting calculation with hood adjustments for lost velocity. We can shoot while moving — driver no longer needs to stop, eliminating opportunities for defenders to push us off line.",
    highlights: ["Moving shots", "Velocity comp", "Hood adjustment"],
  },
  {
    icon: GitBranch,
    name: "Agile Dev Pipeline",
    tagline: "Branch-per-subsystem",
    description:
      "Structured agile pipeline. Each coder works on their own branch per subsystem (Drivetrain, Intake, Deposit, Slides). The captain delegates, tests are written for each subsystem, and branches merge into main only after validation.",
    highlights: ["Git branches", "Subsystem tests", "Captain-led merges"],
  },
  {
    icon: Zap,
    name: "Bulk Reading + SRS Hub",
    tagline: "Sub-10ms loop times",
    description:
      "Switched from reading each sensor individually (slow loop times) to using SRS Hubs with bulk reading — reading every sensor in a single transaction. Dramatic improvement in loop frequency.",
    highlights: ["Bulk reads", "Sub-10ms loops", "Custom drivers"],
  },
];

const futureWork = [
  {
    title: "Predictive trajectory optimization",
    description:
      "Use SLAM history + game-state prediction to anticipate robot and alliance movements rather than reacting in real time.",
  },
  {
    title: "Reinforcement learning agent",
    description:
      "Train an RL model on past match data to improve endgame decisions and scoring strategies automatically — the robot gets smarter every match.",
  },
];

export default function ProgrammingPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Programming // The Brain
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          The code that
          <span className="block text-purple-400 glow-purple">drives it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-20"
        >
          Hardware wins matches. Software wins championships. Our codebase fuses
          computer vision, real-time SLAM, sensor fusion, and a custom
          architecture built for{" "}
          <span className="text-purple-300 font-medium">
            consistency, redundancy, and ease-of-use
          </span>
          .
        </motion.p>

        {/* Core tenets */}
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
              Core Tenets
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            How we write code.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreTenets.map((tenet, index) => (
              <motion.div
                key={tenet.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative p-6 rounded-lg bg-purple-600/90 border border-purple-400 overflow-hidden"
              >
                <div className="font-mono text-[10px] text-purple-200 tracking-wider mb-2">
                  0{index + 1}
                </div>
                <h3 className="font-display text-xl text-white mb-3">
                  {tenet.name}
                </h3>
                <p className="text-purple-50/90 text-sm leading-relaxed">
                  {tenet.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture overview banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden border border-purple-900/50 mb-32"
        >
          <div className="absolute inset-0 carbon-fiber opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-black" />

          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Cpu size={18} className="text-purple-400" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
                System Architecture
              </span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6 max-w-3xl">
              Three layers. One unified system.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: "PHYSICAL LAYER",
                  title: "Hardware abstraction",
                  detail:
                    "Custom controls for every actuator — applicable to every season's robot. PIDs tunable in seconds.",
                },
                {
                  label: "LOGICAL LAYER",
                  title: "Subsystem brains",
                  detail:
                    "Deposit · Turret · Intake · Transfer · Vector. Each subsystem is independently testable and swappable.",
                },
                {
                  label: "COORDINATOR",
                  title: "The conductor",
                  detail:
                    "Sequences subsystems together for complex autonomous routines and assisted teleop actions.",
                },
              ].map((layer) => (
                <div
                  key={layer.label}
                  className="p-5 rounded-lg bg-black/50 backdrop-blur-sm border border-purple-900/50"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">
                    {layer.label}
                  </p>
                  <p className="font-display text-lg text-white mb-2">
                    {layer.title}
                  </p>
                  <p className="text-purple-100/60 text-sm leading-relaxed">
                    {layer.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Innovations grid */}
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
              Software Innovations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            The stack that wins matches.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-2xl mb-12"
          >
            Nine systems working together. Each one solving a specific problem
            we hit on the field, each one built from scratch by team members.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((inv, index) => {
              const Icon = inv.icon;
              return (
                <motion.div
                  key={inv.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="group relative p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-purple-500/60 tracking-wider">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(innovations.length).padStart(2, "0")}
                  </div>

                  <div className="relative w-12 h-12 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon
                      size={20}
                      className="text-purple-300 group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {inv.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-4">
                    {inv.tagline}
                  </p>

                  <p className="text-purple-100/70 leading-relaxed text-sm mb-5">
                    {inv.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {inv.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dev pipeline section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden border border-purple-900/50 mb-32 p-8 lg:p-12 bg-gradient-to-br from-purple-950/30 to-black"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitBranch size={18} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Development Pipeline
            </span>
          </div>

          <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4 max-w-3xl">
            Five coders. One main branch.
          </h3>

          <p className="text-purple-100/70 max-w-3xl leading-relaxed mb-8">
            With five people on our software team, multiple coders can&apos;t
            edit the robot at once. We follow an agile pipeline where the
            captain delegates subtasks to individual coders or pairs. Each one
            works on their own branch of the repository, builds the feature in
            isolation, writes tests for the subsystem, and merges into{" "}
            <span className="text-purple-300 font-mono">main</span> only once
            it&apos;s validated.
          </p>

          {/* Branch flow */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-md bg-purple-600 text-white">
              captain
            </span>
            <span className="text-purple-500">→</span>
            <span className="px-3 py-1.5 rounded-md bg-purple-900/40 border border-purple-700/50 text-purple-300">
              branch/drivetrain
            </span>
            <span className="px-3 py-1.5 rounded-md bg-purple-900/40 border border-purple-700/50 text-purple-300">
              branch/intake
            </span>
            <span className="px-3 py-1.5 rounded-md bg-purple-900/40 border border-purple-700/50 text-purple-300">
              branch/deposit
            </span>
            <span className="px-3 py-1.5 rounded-md bg-purple-900/40 border border-purple-700/50 text-purple-300">
              branch/slides
            </span>
            <span className="text-purple-500">→</span>
            <span className="px-3 py-1.5 rounded-md bg-white text-black font-medium">
              main
            </span>
          </div>
        </motion.div>

        {/* Future work */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Future Improvements
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            What&apos;s next on the line.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative p-7 rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/20 to-black overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
                <div className="flex items-center gap-2 mb-4">
                  <Brain size={16} className="text-purple-400" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
                    RESEARCH / NEXT SEASON
                  </span>
                </div>
                <h3 className="font-display text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-purple-100/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}