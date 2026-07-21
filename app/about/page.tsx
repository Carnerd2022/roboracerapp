"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import {
  MapPin,
  Users,
  Calendar,
  Wrench,
  Shield,
  Lightbulb,
  Code2,
  User,
  LucideIcon,
  Cog,
  Settings2,
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
  { name: "Kamal", image: "/team/Kamal-v2.png", role: "Mechanical" },
  { name: "Zain", image: "/team/Zain-v2.png", role: "Software" },
  { name: "Anay", image: "/team/Anay-v2.png", role: "Mechanical" },
  { name: "Surya", image: "/team/Surya-v2.png", role: "Mechanical" },
  { name: "Siva", image: "/team/Siva-v2.png", role: "Mechanical" },
  { name: "Mithilessh", image: "/team/Mithilessh-v2.png", role: "Software" },
  { name: "Sashank", image: "/team/Sashank-v2.png", role: "Mechanical" },
  { name: "Shreesh", image: "/team/Shreesh-v2.png", role: "Software" },
  { name: "Ishaan", image: "/team/Ishaan-v2.png", role: "Software" },
  { name: "Vivaan", image: "/team/Vivaan-v2.png", role: "Software" },
  { name: "Aryan", image: null, role: "Mechanical" },
  { name: "Arhan", image: null, role: "Software" },
  { name: "Soorya", image: null, role: "Software" },
  { name: "Prasham", image: null, role: "Software" },
];

const mechanicalMembers = teamMembers.filter((m) => m.role === "Mechanical");
const softwareMembers = teamMembers.filter((m) => m.role === "Software");

const mentors = [
  { name: "Arya", image: "/team/Arya-v2.png" },
  { name: "Vikram", image: "/team/Vikram-v2.png" },
];

const coaches = [
  { name: "Coach Ramana", image: "/team/coach-ramana-v2.png" },
  { name: "Coach Sundar", image: "/team/coach-sundar-v2.png" },
];

// Pit-lane rail: sections a visitor can jump between while reading
const railSections = [
  { id: "mission", label: "Mission" },
  { id: "mechanical", label: "Mechanical" },
  { id: "software", label: "Software" },
  { id: "mentors", label: "Mentors" },
  { id: "coaches", label: "Coaches" },
  { id: "story", label: "Story" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Deterministic PRNG (seeded) so particle layout matches between server and client render
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type ParticleLayerConfig = {
  count: number;
  minSize: number;
  maxSize: number;
  opacity: number;
  travel: number;
  glow: boolean;
};

// Far layer drifts least (feels distant), near layer drifts most (feels close) — classic depth parallax.
// travel = px the layer moves across the fixed viewport over the whole page scroll.
const PARTICLE_LAYERS: ParticleLayerConfig[] = [
  { count: 26, minSize: 1.5, maxSize: 2.5, opacity: 0.35, travel: 80, glow: false },
  { count: 18, minSize: 2.5, maxSize: 4, opacity: 0.55, travel: 220, glow: false },
  { count: 12, minSize: 4, maxSize: 7, opacity: 0.9, travel: 460, glow: true },
];

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  opacity: number;
  travel: number;
  glow: boolean;
  delay: number;
};

function buildParticles(): Particle[] {
  const random = mulberry32(16481);
  return PARTICLE_LAYERS.flatMap((layer, layerIndex) =>
    Array.from({ length: layer.count }, (_, i) => ({
      id: `${layerIndex}-${i}`,
      top: random() * 100,
      left: random() * 100,
      size: layer.minSize + random() * (layer.maxSize - layer.minSize),
      opacity: layer.opacity * (0.6 + random() * 0.4),
      travel: layer.travel,
      glow: layer.glow,
      delay: random() * 4,
    }))
  );
}

const particles = buildParticles();

function Spark({ particle, progress }: { particle: Particle; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -particle.travel]);
  return (
    <motion.div
      style={{
        top: `${particle.top}%`,
        left: `${particle.left}%`,
        width: particle.size,
        height: particle.size,
        opacity: particle.opacity,
        y,
        boxShadow: particle.glow
          ? `0 0 ${particle.size * 4}px rgba(192,132,252,0.95)`
          : undefined,
      }}
      animate={{ opacity: [particle.opacity * 0.45, particle.opacity, particle.opacity * 0.45] }}
      transition={{
        duration: 3 + particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: particle.delay,
      }}
      className="absolute rounded-full bg-purple-300"
    />
  );
}

// Drifting spark field — layered particles parallax past at different speeds as you scroll,
// giving the page a sense of forward motion (twist on a starfield, themed as machine sparks)
function ParticleField({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <Spark key={particle.id} particle={particle} progress={progress} />
      ))}
    </div>
  );
}

