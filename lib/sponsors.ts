// Single source of truth for sponsors — used by both the home-page carousel
// and the sponsors-page grid so they never drift apart.
// `url` links the logo tile to the sponsor's site (null = no known link yet).
export type Sponsor = {
  name: string;
  logo: string;
  url: string | null;
};

export const sponsors: Sponsor[] = [
  { name: "Citrix", logo: "/sponsors/citrix-v2.png", url: "https://www.citrix.com" },
  { name: "Salesforce", logo: "/sponsors/salesforce-v2.png", url: "https://www.salesforce.com" },
  { name: "Eclat Prime", logo: "/sponsors/eclat-prime-v2.png", url: "https://eclatprime.com" },
  { name: "RISE Foundation", logo: "/sponsors/rise-foundation.png", url: "https://www.risefnd.org" },
  { name: "Visa", logo: "/sponsors/visa-v2.png", url: "https://www.visa.com" },
  { name: "Altair", logo: "/sponsors/altair-v2.png", url: "https://www.altair.com" },
  { name: "Costco", logo: "/sponsors/costco-v2.png", url: "https://www.costco.com" },
  { name: "PG&E", logo: "/sponsors/pge.png", url: "https://www.pge.com" },
  { name: "Quantum Robotics", logo: "/sponsors/quantum-robotics.png", url: null },
  { name: "NVIDIA", logo: "/sponsors/nvidia-v2.png", url: "https://www.nvidia.com" },
  { name: "Prusa Research", logo: "/sponsors/prusa-research-v2.png", url: "https://www.prusa3d.com" },
  { name: "Automation Anywhere", logo: "/sponsors/automation-anywhere-v2.png", url: "https://www.automationanywhere.com" },
  { name: "GoBilda", logo: "/sponsors/gobilda.png", url: "https://www.gobilda.com" },
  { name: "Walmart Labs", logo: "/sponsors/walmart-labs.png", url: "https://www.walmart.com" },
  { name: "KLA", logo: "/sponsors/kla-v2.png", url: "https://www.kla.com" },
  { name: "Polymaker", logo: "/sponsors/polymaker-v2.png", url: "https://www.polymaker.com" },
];
