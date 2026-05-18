import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollSpeedometer } from "@/components/scroll-speedometer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoboRacers | FTC Team 16481",
  description:
    "FIRST Tech Challenge Team 16481 — engineering innovation, programming excellence, and community impact. It's about the race, not the finish line.",
  keywords: [
    "FTC",
    "FIRST Tech Challenge",
    "Robotics",
    "Team 16481",
    "RoboRacers",
    "STEM",
  ],
  openGraph: {
    title: "RoboRacers | FTC Team 16481",
    description: "It's about the race, not the finish line.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} dark`}
    >
      <body className="min-h-screen bg-black text-white antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollSpeedometer />
      </body>
    </html>
  );
}