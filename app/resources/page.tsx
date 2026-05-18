"use client";

import {
  BookOpen,
  Trophy,
  Code2,
  Wrench,
  Users,
  Lightbulb,
  Award,
  ExternalLink,
  GraduationCap,
  FileText,
  Boxes,
  Cpu,
} from "lucide-react";

const resourceCategories = [
  {
    label: "OFFICIAL FTC",
    icon: Trophy,
    description: "The essentials from FIRST and FTC themselves.",
    links: [
      {
        name: "FIRST Tech Challenge Home",
        description: "Official program homepage with announcements, registration, and program info.",
        url: "https://www.firstinspires.org/robotics/ftc",
      },
      {
        name: "Current Season Game Manual",
        description: "The official rule book for this season's challenge — every team needs this.",
        url: "https://www.firstinspires.org/resource-library/ftc/game-and-season-info",
      },
      {
        name: "FTC Awards & Scoring",
        description: "How scoring works, award criteria, and what judges look for.",
        url: "https://www.firstinspires.org/resource-library/ftc/scoring-and-awards",
      },
      {
        name: "FTC Forum",
        description: "Where teams ask Q-and-As, get rule clarifications, and discuss strategy.",
        url: "https://ftc-community.firstinspires.org/",
      },
    ],
  },
  {
    label: "PROGRAMMING",
    icon: Code2,
    description: "Tools and libraries for writing FTC robot code.",
    links: [
      {
        name: "FTC SDK on GitHub",
        description: "The official FTC robot controller code — the starting point for every team's repo.",
        url: "https://github.com/FIRST-Tech-Challenge/FtcRobotController",
      },
      {
        name: "FTC SDK Wiki",
        description: "Official documentation for the FTC SDK — how to use the API and write OpModes.",
        url: "https://github.com/FIRST-Tech-Challenge/FtcRobotController/wiki",
      },
      {
        name: "OnBot Java IDE",
        description: "Browser-based Java IDE for writing FTC code without Android Studio.",
        url: "https://github.com/FIRST-Tech-Challenge/FtcRobotController/wiki/OnBot-Java-Tutorial",
      },
      {
        name: "Pedro Pathing",
        description: "Modern path-following library for FTC autonomous routines.",
        url: "https://pedropathing.com/",
      },
      {
        name: "Road Runner",
        description: "Motion planning library for FTC — the classic for smooth autonomous trajectories.",
        url: "https://learnroadrunner.com/",
      },
      {
        name: "Pinpoint Computer",
        description: "GoBilda's localization computer — what we use for our SLAM module.",
        url: "https://www.gobilda.com/odometry-computer-imu-sensor-fusion-for-2-wheel-odometry/",
      },
    ],
  },
  {
    label: "DESIGN & CAD",
    icon: Wrench,
    description: "CAD tools and design references.",
    links: [
      {
        name: "Onshape",
        description: "Free browser-based CAD that we use for all our robot design. Has a free FTC plan.",
        url: "https://www.onshape.com/en/education/",
      },
      {
        name: "GoBilda Builder",
        description: "Find compatible parts, motors, and structural pieces for your build.",
        url: "https://www.gobilda.com/",
      },
      {
        name: "REV Robotics",
        description: "Control system components, motors, and structural elements.",
        url: "https://www.revrobotics.com/competition/first-tech-challenge/",
      },
      {
        name: "AndyMark",
        description: "Robot parts, kits, and competition supplies for FTC teams.",
        url: "https://www.andymark.com/FTC",
      },
    ],
  },
  {
    label: "LEARNING & TUTORIALS",
    icon: GraduationCap,
    description: "Where new students should start.",
    links: [
      {
        name: "Game Manual 0",
        description: "Community-maintained resource teaching FTC fundamentals — strategy, programming, mechanical design. Excellent for newcomers.",
        url: "https://gm0.org/",
      },
      {
        name: "CTRL ALT FTC",
        description: "Deep-dive technical articles on FTC programming concepts written by top teams.",
        url: "https://www.ctrlaltftc.com/",
      },
      {
        name: "FTC YouTube Channel",
        description: "Official FTC livestreams, recaps, and tutorial content.",
        url: "https://www.youtube.com/@FIRSTRoboticsCompetitionVideos",
      },
      {
        name: "Onshape FTC Course",
        description: "Free CAD course tailored for FIRST students — start here if you've never CAD'd before.",
        url: "https://learn.onshape.com/learn/learning-path/first-students",
      },
    ],
  },
  {
    label: "NOTEBOOK & STRATEGY",
    icon: BookOpen,
    description: "Resources for your engineering notebook and award submissions.",
    links: [
      {
        name: "Engineering Notebook Guide",
        description: "Official FTC guidance on what makes a great Engineering Portfolio.",
        url: "https://www.firstinspires.org/resource-library/ftc/team-management-resources",
      },
      {
        name: "Inspire Award Criteria",
        description: "What judges look for in the top award of FTC — well worth studying.",
        url: "https://www.firstinspires.org/resource-library/ftc/scoring-and-awards",
      },
      {
        name: "FTC Team Resources",
        description: "Team management, fundraising, and outreach planning materials from FIRST.",
        url: "https://www.firstinspires.org/resource-library/ftc/team-management-resources",
      },
    ],
  },
  {
    label: "COMMUNITY",
    icon: Users,
    description: "Where to connect with other FTC teams and mentors.",
    links: [
      {
        name: "Unofficial FTC Discord",
        description: "Massive community of teams sharing code, design tips, and strategy.",
        url: "https://discord.com/invite/first-tech-challenge",
      },
      {
        name: "Reddit r/FTC",
        description: "Active subreddit for FTC discussions, build showcases, and Q&A.",
        url: "https://www.reddit.com/r/FTC/",
      },
      {
        name: "FTC Statistics",
        description: "Match data, team OPRs, world rankings — see how teams stack up.",
        url: "https://ftcstats.org/",
      },
      {
        name: "The Orange Alliance",
        description: "Event results, team match histories, and award lookups for FTC.",
        url: "https://theorangealliance.org/",
      },
    ],
  },
];

