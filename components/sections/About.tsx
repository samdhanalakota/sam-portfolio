"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "@/components/sections/About.module.css";

interface Stat {
  value: string;
  label: string;
}

/**
 * About section — introduces Sam with a two-column typography layout.
 * Left: name, title, stats. Right: paragraphs and tech pills.
 * All content driven from about.json — no hardcoded text or data.
 */
export default function About() {
  const { t } = useTranslation("about");
  const yearsOfExperience = new Date().getFullYear() - 2020;
  const primaryText = (t("paragraph_primary") as string).replace(
    "{{years}}",
    String(yearsOfExperience)
  );
  const stats = t("stats") as unknown as Stat[];
  const techPills = t("tech_pills") as unknown as string[];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className={styles.sectionLabel}>
            {t("section_number") as string} — {t("section_label") as string}
          </span>
          <h2 className={styles.name}>{t("name") as string}</h2>
          <p className={styles.title}>{t("title") as string}</p>
          <h3 className={styles.secondaryHeading}>{t("secondary_heading") as string}</h3>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={styles.rightColumn}>
          <p className={styles.primaryParagraph}>
            {primaryText}
          </p>
          <div className={styles.secondaryContent}>
            <p className={styles.secondaryParagraph}>
              {t("paragraph_secondary") as string}
            </p>
            <div className={styles.techPills}>
              {techPills.map((tech) => (
                <span key={tech} className={styles.techPill}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
