"use client";

import Link from "next/link";
import Image from "next/image";
import { Handshake, Heart, Sparkles, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

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

export default function SponsorsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Sponsors // Pit Crew
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Powered by the
          <span className="block text-purple-400 glow-purple">people who believe.</span>
        </h1>

        <p className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16">
          Every championship robot is built by a great pit crew. Ours is 16 companies strong - from Fortune 500 tech leaders to specialized manufacturers, all helping us build, code, and compete at our highest level. Funding is coordinated through our nonprofit, RISE Foundation.
        </p>

        <div className="mb-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              The Full Grid
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
            16 partners. One mission.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="relative h-[140px] rounded-lg border border-purple-900/50 bg-white/95 flex items-center justify-center p-6 hover:border-purple-500 hover:bg-white hover:shadow-xl hover:shadow-purple-500/20 transition-all group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Why Sponsor
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            What you get back.
          </h2>
          <p className="text-lg text-purple-100/60 max-w-2xl mb-12">
            Sponsoring RoboRacers isn&apos;t charity. It&apos;s an investment in the next generation of engineers you&apos;ll one day hire.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
              <div className="font-mono text-[10px] text-purple-500/60 mb-2">01</div>
              <h3 className="font-display text-xl text-white mb-3">Direct ROI on STEM</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Every dollar fuels engineering education for high schoolers who go on to become coders, designers, and engineers at companies just like yours.
              </p>
            </div>
            <div className="p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
              <div className="font-mono text-[10px] text-purple-500/60 mb-2">02</div>
              <h3 className="font-display text-xl text-white mb-3">Reach the next generation</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Logo placement on the robot, on our jerseys, at competition venues, and at the 150+ student events we host every year.
              </p>
            </div>
            <div className="p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
              <div className="font-mono text-[10px] text-purple-500/60 mb-2">03</div>
              <h3 className="font-display text-xl text-white mb-3">Mentor real engineers</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Your engineers can mentor our students directly - CAD, controls, computer vision, ML, or whatever your team specializes in.
              </p>
            </div>
            <div className="p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
              <div className="font-mono text-[10px] text-purple-500/60 mb-2">04</div>
              <h3 className="font-display text-xl text-white mb-3">Be part of our story</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Featured on our website, social channels, engineering notebook, and every event we host or attend. Visible all season long.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-purple-900/50 mb-32">
          <div className="absolute inset-0 carbon-fiber opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-black" />
          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Heart size={18} className="text-purple-400" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
                Where the funding goes
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4 max-w-3xl">
              Every dollar fuels a piece of the build.
            </h3>
            <p className="text-purple-100/70 max-w-3xl leading-relaxed mb-8">
              Funds are coordinated through RISE Foundation, the nonprofit that backs our team. Every contribution goes directly into the robot, the team, and our outreach programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg bg-black/50 border border-purple-900/50">
                <p className="font-mono text-[10px] text-purple-400 mb-2">01 / IMPACT</p>
                <p className="font-display text-lg text-white mb-2">Robot parts</p>
                <p className="text-purple-100/60 text-sm">Motors, gears, custom-printed parts, electronics, sensors.</p>
              </div>
              <div className="p-5 rounded-lg bg-black/50 border border-purple-900/50">
                <p className="font-mono text-[10px] text-purple-400 mb-2">02 / IMPACT</p>
                <p className="font-display text-lg text-white mb-2">Software & equipment</p>
                <p className="text-purple-100/60 text-sm">Limelight cameras, depth sensors, Pinpoint computers, dev tools.</p>
              </div>
              <div className="p-5 rounded-lg bg-black/50 border border-purple-900/50">
                <p className="font-mono text-[10px] text-purple-400 mb-2">03 / IMPACT</p>
                <p className="font-display text-lg text-white mb-2">Travel & competition</p>
                <p className="text-purple-100/60 text-sm">Entry fees, transportation, meals, lodging for regionals + championships.</p>
              </div>
              <div className="p-5 rounded-lg bg-black/50 border border-purple-900/50">
                <p className="font-mono text-[10px] text-purple-400 mb-2">04 / IMPACT</p>
                <p className="font-display text-lg text-white mb-2">Outreach programs</p>
                <p className="text-purple-100/60 text-sm">Curriculum kits, donated equipment for SEWA, neurodiverse robotics partnerships, and Roboreach International.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-purple-500 bg-gradient-to-br from-purple-900 to-purple-950">
          <div className="absolute inset-0 carbon-fiber opacity-15" />
          <div className="relative p-10 lg:p-14 text-center">
            <Handshake size={32} className="text-white mx-auto mb-4" />
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Join the pit crew.
            </h3>
            <p className="text-purple-100/90 text-lg max-w-2xl mx-auto mb-10">
              Help us build the next robot, mentor more students, and put RISE Foundation&apos;s mission on more stages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteConfig.social.email}?subject=Sponsorship%20Inquiry`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-md transition-all"
              >
                <Mail size={18} />
                Contact our team
                <ArrowRight size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/40 hover:border-white text-white font-medium rounded-md transition-all"
              >
                See contact page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}