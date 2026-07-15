"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Handshake } from "lucide-react";

const ctas = [
  {
    icon: Users,
    title: "Join the Team",
    description:
      "Are you a student passionate about robotics, programming, or engineering? We want you in the pit.",
    cta: "Apply Now",
    href: "/contact",
    color: "purple",
  },
  {
    icon: Handshake,
    title: "Sponsor Us",
    description:
      "Power the next generation of engineers. Get logo placement, tax benefits, and a shoutout at events.",
    cta: "Become a Sponsor",
    href: "/sponsors",
    color: "purple",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Every dollar fuels our robots, our outreach, and our future. Even small donations make a huge difference.",
    cta: "Support the Team",
    href: "/sponsors",
    color: "purple",
  },
];

export function CTASection() {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Carbon fiber backdrop */}
      <div className="absolute inset-0 carbon-fiber opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05030a]/60 via-purple-950/20 to-[#05030a]/85" />

      {/* Top racing stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4 justify-center"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Get Involved
          </span>
          <div className="h-px w-12 bg-purple-500" />
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-center"
        >
          Start your engine.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-purple-100/60 max-w-2xl mx-auto mb-16 text-center"
        >
          Whether you want to build, fund, or root for us &mdash; there&apos;s
          a spot for you on the team.
        </motion.p>

        {/* 3 CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="group relative p-8 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* HUD-style corner brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-purple-500/40 group-hover:border-purple-400 transition-colors" />
                <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-purple-500/40 group-hover:border-purple-400 transition-colors" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-purple-500/40 group-hover:border-purple-400 transition-colors" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-purple-500/40 group-hover:border-purple-400 transition-colors" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon
                      size={24}
                      className="text-purple-300 group-hover:text-white transition-colors"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-purple-100/70 leading-relaxed mb-8 min-h-[80px]">
                    {item.description}
                  </p>

                  {/* CTA button */}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-medium transition-colors group/btn"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Bottom racing-stripe accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}