// Counter-rotating gears + a slow-drifting glow, driven by overall scroll progress.
// This is the "engine" that visibly turns behind the whole page as you scroll.
function ScrollGears({ progress }: { progress: MotionValue<number> }) {
  const rotateForward = useTransform(progress, [0, 1], [0, 300]);
  const rotateBackward = useTransform(progress, [0, 1], [0, -420]);
  const rotateSlow = useTransform(progress, [0, 1], [0, 180]);
  const glowY = useTransform(progress, [0, 1], ["0%", "60%"]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Big drifting purple glow that follows scroll — keeps the background alive, never flat black */}
      <motion.div
        style={{ top: glowY }}
        className="absolute right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.18),transparent_65%)] blur-2xl"
      />
      <motion.div
        style={{ rotate: rotateForward }}
        className="absolute -top-[10vw] -right-[12vw] text-purple-500/25"
      >
        <Cog size={640} strokeWidth={0.4} className="w-[46vw] h-[46vw]" />
      </motion.div>
      <motion.div
        style={{ rotate: rotateBackward }}
        className="absolute top-[52%] -left-[14vw] text-purple-400/20"
      >
        <Settings2 size={440} strokeWidth={0.5} className="w-[34vw] h-[34vw]" />
      </motion.div>
      <motion.div
        style={{ rotate: rotateSlow }}
        className="absolute top-[18%] left-[38%] text-purple-500/[0.12]"
      >
        <Cog size={280} strokeWidth={0.5} className="w-[22vw] h-[22vw]" />
      </motion.div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="h-px w-12 bg-purple-500" />
      <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
        {children}
      </span>
    </motion.div>
  );
}

type Person = { name: string; image: string | null; role?: string };

// Visual treatment per discipline — cyan for mechanical, purple for software
const roleStyles: Record<string, { icon: LucideIcon; className: string }> = {
  Mechanical: {
    icon: Wrench,
    className: "border-cyan-400/30 bg-cyan-500/10 text-cyan-300",
  },
  Software: {
    icon: Code2,
    className: "border-purple-400/30 bg-purple-500/10 text-purple-300",
  },
};