const quickStart = [
  {
    icon: Lightbulb,
    title: "New to FTC?",
    description: "Start with Game Manual 0. It's the single best free resource for learning everything from controls to strategy.",
    url: "https://gm0.org/",
  },
  {
    icon: Cpu,
    title: "Starting to code?",
    description: "Fork the FTC SDK from GitHub, install Android Studio, and follow the OnBot Java tutorial.",
    url: "https://github.com/FIRST-Tech-Challenge/FtcRobotController",
  },
  {
    icon: Boxes,
    title: "Designing your first robot?",
    description: "Set up an Onshape account (free for students), start with the GoBilda parts library, and sketch before you build.",
    url: "https://www.onshape.com/en/education/",
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Resources // Toolkit
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          The garage,
          <span className="block text-purple-400 glow-purple">open to everyone.</span>
        </h1>

        <p className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16">
          Whether you&apos;re a new FTC team, a current student, a coach, or just curious about robotics, here&apos;s our curated list of the most useful FTC resources on the web. Everything we wish we had on day one.
        </p>

        {/* Quick start */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Quick Start
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
            Start your engines.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickStart.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-7 rounded-lg bg-purple-600/90 border border-purple-400 hover:border-purple-200 transition-all overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-md bg-white/15 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                    <ExternalLink size={16} className="text-purple-200 mt-1 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-purple-50/90 text-sm leading-relaxed">{item.description}</p>
                  <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.2em] text-purple-100/70">
                    0{index + 1}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {resourceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.label}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-purple-400" />
                  <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
                    {category.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  {category.label === "OFFICIAL FTC" ? "Straight from FIRST." :
                   category.label === "PROGRAMMING" ? "Write the code." :
                   category.label === "DESIGN & CAD" ? "Build the bot." :
                   category.label === "LEARNING & TUTORIALS" ? "Level up." :
                   category.label === "NOTEBOOK & STRATEGY" ? "Tell your story." :
                   "Find your pit crew."}
                </h3>
                <p className="text-purple-100/60 mb-8">{category.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-5 rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-display text-base text-white group-hover:text-purple-200 transition-colors">
                          {link.name}
                        </h4>
                        <ExternalLink size={14} className="text-purple-400 mt-1 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className="text-purple-100/60 text-sm leading-relaxed">{link.description}</p>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-24 p-8 rounded-xl border border-purple-900/50 bg-purple-950/20 text-center">
          <FileText size={24} className="text-purple-400 mx-auto mb-3" />
          <p className="text-lg text-purple-100/80 max-w-2xl mx-auto">
            See a great resource missing from this list?{" "}
            <a
              href="/contact"
              className="text-purple-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Let us know
            </a>{" "}
            and we&apos;ll add it.
          </p>
        </div>
      </div>
    </div>
  );
}