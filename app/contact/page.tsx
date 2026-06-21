"use client";

import { useState } from "react";
import { Mail, MapPin, Send, ChevronDown, Building2, Handshake, Users, Sparkles, Copy, Check, Loader2 } from "lucide-react";

const TEAM_EMAIL = "roboracers@risefnd.org";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzjpjvw";

const contactReasons = [
  {
    icon: Handshake,
    label: "Sponsorship",
    description: "Interested in supporting our team financially or with materials.",
  },
  {
    icon: Users,
    label: "Joining the team",
    description: "Student in the Bay Area interested in joining or mentoring.",
  },
  {
    icon: Building2,
    label: "Collaboration",
    description: "Company or organization wanting to partner on a project.",
  },
  {
    icon: Sparkles,
    label: "Just curious",
    description: "Questions about FTC, robotics, or our team in general.",
  },
];

const faqs = [
  {
    q: "How can my company sponsor RoboRacers?",
    a: "Email us with a brief intro and what kind of partnership you're looking for. We coordinate all sponsorships through RISE Foundation, which handles tax-deductible contributions, in-kind donations, and corporate matching.",
  },
  {
    q: "Can my student join the team?",
    a: "We're a Dublin, California-based community team open to high school students in the Bay Area. We typically recruit at the start of each season — reach out via email and we'll let you know when applications open.",
  },
  {
    q: "Do you mentor other FTC or FLL teams?",
    a: "Yes! Through our Quantum program we've mentored 7 FIRST teams this past season alone (4 FLL, 3 FTC). If you're starting a new team or need help with a specific subsystem or programming concept, email us.",
  },
  {
    q: "Can I attend one of your scrimmages or events?",
    a: "Absolutely — we host open scrimmages multiple times a season for other teams to practice. We also live-stream the East Bay League Tournament on YouTube. Email us for the next event schedule.",
  },
  {
    q: "Are your code repositories public?",
    a: "Some of them. We publish our open-source projects on GitHub for the FTC community to learn from. Reach out via email if you'd like to chat about our architecture.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("General inquiry");
  const [message, setMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(TEAM_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = TEAM_EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          reason,
          message,
          _subject: `[RoboRacers] ${reason} — ${name || "New message"}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setReason("General inquiry");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">
            Contact // Get in Touch
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Let&apos;s
          <span className="block text-purple-400 glow-purple">talk shop.</span>
        </h1>

        <p className="text-lg lg:text-xl text-purple-100/70 max-w-3xl leading-relaxed mb-16">
          Whether you want to sponsor, join, collaborate, or just say hi &mdash; we&apos;d love to hear from you. We typically reply within a few days.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
          <div className="lg:col-span-1 p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
            <div className="flex items-center gap-2 mb-4">
              <Mail size={16} className="text-purple-400" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">EMAIL US</span>
            </div>
            <p className="font-display text-base text-white break-all mb-3">{TEAM_EMAIL}</p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-purple-900/40 border border-purple-700/50 hover:bg-purple-600 hover:border-purple-400 text-purple-300 hover:text-white transition-all"
            >
              {emailCopied ? (<><Check size={12} />COPIED</>) : (<><Copy size={12} />COPY EMAIL</>)}
            </button>
          </div>

          <div className="lg:col-span-1 p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-purple-400" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">BASED IN</span>
            </div>
            <p className="font-display text-base text-white">Dublin, California</p>
            <p className="text-purple-100/60 text-sm mt-3 leading-relaxed">
              East Bay area. We compete primarily across Northern California.
            </p>
          </div>

          <div className="lg:col-span-1 p-7 rounded-lg bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/50">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-purple-400" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400">TEAM INFO</span>
            </div>
            <p className="font-display text-base text-white">FTC Team 16481</p>
            <p className="text-purple-100/60 text-sm mt-3 leading-relaxed">
              Community FTC team, founded 2019. Backed by RISE Foundation.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-display text-2xl text-white mb-6">What are you reaching out about?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {contactReasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.label} className="p-5 rounded-lg bg-purple-950/20 border border-purple-900/50 hover:border-purple-500/70 transition-colors">
                  <div className="w-10 h-10 rounded-md bg-purple-900/40 border border-purple-700/50 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-purple-300" />
                  </div>
                  <p className="font-display text-base text-white mb-1">{r.label}</p>
                  <p className="text-purple-100/60 text-xs leading-relaxed">{r.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">Send Us a Message</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">Drop us a line.</h2>

          <form onSubmit={handleSubmit} className="relative rounded-xl overflow-hidden border border-purple-900/50 bg-gradient-to-br from-purple-950/30 to-black p-7 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-purple-900/50 focus:border-purple-500 outline-none text-white placeholder:text-purple-300/30 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-purple-900/50 focus:border-purple-500 outline-none text-white placeholder:text-purple-300/30 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">REASON</label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-purple-900/50 focus:border-purple-500 outline-none text-white transition-colors"
              >
                <option>General inquiry</option>
                <option>Sponsorship</option>
                <option>Joining the team</option>
                <option>Collaboration</option>
                <option>Mentoring / Outreach</option>
                <option>Press / Media</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-mono text-[10px] tracking-[0.2em] text-purple-400 mb-2">MESSAGE</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a bit about why you're reaching out..."
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-purple-900/50 focus:border-purple-500 outline-none text-white placeholder:text-purple-300/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-medium rounded-md transition-all hover:shadow-xl hover:shadow-purple-500/50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="mt-5 p-4 rounded-md bg-green-500/10 border border-green-500/40">
                <p className="text-green-300 text-sm flex items-center gap-2">
                  <Check size={16} />
                  Message sent! We&apos;ll get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-5 p-4 rounded-md bg-red-500/10 border border-red-500/40">
                <p className="text-red-300 text-sm">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href={`mailto:${TEAM_EMAIL}`} className="underline">{TEAM_EMAIL}</a>.
                </p>
              </div>
            )}
          </form>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-purple-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-purple-400 uppercase">FAQ</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">Frequently asked.</h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="rounded-lg border border-purple-900/50 bg-purple-950/20 overflow-hidden hover:border-purple-500/70 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                  >
                    <span className="font-display text-base lg:text-lg text-white">{faq.q}</span>
                    <ChevronDown size={18} className={`text-purple-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                      <p className="text-purple-100/70 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}