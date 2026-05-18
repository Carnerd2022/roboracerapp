import Link from "next/link";
import { Camera, Play, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-purple-900/50 bg-black">
      <div className="absolute top-0 left-0 right-0 h-[2px] racing-stripe opacity-60" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-800 rounded-md flex items-center justify-center font-mono font-bold">
                RR
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wider">
                  {siteConfig.teamName.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-purple-400 tracking-[0.2em] mt-1">
                  FTC TEAM {siteConfig.teamNumber}
                </span>
              </div>
            </div>
            <p className="text-purple-200/70 text-sm max-w-md italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md border border-purple-900/50 hover:border-purple-500 hover:bg-purple-900/30 transition-all" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md border border-purple-900/50 hover:border-purple-500 hover:bg-purple-900/30 transition-all" aria-label="YouTube">
                <Play size={18} />
              </a>
              <a href={`mailto:${siteConfig.social.email}`} className="w-10 h-10 flex items-center justify-center rounded-md border border-purple-900/50 hover:border-purple-500 hover:bg-purple-900/30 transition-all" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-purple-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400 mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-purple-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-900/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="font-mono">
            &copy; {currentYear} {siteConfig.teamName} &middot; FTC Team {siteConfig.teamNumber}
          </p>
          <p className="font-mono">
            BUILT WITH <span className="text-purple-400">&hearts;</span> BY THE TEAM
          </p>
        </div>
      </div>
    </footer>
  );
}