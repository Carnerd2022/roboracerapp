"use client";

import dynamic from "next/dynamic";

// WebGL must never be server-rendered — load the scene client-side only.
const F1Assembly = dynamic(() => import("@/components/f1-assembly"), {
  ssr: false,
  loading: () => null,
});

/**
 * Scroll-driven F1 build: the car's parts start laid out on the bench and
 * assemble into a finished car as you scroll the home page. Fixed to the
 * viewport so it stays behind every section.
 */
export function F1BuildBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#07050d]">
      <F1Assembly />
      <div className="absolute inset-0 pointer-events-none bg-black/25" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,5,13,0.75))]" />
    </div>
  );
}
