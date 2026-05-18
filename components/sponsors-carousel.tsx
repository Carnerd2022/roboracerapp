"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Each sponsor has a name + the logo file in public/sponsors/
const sponsors = [
  { name: "Citrix", logo: "/sponsors/citrix.png" },
  { name: "Salesforce", logo: "/sponsors/salesforce.png" },
  { name: "Eclat Prime", logo: "/sponsors/eclat-prime.png" },
  { name: "RISE Foundation", logo: "/sponsors/rise-foundation.png" },
  { name: "Visa", logo: "/sponsors/visa.png" },
  { name: "Altair", logo: "/sponsors/altair.png" },
  { name: "Costco", logo: "/sponsors/costco.png" },
  { name: "PG&E", logo: "/sponsors/pge.png" },
  { name: "Quantum Robotics", logo: "/sponsors/quantum-robotics.png" },
  { name: "NVIDIA", logo: "/sponsors/nvidia.png" },
  { name: "Prusa Research", logo: "/sponsors/prusa-research.png" },
  { name: "Automation Anywhere", logo: "/sponsors/automation-anywhere.png" },
  { name: "GoBilda", logo: "/sponsors/gobilda.png" },
  { name: "Walmart Labs", logo: "/sponsors/walmart-labs.png" },
  { name: "KLA", logo: "/sponsors/kla.png" },
  { name: "Polymaker", logo: "/sponsors/polymaker.png" },
];

export function SponsorsCarousel() {
  const looped = [...sponsors, ...sponsors];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
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

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-scroll">
          {looped.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-[240px] h-[120px] rounded-lg border border-purple-900/50 bg-white/95 flex items-center justify-center px-8 hover:border-purple-500 hover:bg-white transition-all group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain p-4"
                  sizes="240px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

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