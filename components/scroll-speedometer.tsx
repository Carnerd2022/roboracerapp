"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export function ScrollSpeedometer() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });

  // Derived MotionValues
  const needleRotation = useTransform(smoothProgress, [0, 1], [-120, 120]);
  const speedValue = useTransform(smoothProgress, [0, 1], [0, 300]);
  const rpmPercent = useTransform(smoothProgress, [0, 1], [0, 100]);
  const gearValue = useTransform(smoothProgress, (v) => {
    if (v < 0.05) return "P";
    if (v < 0.15) return "N";
    if (v < 0.32) return "1";
    if (v < 0.5) return "2";
    if (v < 0.68) return "3";
    if (v < 0.85) return "4";
    return "5";
  });

  // Subscribe to MotionValues so React re-renders when they change
  const speedText = useMotionValueText(speedValue, (v) =>
    Math.round(v).toString()
  );
  const gearText = useMotionValueText(gearValue, (v) => v);
  const needleDeg = useMotionNumber(needleRotation);
  const rpmPct = useMotionNumber(rpmPercent);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-40 hidden md:block pointer-events-none"
    >
      <div className="relative w-[170px] bg-black/70 backdrop-blur-md border border-purple-500/40 rounded-xl p-3 shadow-2xl shadow-purple-500/20">
        {/* Top label */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
            <span className="font-mono text-[8px] tracking-[0.2em] text-purple-400">
              TELEMETRY
            </span>
          </div>
          <span className="font-mono text-[8px] text-purple-300/60">LIVE</span>
        </div>

        {/* Speedometer dial */}
        <div className="relative w-[140px] h-[80px] mx-auto">
          {/* Static SVG: arc + ticks */}
          <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full">
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="rgba(168, 85, 247, 0.15)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {[...Array(11)].map((_, i) => {
              const angle = -180 + (i * 180) / 10;
              const isMajor = i % 2 === 0;
              const r1 = isMajor ? 68 : 73;
              const r2 = 78;
              const rad = (angle * Math.PI) / 180;
              const x1 = 100 + r1 * Math.cos(rad);
              const y1 = 100 + r1 * Math.sin(rad);
              const x2 = 100 + r2 * Math.cos(rad);
              const y2 = 100 + r2 * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isMajor ? "#A855F7" : "rgba(168, 85, 247, 0.4)"}
                  strokeWidth={isMajor ? "1.5" : "1"}
                />
              );
            })}
            <path
              d="M 156 36 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#EF4444"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>

          {/* Needle — uses plain JS number, applied via inline transform */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "13%",
              width: "2px",
              height: "45px",
              background: "#C4A8F0",
              borderRadius: "1px",
              transformOrigin: "50% 100%",
              transform: `translateX(-50%) rotate(${needleDeg}deg)`,
            }}
          />

          {/* Needle center hub */}
          <div
            className="absolute rounded-full bg-purple-600 border-2 border-black"
            style={{
              left: "50%",
              bottom: "13%",
              width: "12px",
              height: "12px",
              transform: "translate(-50%, 50%)",
            }}
          />
        </div>

        {/* Speed + gear */}
        <div className="flex items-end justify-between mt-2 px-1">
          <div>
            <div className="font-display text-2xl text-white leading-none tabular-nums">
              {speedText}
            </div>
            <div className="font-mono text-[8px] text-purple-400 tracking-wider mt-0.5">
              MPH
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="font-mono text-[8px] tracking-[0.2em] text-purple-400 mb-0.5">
              GEAR
            </div>
            <div className="w-9 h-9 bg-purple-600 rounded-md flex items-center justify-center border border-purple-400 shadow-lg shadow-purple-500/50">
              <span className="font-display text-lg font-bold text-white">
                {gearText}
              </span>
            </div>
          </div>
        </div>

        {/* RPM bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[7px] tracking-[0.2em] text-purple-400">
              RPM
            </span>
            <span className="font-mono text-[7px] text-purple-400/60">
              x1000
            </span>
          </div>
          <div className="h-1.5 bg-purple-950/70 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-red-500"
              style={{ width: `${rpmPct}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Subscribe to a MotionValue<T> as a string
function useMotionValueText<T>(
  value: MotionValue<T>,
  format: (v: T) => string
): string {
  const [text, setText] = useState(() => format(value.get()));
  useEffect(() => {
    const unsubscribe = value.on("change", (latest) => setText(format(latest)));
    return unsubscribe;
  }, [value, format]);
  return text;
}

// Subscribe to a MotionValue<number> as a number
function useMotionNumber(value: MotionValue<number>): number {
  const [num, setNum] = useState(() => value.get());
  useEffect(() => {
    const unsubscribe = value.on("change", (latest) => setNum(latest));
    return unsubscribe;
  }, [value]);
  return num;
}