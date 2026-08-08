"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";

/**
 * Home-page promo band for the current fundraiser. Bright and hard to miss so
 * visitors click straight through to the fundraiser page.
 */
export function FundraiserBanner() {
  return (
    <section className="relative py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-orange-500/50 bg-gradient-to-br from-orange-950/50 via-purple-950/60 to-black"
        >
          <div className="absolute inset-0 carbon-fiber opacity-10" />
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 lg:p-10">
            {/* Flier thumbnail */}
            <Link
              href="/fundraiser"
              className="shrink-0 group relative w-40 sm:w-48 rounded-lg overflow-hidden border border-orange-500/40 shadow-xl shadow-black/50"
            >
              <Image
                src="/blazepizza.png"
                alt="Robo Racers x Blaze Pizza fundraiser"
                width={1290}
                height={1670}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            {/* Copy + CTA */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40">
                <Flame size={14} className="text-orange-400" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-orange-300 uppercase">
                  New // Our First Fundraiser
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                Eat at Blaze Pizza,
                <span className="block text-orange-400">support Robo Racers.</span>
              </h2>

              <p className="text-purple-100/70 max-w-xl mb-7 mx-auto md:mx-0">
                A slice of every order at Blaze Pizza in Pleasanton comes back to Team 16481.
                Grab dinner, bring friends, and fuel our next robot.
              </p>

              <Link
                href="/fundraiser"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-md transition-all hover:shadow-xl hover:shadow-orange-500/40"
              >
                See the fundraiser
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
