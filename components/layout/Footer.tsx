"use client";

import Image from "next/image";
import { Mail, MessageSquare } from "lucide-react";
import { useTheme } from "next-themes";

import { useTranslation } from "@/hooks/useTranslation";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants/navigation";
import { scrollToSection } from "@/lib/utils/scroll";

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

/**
 * Site footer with quick links, contact links and back-to-top action.
 *
 * @remarks
 * Client component — uses theme-aware logo switching and scroll actions.
 */
export default function Footer() {
  const { theme } = useTheme();
  const { t } = useTranslation("footer");
  const isDark = theme !== "light";

  return (
    <footer className="border-t border-[var(--custom-border)] bg-[var(--bg-secondary)] px-6 py-16 md:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Image
            src={isDark ? "/logo-dark.png" : "/logo-light.png"}
            alt="Sam Dhanalakota"
            width={48}
            height={48}
            className="h-auto w-auto"
            priority
          />
          <p className="text-[14px] text-[var(--text-muted)]">{t("tagline")}</p>
        </div>

        <div className="space-y-4">
          <h3 className="[font-family:var(--font-display)] text-[13px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
            {t("quick_links_heading")}
          </h3>
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((link) => (
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
            {t("contact_heading")}
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href={SOCIAL_LINKS.email}
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <Mail size={16} />
              <span>{t("email_label")}</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <LinkedInIcon />
              <span>{t("linkedin_label")}</span>
            </a>
            <a
              href={SOCIAL_LINKS.github}
              className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <GitHubIcon />
              <span>{t("github_label")}</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 text-left text-[14px] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              <MessageSquare size={16} />
              <span>{t("message_label")}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[var(--custom-border)] pt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--text-muted)]">{t("copyright")}</p>
          <button
            type="button"
            onClick={() => scrollToSection("intro")}
            className="text-[13px] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
          >
            {t("back_to_top")} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
