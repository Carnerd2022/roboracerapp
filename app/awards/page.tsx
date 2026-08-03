"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, MapPin } from "lucide-react";

// Awards from FTC Events (team 16481), most recent seasons, de-duplicated.
// Source: https://ftc-events.firstinspires.org/team/16481
type AwardItem = {
  award: string;
  event: string;
  placement?: string;
  highlight?: boolean; // top-tier award -> gets the trophy treatment
};

type Season = {
  name: string;
  years: string;
  blurb: string;
  awards: AwardItem[];
};

const seasons: Season[] = [
  {
    name: "DECODE",
    years: "2025–2026",
    blurb: "Our current season — five awards across the NorCal circuit so far.",
    awards: [
      { award: "Inspire Award", placement: "2nd Place", event: "The Play Space #8", highlight: true },
      { award: "Finalist Alliance", placement: "Captain", event: "The Play Space #8" },
      { award: "Connect Award", event: "Folsom Qualifier #1" },
      { award: "Control Award", event: "NorCal Regional Championship" },
      { award: "Sustainability Award", placement: "3rd Place", event: "Western Edge Premier — Sea Division" },
    ],
  },
  {
    name: "INTO THE DEEP",
    years: "2024–2025",
    blurb: "Recognized for our engineering thinking at the East Bay League tournament.",
    awards: [
      { award: "Think Award", event: "NorCal East Bay League Tournament", highlight: true },
    ],
  },
];

function iconFor(a: AwardItem) {
  if (a.highlight) return Trophy;
  if (a.award.includes("Finalist") || a.placement) return Medal;
  return Award;
}

export default function AwardsPage() {
  const total = seasons.reduce((n, s) => n + s.awards.length, 0);

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
            Awards // The Trophy Case
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          What we&apos;ve
          <span className="block text-purple-400 glow-purple">brought home.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-8"
        >
          {total} awards across our most recent seasons, judged on engineering,
          design, control, and the way we lift up the community around us.
        </motion.p>

        <motion.a
          href="https://ftc-events.firstinspires.org/team/16481"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-purple-300 hover:text-white transition-colors mb-20"
        >
          <Star size={14} />
          VIEW FULL RECORD ON FTC EVENTS
        </motion.a>

        {/* Seasons */}
        {seasons.map((season, si) => (
          <div key={season.name} className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-end justify-between gap-4 mb-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400">
                    {season.years}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-700/50 font-mono text-[10px] text-purple-200">
                    {season.awards.length} {season.awards.length === 1 ? "AWARD" : "AWARDS"}
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                  {season.name}
                </h2>
              </div>
              <p className="text-purple-100/60 max-w-md text-sm">{season.blurb}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {season.awards.map((a, ai) => {
                const Icon = iconFor(a);
                return (
                  <motion.div
                    key={`${a.award}-${a.event}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: 0.05 * ai }}
                    className={`group relative p-6 rounded-lg border transition-all overflow-hidden ${
                      a.highlight
                        ? "bg-gradient-to-br from-purple-800/40 to-black border-purple-600/60 hover:border-purple-400"
                        : "bg-gradient-to-br from-purple-950/30 to-black border-purple-900/50 hover:border-purple-500"
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] carbon-fiber opacity-40" />

                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-11 h-11 rounded-md flex items-center justify-center border transition-all ${
                          a.highlight
                            ? "bg-purple-600 border-purple-400 text-white"
                            : "bg-purple-900/40 border-purple-700/50 text-purple-300 group-hover:bg-purple-600 group-hover:text-white"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      {a.placement && (
                        <span className="px-2 py-1 rounded bg-black/50 border border-purple-500/40 font-mono text-[10px] tracking-wider text-purple-200">
                          {a.placement.toUpperCase()}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {a.award}
                    </h3>
                    <div className="flex items-center gap-1.5 text-purple-100/60 text-sm">
                      <MapPin size={13} className="text-purple-400 shrink-0" />
                      <span>{a.event}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                  </motion.div>
                );
              })}
            </div>

            {si < seasons.length - 1 && (
              <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-purple-900/60 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
