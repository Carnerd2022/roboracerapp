import { Hero } from "@/components/hero";
import { WhatIsFTC } from "@/components/what-is-ftc";
import { RobotHighlight } from "@/components/robot-highlight";
import { StatsDashboard } from "@/components/stats-dashboard";
import { SponsorsCarousel } from "@/components/sponsors-carousel";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsFTC />
      <RobotHighlight />
      <StatsDashboard />
      <SponsorsCarousel />
      <CTASection />
    </>
  );
}