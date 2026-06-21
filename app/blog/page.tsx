"use client";

import { Newspaper, Wrench, Trophy, Lightbulb, Users, Calendar, Clock } from "lucide-react";

const upcomingCategories = [
  {
    icon: Wrench,
    title: "Build Logs",
    cadence: "Weekly during season",
    description: "Behind-the-scenes updates on what we're building, breaking, and fixing each week. CAD iterations, prototype failures, and the moments things click.",
  },
  {
    icon: Trophy,
    title: "Competition Recaps",
    cadence: "After every event",
    description: "Match-by-match breakdowns of how we did, what worked, what didn't, and what we're changing before the next event.",
  },
  {
    icon: Lightbulb,
    title: "Engineering Deep Dives",
    cadence: "Periodic",
    description: "How we built our SLAM module. How our state machine works. Long-form articles on the hard problems we solved this season.",
  },
  {
    icon: Users,
    title: "Mentor & Student Spotlights",
    cadence: "Monthly",
    description: "Q&As with the people behind the robot — team members, coaches, and industry partners shaping how we work.",
  },
];

const teaserPosts = [
  {
    title: "How we built real-time SLAM in FTC",
    excerpt: "Combining Limelight, depth sensors, and odometry into a unified localization system — and why it changed how we approach autonomous.",
    category: "ENGINEERING",
    readTime: "8 min read",
  },
  {
    title: "DECODE season — our build journey",
    excerpt: "From the kickoff brainstorm to our first competition robot. Five subsystems, six iterations, and one tight timeline.",
    category: "BUILD LOG",
    readTime: "12 min read",
  },
  {
    title: "Mentoring 7 FIRST teams to Worlds",
    excerpt: "How our Quantum program scaled from one mentee team to seven, and what we learned along the way.",
    category: "OUTREACH",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Blog // Pit Wall
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          From the
          <span className="block text-purple-400 glow-purple">pit wall.</span>
        </h1>

        <p className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-24">
          Build logs, deep dives, season recaps, and lessons from the bench. Our team blog is being prepped — first posts dropping soon.
        </p>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              What&apos;s On the Way
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Four series. One throttle.
          </h2>
          <p className="text-lg text-purple-100/60 max-w-2xl mb-12">
            Here&apos;s the kind of content you can expect from the RoboRacers blog once we launch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="group relative p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
                >
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-purple-500/60 tracking-wider">
                    0{index + 1} / 04
                  </div>

                  <div className="relative w-12 h-12 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon size={20} className="text-purple-300 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display text-xl text-white mb-2">{cat.title}</h3>
                  <div className="flex items-center gap-1.5 mb-4">
                    <Calendar size={11} className="text-purple-400" />
                    <span className="font-mono text-[10px] tracking-wider text-purple-400">
                      {cat.cadence.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-purple-100/70 text-sm leading-relaxed">{cat.description}</p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Clock size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              In the Garage
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            First posts on deck.
          </h2>
          <p className="text-lg text-purple-100/60 max-w-2xl mb-12">
            A peek at what we&apos;re writing right now.
          </p>

          <div className="space-y-4">
            {teaserPosts.map((post) => (
              <div
                key={post.title}
                className="relative p-6 lg:p-7 rounded-lg bg-gradient-to-r from-purple-950/30 to-black border border-purple-900/50 overflow-hidden"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-purple-700/50">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  <span className="font-mono text-[9px] tracking-[0.2em] text-purple-300">
                    DRAFT
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400 px-2 py-1 rounded bg-purple-900/40 border border-purple-700/50">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-purple-300/60">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl lg:text-2xl text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-purple-100/70 text-sm leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}