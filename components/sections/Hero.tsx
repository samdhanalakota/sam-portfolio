"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";
import { scrollToSection } from "@/lib/utils/scroll";
import { Button } from "@/components/ui/button";
import styles from "@/components/sections/Hero.module.css";

/**
 * Hero section — first visible section of the portfolio.
 * Displays name, headline, subparagraph, CTAs and photo.
 *
 * @remarks
 * Client component — uses framer-motion animations and
 * shared scroll utility.
 */
export default function Hero() {
  const { t } = useTranslation("hero");

  return (
    <section
      id="intro"
      className={`${styles.section} relative w-full overflow-hidden bg-[var(--bg-primary)]`}
    >
      <div className="hero-noise absolute inset-0 z-0" />

      <div className={`${styles.grid} relative z-10 items-center`}>
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="[font-family:var(--font-display)] mb-3 text-md font-medium uppercase tracking-widest text-[var(--text-muted)]"
          >
            {t("label") as string}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${styles.headline} mb-6`}
          >
            {t("headline_1") as string}
            <br />
            {t("headline_2") as string}
            <br />
            {t("headline_3") as string}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]"
            style={{ marginTop: "1rem" }}
          >
            {t("subparagraph") as string}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={styles.actions}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-[var(--lime)] border border-[var(--lime)] text-[var(--btn-primary-text)] hover:bg-[var(--lime-hover)] rounded-full !px-8 !py-4 text-sm font-bold uppercase tracking-widest"
            >
              {t("cta_primary") as string}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="rounded-full !px-8 !py-4 text-sm font-bold uppercase tracking-widest border-[1.5px] border-[var(--btn-outline-border)] text-[var(--btn-outline-text)] bg-transparent hover:bg-[var(--btn-outline-hover-bg)] hover:border-[var(--btn-outline-hover-border)] transition-all duration-200"
            >
              {t("cta_secondary") as string}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`${styles.photoContainer} self-center h-[520px] w-[420px] flex-shrink-0 overflow-hidden rounded-2xl border border-[var(--custom-border)]`}
        >
          <div className="relative h-full w-full">
            <Image
              src="/sam-hero-photo.jpeg"
              alt="Sam Dhanalakota portrait"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="[font-family:var(--font-display)] text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
          {t("scroll_label") as string}
        </span>
        <motion.div
          className="h-12 w-px origin-top bg-[var(--text-muted)]"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </section>
  );
}
