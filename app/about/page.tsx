"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Calendar,
  Wrench,
  Shield,
  Lightbulb,
  Code2,
  User,
} from "lucide-react";

const missionGoals = [
  {
    icon: Shield,
    title: "Breaking barriers",
    description:
      "Making STEM education and opportunities accessible to every student, regardless of background or experience.",
  },
  {
    icon: Lightbulb,
    title: "Spreading technical knowledge",
    description:
      "Building a stronger STEM community by mentoring younger students and sharing what we learn.",
  },
  {
    icon: Code2,
    title: "Pushing the envelope",
    description:
      "Innovating across mechanical and software design — testing limits, learning fast, building faster.",
  },
];

const teamStats = [
  { icon: Users, label: "Students", value: "16" },
  { icon: Wrench, label: "Coaches", value: "2" },
  { icon: Calendar, label: "Year Founded", value: "2019" },
  { icon: MapPin, label: "Location", value: "Dublin, CA" },
];

// Team roster — replace names, roles, and bios with real ones
// Then later we can swap the User icon for real photos
const teamMembers = [
  { name: "Member 01", role: "Captain", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 02", role: "Lead Programmer", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 03", role: "Mechanical Lead", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 04", role: "CAD Lead", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 05", role: "Software Engineer", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 06", role: "Software Engineer", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 07", role: "Hardware Engineer", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 08", role: "Hardware Engineer", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 09", role: "Outreach Lead", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 10", role: "Outreach", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 11", role: "Strategy", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 12", role: "Driver", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 13", role: "Coach Driver", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 14", role: "Notebook Lead", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 15", role: "Business Lead", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
  { name: "Member 16", role: "Team Member", bio: "Add member bio here. Couple of sentences about their role on the team, what they specialize in, or a fun fact." },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            About Us // Team 16481
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          The team behind
          <span className="block text-purple-400 glow-purple">the machine.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-20"
        >
          <span className="text-white font-medium">RoboRacers 16481</span> is a community FTC team based in Dublin, California. Since our inception in 2019, we&apos;ve grown into a team of{" "}
          <span className="text-purple-300 font-medium">16 passionate high school students</span> backed by{" "}
          <span className="text-purple-300 font-medium">two industry-experienced coaches</span> and a network of mentors who help us build, code, and compete at our best.
        </motion.p>

        {/* Team stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-32"
        >
          {teamStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative p-5 rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-colors overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] carbon-fiber opacity-50" />
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className="text-purple-400" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
                    {stat.label.toUpperCase()}
                  </span>
                </div>
                <p className="font-display text-2xl text-white">{stat.value}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Mission */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Three goals.
            <span className="block text-purple-400">One direction.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-2xl mb-12"
          >
            We are driven by three overarching goals that guide everything we build, code, and teach.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  className="group relative p-8 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-purple-500/40 group-hover:border-purple-400 transition-colors" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-purple-500/40 group-hover:border-purple-400 transition-colors" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-purple-500/40 group-hover:border-purple-400 transition-colors" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-purple-500/40 group-hover:border-purple-400 transition-colors" />

                  <div className="absolute top-4 right-4 font-mono text-[10px] text-purple-500/60 tracking-wider">
                    0{index + 1}
                  </div>

                  <div className="relative w-12 h-12 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon size={20} className="text-purple-300 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">{goal.title}</h3>
                  <p className="text-purple-100/70 leading-relaxed text-sm">{goal.description}</p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* THE TEAM section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              The Roster // 16 Drivers
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Meet the team.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-2xl mb-12"
          >
            16 students. 16 different specialties. One robot.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.04 * index }}
                className="group relative p-6 rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
              >
                {/* Driver number */}
                <div className="absolute top-3 right-3 font-mono text-[10px] text-purple-500/60 tracking-wider">
                  #{String(index + 1).padStart(2, "0")}
                </div>

                {/* Avatar placeholder */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 border-2 border-purple-500/50 flex items-center justify-center mb-4 group-hover:border-purple-400 transition-colors">
                  <User size={24} className="text-purple-200" />
                </div>

                {/* Name & role */}
                <p className="font-display text-base text-white mb-1">
                  {member.name}<motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.04 * index }}
                className="group relative rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
              >
                {/* Photo placeholder area — large square at the top */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-purple-700 to-purple-950 border-b border-purple-700/50 flex items-center justify-center overflow-hidden">
                  {/* Subtle carbon fiber overlay */}
                  <div className="absolute inset-0 carbon-fiber opacity-15" />
                  
                  {/* Driver number badge */}
                  <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-purple-400/40">
                    <span className="font-mono text-[10px] text-purple-200 tracking-wider">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Big placeholder icon (replace with actual <img> when you have photos) */}
                  <div className="relative w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm border-2 border-purple-300/50 flex items-center justify-center group-hover:border-purple-200 transition-colors">
                    <User size={36} className="text-purple-100" />
                  </div>

                  {/* HUD corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-300/60" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-300/60" />
                </div>

                {/* Info section below the photo */}
                <div className="p-5">
                  <p className="font-display text-base text-white mb-1">
                    {member.name}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-3">
                    {member.role.toUpperCase()}
                  </p>
                  <p className="text-purple-100/60 text-xs leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
              </motion.div>
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-3">
                  {member.role.toUpperCase()}
                </p>

                {/* Bio */}
                <p className="text-purple-100/60 text-xs leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-purple-500" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              From garage to grid.
            </h2>

            <div className="space-y-4 text-purple-100/70 leading-relaxed">
              <p>
                What started in 2019 as a small group of students who loved building robots has grown into one of the Bay Area&apos;s most committed community FTC teams. Six seasons later, we&apos;re still chasing the same thing: building robots that work, and people who&apos;ll engineer the future.
              </p>
              <p>
                Every season, our team takes on a new challenge from FIRST, designs and builds a robot from scratch, codes its autonomous behaviors in Java, and competes against teams across California and beyond. Win or lose, every match is a chance to learn something new.
              </p>
              <p>
                We&apos;re proudly backed by 16 industry sponsors and run through the{" "}
                <span className="text-purple-300 font-medium">RISE Foundation</span>{" "}
                — every dollar goes back into the team, the robot, and the next generation of engineers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square rounded-lg overflow-hidden border border-purple-900/50"
          >
            <div className="absolute inset-0 carbon-fiber" style={{ filter: "brightness(0.4)" }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_70%)]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center mb-4 bg-black/40 backdrop-blur-sm">
                <Users size={28} className="text-purple-400" />
              </div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
                TEAM PHOTO PLACEHOLDER
              </p>
              <p className="font-mono text-[10px] text-purple-300/60 mt-1">
                Drop a team group photo here
              </p>
            </div>

            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-purple-400" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-purple-400" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-purple-400" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-purple-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}