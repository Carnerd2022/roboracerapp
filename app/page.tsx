import { HomeBackground } from "@/components/home-background";
import { Hero3D } from "@/components/hero-3d";
import { WhatIsFTC } from "@/components/what-is-ftc";
import { RobotHighlight } from "@/components/robot-highlight";
import { StatsDashboard } from "@/components/stats-dashboard";
import { SponsorsCarousel } from "@/components/sponsors-carousel";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <Hero3D />
      <WhatIsFTC />
      <RobotHighlight />
      <StatsDashboard />
      <SponsorsCarousel />
      <CTASection />
    </>
  );
}