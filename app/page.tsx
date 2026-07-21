import { F1BuildBackground } from "@/components/f1-build-background";
import { Hero } from "@/components/hero";
import { WhatIsFTC } from "@/components/what-is-ftc";
import { RobotHighlight } from "@/components/robot-highlight";
import { StatsDashboard } from "@/components/stats-dashboard";
import { SponsorsCarousel } from "@/components/sponsors-carousel";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <F1BuildBackground />
      <Hero />
      <WhatIsFTC />
      <RobotHighlight />
      <StatsDashboard />
      <SponsorsCarousel />
      <CTASection />
      {/* Reveal zone: transparent breathing room so the finished F1 build is
          fully visible between the CTAs and the footer. */}
      <div className="h-[85vh] w-full" aria-hidden="true" />
    </>
  );
}