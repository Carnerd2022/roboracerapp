"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-purple-900/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Team Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-purple-800 rounded-md flex items-center justify-center font-mono font-bold text-sm group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
              RR
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wider">
              {siteConfig.teamName.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] text-purple-400 tracking-[0.2em]">
              TEAM {siteConfig.teamNumber}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-900/30 rounded-md transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <Link
          href="/sponsors"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-md transition-all hover:shadow-lg hover:shadow-purple-500/50"
        >
          Sponsor us →
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-purple-900/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-900/30 rounded-md transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/sponsors"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-md text-center"
              >
                Sponsor us →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}