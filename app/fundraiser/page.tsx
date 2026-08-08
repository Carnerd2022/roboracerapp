"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, MapPin, HeartHandshake, ExternalLink, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const BLAZE_ADDRESS = "4247 Rosewood Dr, Pleasanton, CA 94588";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Blaze+Pizza+4247+Rosewood+Dr+Pleasanton+CA+94588";

export default function FundraiserPage() {
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
          <div className="h-px w-12 bg-orange-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-orange-400 uppercase">
            Fundraiser // Blaze Pizza
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Eat pizza.
          <span className="block text-orange-400">Fuel the robot.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16"
        >
          We&apos;re thrilled to announce our very first fundraiser — a dine-out night with{" "}
          <span className="text-white font-medium">Blaze Pizza</span> in Pleasanton. Come grab a
          fast-fire&apos;d pizza, bring your friends and family, and a portion of the sales goes
          straight to <span className="text-purple-300 font-medium">Robo Racers FTC Team 16481</span>.
          It&apos;s the easiest (and tastiest) way to support the team.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Flier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden border border-purple-900/50 bg-black shadow-2xl shadow-purple-950/40"
          >
            <Image
              src="/blazepizza.png"
              alt="Robo Racers 16481 x Blaze Pizza fundraiser flyer"
              width={1290}
              height={1670}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Location */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <MapPin size={18} className="text-orange-400" />
                </div>
                <h3 className="font-display text-lg text-white">Where</h3>
              </div>
              <p className="text-purple-100/80 mb-1">Blaze Pizza — Pleasanton</p>
              <p className="text-purple-100/60 text-sm mb-4">{BLAZE_ADDRESS}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 font-medium text-sm transition-colors group"
              >
                Get directions
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* How it helps */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center">
                  <HeartHandshake size={18} className="text-purple-300" />
                </div>
                <h3 className="font-display text-lg text-white">How it helps</h3>
              </div>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Mention <span className="text-white font-medium">Robo Racers FTC Team 16481</span> when
                you order, and Blaze Pizza gives a share of the proceeds back to our team — funding
                robot parts, competition travel, and STEM outreach.
              </p>
            </div>

            {/* Flame accent card */}
            <div className="relative p-6 rounded-lg overflow-hidden border border-orange-500/40 bg-gradient-to-br from-orange-900/30 to-purple-950/30">
              <Flame size={22} className="text-orange-400 mb-3" />
              <p className="text-purple-50/90 leading-relaxed">
                Every slice counts. Bring the whole crew, tag us in your photos, and help us make
                our first fundraiser a big one.
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-purple-200 hover:text-white text-sm font-medium transition-colors"
              >
                <ExternalLink size={15} />
                Follow @roboracers.16481 for the date &amp; time
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