function PersonCard({
  member,
  index,
  fixedWidth = false,
}: {
  member: Person;
  index: number;
  fixedWidth?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.04 * index }}
      className={`group relative rounded-lg bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 hover:border-purple-500 transition-all overflow-hidden ${
        fixedWidth ? "w-full" : ""
      }`}
    >
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-purple-700 to-purple-950 border-b border-purple-700/50 flex items-center justify-center overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top"
          />
        ) : (
          <>
            <div className="absolute inset-0 carbon-fiber opacity-15" />
            <div className="relative w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm border-2 border-purple-300/50 flex items-center justify-center group-hover:border-purple-200 transition-colors">
              <User size={36} className="text-purple-100" />
            </div>
          </>
        )}

        <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-purple-400/40">
          <span className="font-mono text-[10px] text-purple-200 tracking-wider">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-300/60 z-10" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-300/60 z-10" />
      </div>

      <div className="p-5 flex flex-col items-center gap-2">
        <p className="font-display text-base text-white text-center">{member.name}</p>
        {member.role && roleStyles[member.role] && (
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[9px] tracking-[0.15em] uppercase ${roleStyles[member.role].className}`}
          >
            {(() => {
              const RoleIcon = roleStyles[member.role].icon;
              return <RoleIcon size={11} />;
            })()}
            {member.role}
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700" />
    </motion.div>
  );
}

function RosterGroup({
  id,
  eyebrow,
  heading,
  intro,
  members,
  gridClass,
}: {
  id: string;
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
  members: Person[];
  gridClass: string;
}) {
  return (
    <div id={id} className="mb-32 scroll-mt-28">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-purple-100/60 max-w-2xl mb-8"
      >
        {intro}
      </motion.p>

      {/* Sticky wayfinding chip — stays pinned near the top while this group's grid scrolls beneath it */}
      <div className="sticky top-20 z-20 mb-6 flex justify-start">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-purple-800/50 shadow-lg shadow-black/40">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-purple-300 uppercase">
            {eyebrow} &middot; {members.length}
          </span>
        </div>
      </div>

      <div className={gridClass}>
        {members.map((member, index) => (
          <PersonCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

function MissionCard({
  goal,
  index,
  variant,
}: {
  goal: { icon: LucideIcon; title: string; description: string };
  index: number;
  variant: "grid" | "track";
}) {
  const Icon = goal.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: variant === "grid" ? 0.15 * index : 0 }}
      className={`group relative p-8 rounded-lg bg-gradient-to-br from-purple-900/50 via-purple-950/60 to-[#0c0616]/90 backdrop-blur-md border border-purple-700/40 hover:border-purple-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 ${
        variant === "track"
          ? "w-[78vw] sm:w-[64vw] lg:w-[46vw] xl:w-[38vw] shrink-0 h-[54vh] flex flex-col justify-center shadow-2xl shadow-black/60"
          : ""
      }`}
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
}

function MissionTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [panDistance, setPanDistance] = useState(0);

  useEffect(() => {
    function measure() {
      if (!rowRef.current) return;
      const rowWidth = rowRef.current.scrollWidth;
      const viewport = window.innerWidth;
      setPanDistance(Math.max(rowWidth - viewport + 96, 0));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -panDistance]);
  const stripeWidth = useTransform(scrollYProgress, [0, 1], ["8%", "88%"]);

  return (
    <div ref={trackRef} className="relative hidden lg:block" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <motion.div
          ref={rowRef}
          style={{ x }}
          className="flex gap-8 pl-[6vw] pr-[16vw] w-max items-stretch"
        >
          {missionGoals.map((goal, index) => (
            <MissionCard key={goal.title} goal={goal} index={index} variant="track" />
          ))}
        </motion.div>
        {/* Progress rail — fills as the cards pan, so you can feel how far through the lap you are */}
        <div className="mt-10 ml-[6vw] w-[60vw] h-[3px] rounded-full bg-purple-950/60 overflow-hidden">
          <motion.div style={{ width: stripeWidth }} className="h-full racing-stripe" />
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: pageProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const gridDrift = useTransform(pageProgress, [0, 1], [0, -120]);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0.25]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.94]);
  const heroY = useTransform(heroProgress, [0, 1], [0, -30]);


  const missionActive = useSectionActive("mission");
  const mechanicalActive = useSectionActive("mechanical");
  const softwareActive = useSectionActive("software");
  const mentorsActive = useSectionActive("mentors");
  const coachesActive = useSectionActive("coaches");
  const storyActive = useSectionActive("story");

  const activeId = storyActive
    ? "story"
    : coachesActive
    ? "coaches"
    : mentorsActive
    ? "mentors"
    : softwareActive
    ? "software"
    : mechanicalActive
    ? "mechanical"
    : missionActive
    ? "mission"
    : null;

  return (
    <div ref={pageRef} className="relative min-h-screen pt-32 pb-24">
      {/* Immersive background — fixed to the viewport so it's ALWAYS visible behind content
          (gears revolve, sparks drift, glow follows scroll). This is what makes the page feel
          alive instead of flat black as you scroll. */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#08040f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(109,40,217,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_110%,rgba(76,29,149,0.28),transparent_50%)]" />
        <motion.div
          style={{ y: gridDrift }}
          className="absolute inset-0 grid-bg opacity-[0.22]"
        />
        <ScrollGears progress={pageProgress} />
        <ParticleField progress={pageProgress} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(0,0,0,0.55))]" />
      </div>

      {/* Pit-lane rail — jump between sections, fills as you scroll */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="relative flex flex-col gap-8 py-2 pl-4">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-900/40 rounded-full" />
          <motion.div
            style={{ scaleY: pageProgress }}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-400 rounded-full origin-top"
          />
          {railSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center gap-3 -ml-4 pl-4"
                aria-label={`Jump to ${section.label}`}
              >
                <span
                  className={`relative z-10 w-2.5 h-2.5 rounded-full border transition-all ${
                    isActive
                      ? "bg-purple-400 border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.8)] scale-110"
                      : "bg-black border-purple-800 group-hover:border-purple-500"
                  }`}
                />
                <span
                  className={`font-mono text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "text-purple-300 opacity-100 translate-x-0"
                      : "text-purple-400/50 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={heroRef} className="relative">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
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
          </motion.div>
        </div>

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

        {/* Mission — pinned horizontal track on desktop, stacked grid on mobile */}
        <div id="mission" className="mb-32 scroll-mt-28">
          <SectionEyebrow>Our Mission</SectionEyebrow>

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
            We are driven by three overarching goals that guide everything we build, code, and teach. Scroll to take the whole lap.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:hidden">
            {missionGoals.map((goal, index) => (
              <MissionCard key={goal.title} goal={goal} index={index} variant="grid" />
            ))}
          </div>
        </div>

        {/* The pinned track sits outside the max-w container so it can bleed to the edge */}
      </div>

      <MissionTrack />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <RosterGroup
          id="mechanical"
          eyebrow={`Mechanical // ${mechanicalMembers.length} Builders`}
          heading="The build crew."
          intro="The hands turning raw aluminum and 3D prints into a robot that moves."
          members={mechanicalMembers}
          gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        />

        <RosterGroup
          id="software"
          eyebrow={`Software // ${softwareMembers.length} Coders`}
          heading="The code crew."
          intro="The minds writing the autonomous routines and driver control in Java."
          members={softwareMembers}
          gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        />

        <RosterGroup
          id="mentors"
          eyebrow="Mentorship // 2 Mentors"
          heading="Guided by experience."
          intro="Industry mentors who help us push past what we thought we could build."
          members={mentors}
          gridClass="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        />

        <RosterGroup
          id="coaches"
          eyebrow="Coaching Staff // 2 Coaches"
          heading="Behind the wheel."
          intro="The coaches steering strategy, mentorship, and everything in between."
          members={coaches}
          gridClass="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        />

        {/* Story */}
        <div id="story" ref={storyRef} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-28">
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
            className="relative aspect-[1952/1458] rounded-lg overflow-hidden border border-purple-900/50 bg-black"
          >
            <Image
              src="/team/team-pic.png"
              alt="RoboRacers 16481 team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
            {/* subtle purple tint + bottom fade to keep it on-brand */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_75%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

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

function useSectionActive(id: string) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(id);
  }, [id]);

  return useInView(ref as React.RefObject<HTMLElement>, {
    margin: "-45% 0px -45% 0px",
  });
}
