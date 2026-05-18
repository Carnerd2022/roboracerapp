"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Trophy, Heart, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Reusable animated counter — counts up from 0 to target when scrolled into view
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a nice deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Calendar,
    label: "SEASONS COMPETING",
    value: siteConfig.stats.yearsActive,
    suffix: "",
  },
  {
    icon: Trophy,
    label: "AWARDS WON",
    value: siteConfig.stats.awards,
    suffix: "",
  },
  {
    icon: Heart,
    label: "OUTREACH HOURS",
    value: siteConfig.stats.outreachHours,
    suffix: "+",
  },
  {
    icon: Users,
    label: "STUDENTS MENTORED",
    value: siteConfig.stats.studentsMentored,
    suffix: "+",
  },
];

export function StatsDashboard() {
  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-black">
      {/* Top divider racing stripe */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
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
            Team Telemetry
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          By the numbers.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-purple-100/60 max-w-2xl mb-16"
        >
          Six seasons of engineering, hundreds of hours of outreach, and a
          growing community we&apos;re proud to build.
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative p-6 lg:p-8 rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
              >
                {/* Subtle purple glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Carbon fiber strip along the top */}
                <div className="absolute top-0 left-0 right-0 h-1 carbon-fiber opacity-40" />

                {/* Icon */}
                <div className="relative w-10 h-10 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                  <Icon
                    size={18}
                    className="text-purple-300 group-hover:text-white transition-colors"
                  />
                </div>

                {/* Big animated number */}
                <div className="relative">
                  <div className="font-display text-5xl lg:text-6xl font-bold text-white mb-2 leading-none">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom racing-line accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}