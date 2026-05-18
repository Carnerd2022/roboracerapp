"use client";

import { motion } from "framer-motion";
import { Cog, Code, Trophy, Users } from "lucide-react";

const pillars = [
  {
    icon: Cog,
    label: "DESIGN",
    description: "Engineer & build a competitive robot from raw materials.",
  },
  {
    icon: Code,
    label: "PROGRAM",
    description: "Write autonomous and driver-controlled code in Java.",
  },
  {
    icon: Trophy,
    label: "COMPETE",
    description: "Face teams across the country in alliance matchups.",
  },
  {
    icon: Users,
    label: "IMPACT",
    description: "Inspire the next generation through STEM outreach.",
  },
];

export function WhatIsFTC() {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Subtle racing-stripe accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-purple-500" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            What is FTC
          </span>
        </motion.div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-4xl"
        >
          A global robotics championship
          <span className="block text-purple-400">
            for the next generation.
          </span>
        </motion.h2>

        {/* Explainer paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16"
        >
          The{" "}
          <span className="text-white font-medium">
            FIRST Tech Challenge
          </span>{" "}
          is an international competition where students in grades 7–12
          design, build, program, and drive their own robots to compete in a
          brand-new game every season. It&apos;s where engineering meets
          strategy, code meets community, and teamwork wins races.
        </motion.p>

        {/* 4 pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative p-6 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/20"
              >
                {/* Lap number / index */}
                <div className="absolute top-3 right-3 font-mono text-[10px] text-purple-500/60 tracking-wider">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-purple-900/30 border border-purple-700/50 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                  <Icon
                    size={22}
                    className="text-purple-300 group-hover:text-white transition-colors"
                  />
                </div>

                {/* Label */}
                <div className="font-display text-lg tracking-wider mb-2 text-white">
                  {pillar.label}
                </div>

                {/* Description */}
                <p className="text-sm text-purple-100/60 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom racing stripe accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}