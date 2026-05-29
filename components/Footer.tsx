"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Mail, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const QUICK_LINKS = [
  { label: "INTRO", id: "intro" },
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "SKILLS", id: "skills" },
  { label: "JOURNEY", id: "journey" },
  { label: "CONTACT", id: "contact" },
] as const;

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-16 md:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Image
            src={!mounted || theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="Sam Dhanalakota"
            width={48}
            height={48}
            priority
          />
          <p className="text-[14px] text-[var(--text-muted)]">
            Building enterprise platforms that scale.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="[font-family:var(--font-display)] text-[13px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  // TODO: wire up when section is built
                  scrollToSection(link.id);
                }}
                className="w-fit text-left text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="[font-family:var(--font-display)] text-[13px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
            Contact
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:samdsiva1994@gmail.com"
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <Mail size={16} />
              <span>samdsiva1994@gmail.com</span>
            </a>
            {/* TODO: replace placeholder href */}
            <a
              href="#"
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            {/* TODO: replace placeholder href */}
            <a
              href="#"
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            {/* TODO: replace placeholder href */}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <MessageSquare size={16} />
              <span>Leave a Message</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[var(--border)] pt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--text-muted)]">
            © 2026 Sam Dhanalakota. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("intro")}
            className="text-[13px] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
