"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  GraduationCap,
  Network,
  Sparkles,
  Award,
  Users,
  Globe,
  Lightbulb,
  Heart,
  Trophy,
  Building2,
  Briefcase,
  Leaf,
  Glasses,
  Recycle,
  Hammer,
} from "lucide-react";

const strategyPillars = [
  {
    icon: Wrench,
    label: "BUILD",
    description:
      "Use technical knowledge from the field to support community service projects that impact lives.",
  },
  {
    icon: GraduationCap,
    label: "EDUCATE",
    description:
      "Provide aspiring engineers with quality robotics and engineering education, at no cost.",
  },
  {
    icon: Network,
    label: "CONNECT",
    description:
      "Build long-term relationships with industry experts and organizations for technical and financial support.",
  },
  {
    icon: Sparkles,
    label: "OPTIMIZE",
    description:
      "Improve financial strategy, streamline workflows, enhance budgeting, and refine documentation.",
  },
];

const firstPrograms = [
  {
    icon: Trophy,
    title: "East Bay League Tournament",
    role: "HOST",
    description:
      "Hosted the East Bay League Meets and Tournament. Coordinated venues, schedules, volunteers, and key event logistics — kept matches running smoothly and live-streamed the competition on our YouTube channel.",
  },
  {
    icon: Users,
    title: "Open Scrimmages",
    role: "ORGANIZER",
    description:
      "Hosted multiple scrimmages with other teams competing at regionals — allowing all teams to have practice prior to competition. We continue planning future on-season and off-season scrimmages.",
  },
  {
    icon: Award,
    title: "Quantum Mentorship",
    role: "MENTORS",
    description:
      "Mentored 7 FIRST teams through our Quantum program (4 FLL, 3 FTC) — including 5 teams competing in FIRST for the first time. Quantum Sparks (FTC 30474) moved up from FLL to FTC with us. All 7 teams won at regionals, earning the highest robot scores, top project awards, and qualifying for the World Championships.",
  },
];

const educationPartners = [
  {
    name: "SEWA International",
    location: "Newark, USA",
    color: "purple",
    description:
      "Partnered with SEWA, a nonprofit, for an after-school program teaching robotics to underserved students in the Newark school district. Launched a FIRST LEGO League (FLL) program with equipment donated by our RISE Foundation, introducing students to FIRST. We donated 5 laptops and led a six-week course.",
    impact: "Equipment donated · 6-week curriculum · FLL launch",
  },
  {
    name: "PRAGNYA — Robotics for Neurodiverse",
    location: "Local + Virtual",
    color: "purple",
    description:
      "Partnered with PRAGNYA to develop a 32-week neurodiverse-friendly curriculum focused on simple machines. Integrated STEAM concepts and assisted PRAGNYA in launching a nonprofit to teach software engineering to neurodiverse kids. Inspired innovative marketing ideas like the golf machine and finger skateboards.",
    impact: "700+ hours invested · 32-week curriculum",
  },
  {
    name: "Girls in STEM + CAD Workshops",
    location: "Dublin, CA",
    color: "purple",
    description:
      "Held Girls in STEM workshops introducing participants to CAD and engineering design — featuring a guest speaker from Northrop Grumman. Created CAD workshops to help FLL students learn industry-grade tools like Onshape, culminating in a final project: a Christmas ornament.",
    impact: "Hands-on CAD · Industry speakers · Final-project format",
  },
];

const roboreachRegions = [
  {
    region: "Key Partnerships",
    flag: "🤝",
    description:
      "Collaborated with Nurtem (an ed-tech company) to host video lessons and blogs on their platform — reaching thousands of students across the world. Culture Bioscience donated 10 computers to power programs in India and Congo.",
  },
  {
    region: "West Africa",
    flag: "🌍",
    description:
      "Partnered with Okalabe School in the Republic of Congo to promote engineering education across Africa, with focus on Congo and Nigeria. Conducted virtual presentations at the U.S. Embassy in Congo to expand outreach. Planning progressively advanced kits to foster deeper learning.",
  },
  {
    region: "India",
    flag: "🇮🇳",
    description:
      "Reached over 120 kids across multiple states. Five large-scale circuitry kits — each part of a lesson plan — were sent to organizations to expand reach. Native-language curricula were developed to ensure greater accessibility and engagement for all learners.",
  },
];

const physicsKit = {
  title: "Physics in Motion Kit",
  description:
    "Our innovative kit introduces children ages 5+ to basic physics concepts in a fun, hands-on way by introducing Newton's First Law. Part of the curriculum for ASPIRE, PRAGNYA, and Roboreach International.",
  components: [
    {
      label: "Motor",
      detail: "Powers the kit for static speed, ensuring accurate display of Newton's laws.",
    },
    {
      label: "Train design",
      detail: "Made of 3D-printed material with an attachable train top.",
    },
    {
      label: "Barrel & cam mechanism",
      detail:
        "Designed to coil a set of springs — converts potential energy into kinetic energy to push upward momentum.",
    },
  ],
};

