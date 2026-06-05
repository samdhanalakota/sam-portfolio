"use client";

import Image from "next/image";
import { Mail, MessageSquare, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";

import { useTranslation } from "@/hooks/useTranslation";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants/navigation";
import { scrollToSection, scrollToTop } from "@/lib/utils/scroll";
import styles from "./Footer.module.css";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
  const tagline = t("tagline") as string;
  const openToWork = t("open_to_work") as string;
  const quickLinksHeading = t("quick_links_heading") as string;
  const contactHeading = t("contact_heading") as string;
  const emailLabel = t("email_label") as string;
  const linkedInLabel = t("linkedin_label") as string;
  const githubLabel = t("github_label") as string;
  const messageLabel = t("message_label") as string;
  const copyrightPrefix = t("copyright_prefix") as string;
  const copyrightName = t("copyright_name") as string;
  const backToTop = t("back_to_top") as string;

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* BRAND */}
        <div className={styles.brand}>
          <button
            type="button"
            onClick={scrollToTop}
            className={styles.logoBtn}
            aria-label={t("back_to_top") as string}
          >
            <Image
              src={isDark ? "/logo-dark.png" : "/logo-light.png"}
              alt="Sam Dhanalakota"
              width={60}
              height={60}
            />
          </button>
          <p className={styles.tagline}>{tagline}</p>
          <span className={styles.openToWork}>
            <span className={styles.openToWorkDot} />
            {openToWork}
          </span>
        </div>

        {/* QUICK LINKS */}
        <div>
          <div className={styles.columnHeading}>
            <span className={styles.columnAccent} />
            {quickLinksHeading}
          </div>
          <div className={styles.linksList}>
            {NAV_ITEMS.slice(1).map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={styles.navLink}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <div className={styles.columnHeading}>
            <span className={styles.columnAccent} />
            {contactHeading}
          </div>
          <div className={styles.contactList}>
            <a href={SOCIAL_LINKS.email} className={styles.contactLink}>
              <span className={styles.contactIconBox}>
                <Mail size={14} />
              </span>
              {emailLabel}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIconBox}>
                <LinkedInIcon />
              </span>
              {linkedInLabel}
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIconBox}>
                <GitHubIcon />
              </span>
              {githubLabel}
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={styles.contactLink}
            >
              <span className={styles.contactIconBox}>
                <MessageSquare size={14} />
              </span>
              {messageLabel}
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          {copyrightPrefix} <span className={styles.heart}>♥</span> {copyrightName}
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className={styles.backToTop}
        >
          {backToTop} <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
