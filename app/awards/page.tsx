"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, MapPin, ArrowRight } from "lucide-react";

// Awards from FTC Events (team 16481), most recent seasons, de-duplicated.
// Source: https://ftc-events.firstinspires.org/team/16481
type AwardItem = {
  award: string;
  event: string;
  placement?: string;
  note: string; // what this award actually recognizes
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
    blurb:
      "Our current campaign — and already our most decorated. Five awards across the NorCal circuit, spanning everything from software control to community outreach, with a runner-up finish for the Inspire Award along the way.",
    awards: [
      {
        award: "Inspire Award",
        placement: "2nd Place",
        event: "The Play Space #8",
        note: "FTC's highest honor — awarded to the team that best embodies the challenge as a whole, on the field and off. Finishing 2nd puts us among the very top teams at the event.",
        highlight: true,
      },
      {
        award: "Finalist Alliance",
        placement: "Captain",
        event: "The Play Space #8",
        note: "As captain, we selected our alliance partners and led them all the way to the final match.",
      },
      {
        award: "Connect Award",
        event: "Folsom Qualifier #1",
        note: "For the strongest connection between our team, the local engineering community, and our long-term plan for the program.",
      },
      {
        award: "Control Award",
        event: "NorCal Regional Championship",
        note: "For advanced use of sensors and software — autonomous routines, vision, and closed-loop control that sharpen how the robot performs.",
      },
      {
        award: "Sustainability Award",
        placement: "3rd Place",
        event: "Western Edge Premier — Sea Division",
        note: "For building a team that's structured to last — funding, mentorship, and outreach that keep the program growing season after season.",
      },
    ],
  },
  {
    name: "INTO THE DEEP",
    years: "2024–2025",
    blurb:
      "A season defined by our engineering process. Judges recognized the way we document, reason through, and refine every design decision in our engineering notebook.",
    awards: [
      {
        award: "Think Award",
        event: "NorCal East Bay League Tournament",
        note: "For the engineering notebook that best captures how we think — the journey from problem to prototype to a race-ready robot.",
        highlight: true,
      },
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
  const events = new Set(seasons.flatMap((s) => s.awards.map((a) => a.event))).size;
  const stats = [
    { value: total, label: "Awards Won" },
    { value: events, label: "Events" },
    { value: seasons.length, label: "Seasons" },
  ];

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl space-y-4 text-lg text-purple-100/70 leading-relaxed mb-10"
        >
          <p>
            In FIRST Tech Challenge, trophies aren&apos;t just for winning matches. Most
            of these are <span className="text-purple-200 font-medium">judged awards</span> — earned
            in interviews and through our engineering notebook, where a panel evaluates how we
            design, program, document, and give back to our community.
          </p>
          <p>
            That&apos;s the part we&apos;re proudest of. Every award below reflects the whole team —
            the builders, the coders, and the outreach that keeps RoboRacers rolling.
          </p>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-3 max-w-xl mb-8"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative p-5 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] carbon-fiber opacity-40" />
              <p className="font-display text-4xl font-bold text-white leading-none mb-1">
                {s.value}
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] text-purple-400 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="https://ftc-events.firstinspires.org/team/16481"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400">
                  {season.years}
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-700/50 font-mono text-[10px] text-purple-200">
                  {season.awards.length} {season.awards.length === 1 ? "AWARD" : "AWARDS"}
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                {season.name}
              </h2>
              <p className="text-purple-100/60 max-w-2xl leading-relaxed">{season.blurb}</p>
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
                    className={`group relative flex flex-col p-6 rounded-lg border transition-all overflow-hidden ${
                      a.highlight
                        ? "bg-gradient-to-br from-purple-800/40 to-black border-purple-600/60 hover:border-purple-400"
                        : "bg-gradient-to-br from-purple-950/30 to-black border-purple-900/50 hover:border-purple-500"
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] carbon-fiber opacity-40" />

                    <div className="flex items-start justify-between mb-5">
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
                    <div className="flex items-center gap-1.5 text-purple-100/60 text-sm mb-4">
                      <MapPin size={13} className="text-purple-400 shrink-0" />
                      <span>{a.event}</span>
                    </div>
                    <p className="text-purple-100/55 text-sm leading-relaxed mt-auto">
                      {a.note}
                    </p>

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

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden border border-purple-500/60 bg-gradient-to-br from-purple-900/50 to-purple-950/30"
        >
          <div className="absolute inset-0 carbon-fiber opacity-10" />
          <div className="relative p-8 lg:p-12">
            <Trophy size={30} className="text-purple-300 mb-4" />
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              And we&apos;re just getting started.
            </h3>
            <p className="text-purple-100/70 max-w-2xl leading-relaxed mb-8">
              Every season is a fresh build and a fresh shot at the trophy case. Want to help us
              add to it — or see how these robots came together?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/robot"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-md transition-all hover:shadow-xl hover:shadow-purple-500/50"
              >
                See the robots
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/sponsors"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-purple-500/50 hover:border-purple-400 hover:bg-purple-900/30 text-purple-100 font-medium rounded-md transition-all"
              >
                Support the team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