const communityProjects = [
  {
    icon: Leaf,
    name: "Project Greenspace",
    description:
      "Collaborated with multiple student clubs to fully automate Dublin High School's student-run greenhouse. Integrated cutting-edge technologies (humidity & temperature sensors, dissolved solids, Raspberry Pi, fan/irrigation controllers, internet connection) to create a self-sustaining environment that optimizes growth with minimal human intervention.",
    tags: ["Raspberry Pi", "Sensor fusion", "Automation"],
  },
  {
    icon: Glasses,
    name: "Wonder",
    description:
      "Designed glasses for the visually impaired community. Using our experience, we utilized computer vision and microcontrollers to develop these creations. We earned an NVIDIA mentorship from the work and continue to test and gather feedback with the visually impaired community.",
    tags: ["Computer vision", "Accessibility", "NVIDIA mentorship"],
  },
  {
    icon: Recycle,
    name: "AutoSort AI",
    description:
      "Tackles waste management issues in our community. Targets pollution at its source — using our CV skills to build an automated, simplistic design process. Won the real-world business award.",
    tags: ["Computer vision", "Environmental", "Award winner"],
  },
  {
    icon: Hammer,
    name: "MakerHacks II — with Hack Club",
    description:
      "Partnered with Hack Club, a nonprofit, to host a large hackathon-style event in the heart of San Francisco. Hosted a mini robotics competition for two days — the event offered over 150 competitors robotics experience and helped us grow as event coordinators.",
    tags: ["150+ competitors", "Hackathon", "SF event"],
  },
];

const corporateMentors = [
  {
    name: "Amitesh S. Jayaraman",
    role: "Postdoc, NanoEnergy Lab",
    company: "Stanford University",
    goal:
      "Increase autonomous capabilities with our robot — improved autonomous capabilities by working with micro-electromechanical systems, miniature robots specializing in coastal tasks. Used his expertise with smaller robots and lower processing power to reduce loop times and increase the robot's adaptivity and precision.",
  },
  {
    name: "Shane Raymond La Haye + Josef Prusa",
    role: "Senior Engineer · CEO",
    company: "Prusa Research",
    goal:
      "Ensure simple and rigid manufacturing — connected with Prusa Research at Open Sauce and worked with Shane to improve the rigidity of our printed robot parts. Through guidance on reinforcement, print orientation, strategic positioning, and selecting appropriate materials for structural components — we redesigned our transfer and hood assemblies to be lighter, stronger, and significantly more reliable in competition.",
  },
  {
    name: "Shashwat Chawla",
    role: "Manager, Machine Learning Team",
    company: "Walmart Labs",
    goal:
      "Enable shooting optimization and vision-based enhancements — worked with Walmart Labs to develop camera optimizations that allowed us to enhance our computer vision usage through detecting balls on the ramp, helping us realign our turret, and shooting in case of error in the middle of a match with AprilTags.",
  },
  {
    name: "Prabhakar Kommera",
    role: "Director",
    company: "Salesforce",
    goal:
      "Improve team management — worked with Salesforce to optimize team dynamics and project efficiency through their Project Management 101 course. Since then, our team has experienced a significant decrease in delivery times by refining our workflows and organizational strategy.",
  },
  {
    name: "Raghuraman Sethuraman + Srinidhi Nuggehalli",
    role: "VP, Engineering · Sr. Manager, IT",
    company: "Automation Anywhere",
    goal:
      "Implement sensor fault forward — through partnership with Automation Anywhere, we explored AI-driven process automation and applied it to analyze sensor data, enabling our robot to detect failed conditions in adaptive autonomous.",
  },
];

