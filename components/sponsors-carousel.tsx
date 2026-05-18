"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Edit this list anytime — sponsors update instantly
// Later when you have logo images, we can swap the text for <Image> tags
const sponsors = [
  "Citrix",
  "Salesforce",
  "Eclat Prime",
  "RISE Foundation",
  "Visa",
  "Altair",
  "Costco",
  "PG&E",
  "Quantum Robotics",
  "NVIDIA",
  "Prusa Research",
  "Automation Anywhere",
  "GoBilda",
  "Walmart Labs",
  "KLA",
  "Polymaker",
];

export function SponsorsCarousel() {
  // Duplicate the array so the scroll loops seamlessly
  const looped = [...sponsors, ...sponsors];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
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
            Pit Crew // Sponsors
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl"
          >
            Powered by our partners.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-purple-100/60 max-w-md"
          >
            Every great race team has a great pit crew. Huge thanks to the
            16 sponsors making our season possible.
          </motion.p>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative">
        {/* Gradient fades on left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-scroll">
          {looped.map((sponsor, index) => (
            <div
              key={`${sponsor}-${index}`}
              className="flex-shrink-0 w-[240px] h-[100px] rounded-lg border border-purple-900/50 bg-gradient-to-br from-purple-950/30 to-black flex items-center justify-center px-6 hover:border-purple-500 transition-colors group"
            >
              <div className="font-display text-lg text-purple-200/80 group-hover:text-white transition-colors tracking-wide text-center">
                {sponsor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "Become a sponsor" CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 flex justify-center"
      >
        <Link
          href="/sponsors"
          className="group inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
        >
          <span className="font-mono text-xs tracking-[0.2em]">
            BECOME A SPONSOR
          </span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}