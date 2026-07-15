"use client";

import dynamic from "next/dynamic";

// WebGL must never be server-rendered — load the scene client-side only.
const RaceScene = dynamic(() => import("@/components/race-scene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Persistent 3D racetrack that lives behind the ENTIRE home page.
 * Fixed to the viewport so it stays visible as you scroll every section;
 * a light scrim keeps the foreground copy readable.
 */
export function HomeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#05030a]">
      <RaceScene />
      <div className="absolute inset-0 pointer-events-none bg-black/35" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,3,10,0.7))]" />
    </div>
  );
}