export default function OutreachPage() {
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
            Outreach // Vision & Strategy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Breaking barriers.
          <span className="block text-purple-400 glow-purple">
            Globally.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16"
        >
          RoboRacers is committed to providing the next generation of engineers
          with hands-on robotics experience in our community and beyond. We
          partner with nonprofits, schools, and individuals to extend quality
          robotics education to{" "}
          <span className="text-purple-300 font-medium">
            hundreds of students across the world
          </span>{" "}
          — committed to expanding FIRST, breaking all barriers in the process.
        </motion.p>

        {/* Strategy pillars */}
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
              Strategy // 4 Action Areas
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            How we make impact.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strategyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative p-6 rounded-lg bg-purple-600/90 border border-purple-400 overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-md bg-white/15 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-3 tracking-wider">
                    {pillar.label}
                  </h3>
                  <p className="text-purple-50/90 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Connecting with FIRST */}
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
              Connecting with FIRST
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            Lifting the FIRST community.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firstPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
                >
                  <div className="absolute top-4 right-4 font-mono text-[9px] px-2 py-1 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300 tracking-wider">
                    {program.role}
                  </div>

                  <div className="relative w-12 h-12 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon
                      size={20}
                      className="text-purple-300 group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="font-display text-xl text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-purple-100/70 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Educate — Partners */}
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
              Educate // Partnerships
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            Programs that change lives.
          </motion.h2>

          <div className="space-y-6">
            {educationPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative p-7 lg:p-9 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
                  <div className="lg:w-1/3">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">
                      {partner.location.toUpperCase()}
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">
                      {partner.name}
                    </h3>
                    <p className="font-mono text-[11px] text-purple-300/80">
                      {partner.impact}
                    </p>
                  </div>
                  <div className="lg:w-2/3 lg:pl-6 lg:border-l border-purple-900/50">
                    <p className="text-purple-100/70 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roboreach International */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <Globe size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Roboreach International
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Robotics, across borders.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-2xl mb-12"
          >
            Our international education program is dedicated to empowering
            marginalized communities across the world with quality robotics and
            engineering education.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roboreachRegions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative p-6 rounded-lg bg-purple-600/90 border border-purple-400 overflow-hidden"
              >
                <div className="text-3xl mb-3">{region.flag}</div>
                <h3 className="font-display text-xl text-white mb-3">
                  {region.region}
                </h3>
                <p className="text-purple-50/90 text-sm leading-relaxed">
                  {region.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Physics in Motion Kit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden border border-purple-900/50 mb-32"
        >
          <div className="absolute inset-0 carbon-fiber opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-black" />

          <div className="relative p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb size={18} className="text-purple-400" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
                Original Curriculum
              </span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              {physicsKit.title}
            </h3>
            <p className="text-purple-100/70 max-w-3xl leading-relaxed mb-8">
              {physicsKit.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {physicsKit.components.map((c) => (
                <div
                  key={c.label}
                  className="p-5 rounded-lg bg-black/50 backdrop-blur-sm border border-purple-900/50"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">
                    COMPONENT
                  </p>
                  <p className="font-display text-lg text-white mb-2">
                    {c.label}
                  </p>
                  <p className="text-purple-100/60 text-sm leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Community Projects */}
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
              Community Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12"
          >
            Engineering for impact.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
                >
                  <div className="relative w-12 h-12 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:border-purple-400 transition-all">
                    <Icon
                      size={20}
                      className="text-purple-300 group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="font-display text-2xl text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-purple-100/70 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Corporate Mentors */}
       {/* Corporate Collaborations */}
       <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <Briefcase size={16} className="text-purple-400" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
              Industry Collaborations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Tapped into the industry.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-purple-100/60 max-w-3xl mb-12"
          >
            We leveraged our proximity to the world&apos;s leading tech
            companies to build connections that pushed our robot &mdash; and our
            team &mdash; further. Engineers and leaders from across the industry
            shared their expertise with us on specific projects, helping us
            level up faster than we could have alone.
          </motion.p>

          <div className="space-y-4">
            {corporateMentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="relative p-6 lg:p-7 rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={14} className="text-purple-400" />
                      <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">
                        {mentor.company.toUpperCase()}
                      </span>
                    </div>
                    <p className="font-display text-lg text-white mb-1">
                      {mentor.name}
                    </p>
                    <p className="text-purple-200/60 text-sm">{mentor.role}</p>
                  </div>
                  <div className="lg:pl-6 lg:border-l border-purple-900/50">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">
                      WHAT WE WORKED ON
                    </p>
                    <p className="text-purple-100/70 text-sm leading-relaxed">
                      {mentor.goal}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing thank-you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 rounded-xl border border-purple-900/50 bg-purple-950/20 text-center"
          >
            <Heart size={24} className="text-purple-400 mx-auto mb-3" />
            <p className="text-lg text-purple-100/80 max-w-2xl mx-auto italic">
              &ldquo;Through our nonprofit, RISE Foundation, we aim to be a
              model ambassador for FIRST and help spark the next generation of
              teams&apos; journey of STEM.&rdquo;
            </p>
          </motion.div>
        </div>

          {/* Closing thank-you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 rounded-xl border border-purple-900/50 bg-purple-950/20 text-center"
          >
            <Heart size={24} className="text-purple-400 mx-auto mb-3" />
            <p className="text-lg text-purple-100/80 max-w-2xl mx-auto italic">
              &ldquo;Through our nonprofit, RISE Foundation, we aim to be a
              model ambassador for FIRST and help spark the next generation of
              teams&apos; journey of STEM.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    
  );
}