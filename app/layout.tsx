import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/lib/site-config";

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

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RoboRacers — FIRST Tech Challenge Team 16481",
    template: "%s | RoboRacers FTC 16481",
  },
  description:
    "RoboRacers (Robo Racers) is FIRST Tech Challenge Team 16481, a community FTC robotics team from Dublin, California. We design, build, and program competition robots and run STEM outreach across the Bay Area.",
  applicationName: "RoboRacers",
  keywords: [
    "RoboRacers",
    "Robo Racers",
    "RoboRacers 16481",
    "FTC Team 16481",
    "FTC 16481",
    "FIRST Tech Challenge",
    "FTC robotics",
    "Dublin CA robotics team",
    "Bay Area FTC",
    "STEM",
    "robotics team",
  ],
  authors: [{ name: "RoboRacers FTC Team 16481", url: siteConfig.url }],
  creator: "RoboRacers FTC Team 16481",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "RoboRacers — FTC Team 16481",
    title: "RoboRacers — FIRST Tech Challenge Team 16481",
    description:
      "Robo Racers, FTC Team 16481 from Dublin, CA — building competition robots and inspiring the next generation of engineers.",
    images: [
      {
        url: "/team/team-pic.png",
        width: 1952,
        height: 1458,
        alt: "RoboRacers FTC Team 16481",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboRacers — FIRST Tech Challenge Team 16481",
    description:
      "Robo Racers, FTC Team 16481 from Dublin, CA — building competition robots and inspiring the next generation of engineers.",
    images: ["/team/team-pic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Structured data so Google understands who "RoboRacers" is (name, team number,
// location, and official social profiles) — key for showing up on a name search.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "RoboRacers",
  alternateName: ["Robo Racers", "FTC Team 16481", "RoboRacers 16481"],
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/logo.png`,
  description:
    "FIRST Tech Challenge Team 16481 — a community robotics team from Dublin, California.",
  sport: "Robotics (FIRST Tech Challenge)",
  memberOf: {
    "@type": "Organization",
    name: "FIRST Tech Challenge",
    url: "https://www.firstinspires.org/robotics/ftc",
  },
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${chakraPetch.variable} dark`}
    >
      <body className="min-h-screen bg-black text-white antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollProgress />
      </body>
    </html>
  );
}