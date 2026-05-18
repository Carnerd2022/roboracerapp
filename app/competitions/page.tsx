"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Calendar,
  MapPin,
  Star,
  Crown,
  Flag,
  CheckCircle2,
  Clock,
} from "lucide-react";

// Current season events
const currentSeason = {
  year: "2025-2026",
  name: "DECODE",
  events: [
    {
      name: "The Play Space #8",
      location: "Off-season scrimmage",
      status: "complete",
      awards: ["Finalist Alliance Captain", "Inspire Award 2nd Place"],
    },
    {
      name: "Folsom QT #1",
      location: "Folsom, CA",
      status: "complete",
      awards: ["Connect Award"],
    },
    {
      name: "NorCal Regional Championship",
      location: "Northern California",
      status: "complete",
      awards: ["Control Award"],
    },
    {
      name: "NorCal Regional Championship — Silicon Division",
      location: "Northern California",
      status: "complete",
      awards: [],
    },
    {
      name: "Western Edge Premier Event",
      location: "Western Region",
      status: "complete",
      awards: [],
    },
  ],
};

// Last season for reference
const lastSeason = {
  year: "2024-2025",
  name: "INTO THE DEEP",
  events: [
    {
      name: "NorCal FTC — East Bay League Meet #1",
      location: "East Bay, CA",
      status: "complete",
      awards: [],
    },
    {
      name: "NorCal FTC — East Bay League Meet #2",
      location: "East Bay, CA",
      status: "complete",
      awards: [],
    },
    {
      name: "NorCal FTC — East Bay League Meet #3",
      location: "East Bay, CA",
      status: "complete",
      awards: [],
    },
    {
      name: "NorCal FTC — East Bay League Tournament",
      location: "East Bay, CA",
      status: "complete",
      awards: ["Think Award"],
    },
  ],
};

// All-time award highlights
const awardHighlights = [
  {
    icon: Crown,
    title: "Inspire Award",
    seasons: ["2023", "2025 (2nd Place)"],
    description:
      "The most prestigious award in FTC — recognizes the team that best embodies the FIRST values.",
    isMajor: true,
  },
  {
    icon: Trophy,
    title: "Finalist Alliance Captain",
    seasons: ["2025", "2023", "2022"],
    description:
      "Selected to captain a winning alliance multiple times — proof of our robot performance and strategy.",
    isMajor: true,
  },
  {
    icon: Star,
    title: "Control Award",
    seasons: ["2025", "2023"],
    description:
      "Recognizes the most innovative use of sensors and software to enhance robot functionality.",
    isMajor: false,
  },
  {
    icon: Award,
    title: "Think Award",
    seasons: ["2024", "2022"],
    description:
      "Recognizes the team that best reflects the journey of engineering through their Engineering Notebook.",
    isMajor: false,
  },
  {
    icon: Medal,
    title: "Connect Award",
    seasons: ["2025"],
    description:
      "Recognizes outstanding connections with the FIRST and engineering communities.",
    isMajor: false,
  },
  {
    icon: Medal,
    title: "Design Award",
    seasons: ["2021"],
    description:
      "Celebrates excellence in design and engineering practices.",
    isMajor: false,
  },
  {
    icon: Medal,
    title: "Volunteer Award",
    seasons: ["2023"],
    description:
      "Recognizes outstanding service to the FIRST community.",
    isMajor: false,
  },
];

// Career totals
const careerStats = [
  { label: "SEASONS COMPETED", value: "6" },
  { label: "TOTAL AWARDS", value: "9" },
  { label: "INSPIRE AWARDS", value: "2" },
  { label: "FINALIST RUNS", value: "3" },
];

export default function CompetitionsPage() {
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
            Competitions // The Race History
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          On the grid.
          <span className="block text-purple-400 glow-purple">
            Every season.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16"
        >
          Six seasons of competition. Nine awards. Two Inspire Award showings.
          Here&apos;s a look at where we&apos;ve raced &mdash; and where
          we&apos;re headed.
        </motion.p>

        {/* Career stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-32"
        >
          {careerStats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-5 rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-colors overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] carbon-fiber opacity-50" />
              <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">
                {stat.label}
              </p>
              <p className="font-display text-3xl text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Current Season */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Current Season // {currentSeason.year}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            {currentSeason.name}.
          </motion.h2>

          <div className="space-y-3">
            {currentSeason.events.map((event, index) => (
              <EventRow key={event.name} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Last Season */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <Flag size={14} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Last Season // {lastSeason.year}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            {lastSeason.name}.
          </motion.h2>

          <div className="space-y-3">
            {lastSeason.events.map((event, index) => (
              <EventRow key={event.name} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Career Awards Summary */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <Trophy size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Career // Trophy Cabinet
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            What we&apos;ve earned.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-2xl mb-12"
          >
            Nine awards across six seasons. Engineering recognition, alliance
            captain runs, and twice on the Inspire Award stage.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awardHighlights.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className={`group relative p-6 rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20 ${
                    award.isMajor
                      ? "bg-purple-600/90 border border-purple-400 hover:border-purple-300"
                      : "bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500"
                  }`}
                >
                  {/* MAJOR badge for top awards */}
                  {award.isMajor && (
                    <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.2em] text-purple-100 bg-black/40 px-2 py-1 rounded-full">
                      MAJOR
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${
                      award.isMajor
                        ? "bg-white/15 border border-white/20"
                        : "bg-purple-900/40 border border-purple-700/50 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        award.isMajor
                          ? "text-white"
                          : "text-purple-300 group-hover:text-white transition-colors"
                      }
                    />
                  </div>

                  <h3
                    className={`font-display text-xl mb-2 ${
                      award.isMajor ? "text-white" : "text-white"
                    }`}
                  >
                    {award.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      award.isMajor ? "text-purple-50/90" : "text-purple-100/70"
                    }`}
                  >
                    {award.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {award.seasons.map((season) => (
                      <span
                        key={season}
                        className={`text-[10px] font-mono px-2 py-1 rounded-full ${
                          award.isMajor
                            ? "bg-white/15 text-white border border-white/20"
                            : "bg-purple-900/30 border border-purple-700/50 text-purple-300"
                        }`}
                      >
                        {season}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable event row
function EventRow({
  event,
  index,
}: {
  event: {
    name: string;
    location: string;
    status: string;
    awards: string[];
  };
  index: number;
}) {
  const hasAwards = event.awards.length > 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className={`relative p-5 lg:p-6 rounded-lg border transition-all overflow-hidden ${
        hasAwards
          ? "bg-gradient-to-r from-purple-950/40 to-black border-purple-700/50 hover:border-purple-400"
          : "bg-purple-950/20 border-purple-900/40 hover:border-purple-700"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 size={14} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
              {event.status.toUpperCase()}
            </span>
          </div>
          <h4 className="font-display text-lg text-white mb-1">{event.name}</h4>
          <div className="flex items-center gap-2 text-purple-200/50 text-sm">
            <MapPin size={12} />
            <span>{event.location}</span>
          </div>
        </div>

        {hasAwards ? (
          <div className="flex flex-wrap gap-2">
            {event.awards.map((award) => (
              <span
                key={award}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white text-xs font-medium border border-purple-400"
              >
                <Trophy size={11} />
                {award}
              </span>
            ))}
          </div>
        ) : (
          <span className="font-mono text-[10px] text-purple-500/60 tracking-wider">
            COMPETED
          </span>
        )}
      </div>
    </motion.div>
  );
}