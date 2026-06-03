"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";
import { scrollToSection } from "@/lib/utils/scroll";
import { Button } from "@/components/ui/button";

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
      className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-primary)] flex items-center justify-center pt-20"
    >
      <div className="hero-noise absolute inset-0 z-0" />

      <div
        className="relative z-10 flex w-full items-center justify-between gap-16 py-0"
        style={{ paddingLeft: "8rem", paddingRight: "4rem" }}
      >
        <div className="flex flex-col justify-center w-[55%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="[font-family:var(--font-display)] mb-6 text-md font-medium uppercase tracking-widest text-[var(--text-muted)]"
          >
            {t("label")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 font-serif font-bold leading-tight text-[var(--hero-heading)]"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {t("headline_1")}
            <br />
            {t("headline_2")}
            <br />
            {t("headline_3")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]"
          >
            {t("subparagraph")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-row items-center gap-4"
            style={{ marginTop: "2rem" }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-[var(--lime)] border border-[var(--lime)] text-[var(--btn-primary-text)] hover:bg-[var(--lime-hover)] rounded-full !px-8 !py-4 text-sm font-bold uppercase tracking-widest"
            >
              {t("cta_primary")}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="rounded-full !px-8 !py-4 text-sm font-bold uppercase tracking-widest border-[1.5px] border-[var(--btn-outline-border)] text-[var(--btn-outline-text)] bg-transparent hover:bg-[var(--btn-outline-hover-bg)] hover:border-[var(--btn-outline-hover-border)] transition-all duration-200"
            >
              {t("cta_secondary")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:flex self-center h-[520px] w-[420px] flex-shrink-0 overflow-hidden rounded-2xl border border-[var(--custom-border)]"
          style={{ marginRight: "4rem" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/hero-photo.jpeg"
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
          {t("scroll_label")}
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
