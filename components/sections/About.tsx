"use client";

import { motion } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";
import styles from "@/components/sections/About.module.css";

/**
 * About section — introduces Sam with a two-column typography layout.
 * Left: name and identity. Right: impact statement paragraphs.
 */
export default function About() {
  const { t } = useTranslation("about");
  const yearsOfExperience = new Date().getFullYear() - 2020;
  const primaryText = (t("paragraph_primary") as string).replace("{{years}}", String(yearsOfExperience));
  const highlightedPrimary = primaryText
    .replace("security and gaming industries", '<span class="highlight">security and gaming industries</span>')
    .replace("millions of users globally", '<span class="highlight">millions of users globally</span>');

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
            {t("section_number")} — {t("section_label")}
          </span>
          <h2 className={styles.name}>{t("name")}</h2>
          <p className={styles.title}>{t("title")}</p>
          <h3 className={styles.secondaryHeading}>{t("secondary_heading")}</h3>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>6+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>6</span>
              <span className={styles.statLabel}>Production Systems</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>10M+</span>
              <span className={styles.statLabel}>Users Reached</span>
            </div>
          </div>
        </motion.div>

        <div className={styles.rightColumn}>
          <p
            className={styles.primaryParagraph}
            dangerouslySetInnerHTML={{ __html: highlightedPrimary }}
          />
          <div className={styles.secondaryContent}>
            <p className={styles.secondaryParagraph}>
              {t("paragraph_secondary") as string}
            </p>
            <div className={styles.techPills}>
              {["NestJS", "React 19", "TypeScript", "Node.js", "AWS", "Ruby on Rails", "PostgreSQL", "Docker", "Kubernetes"].map((tech) => (
                <span key={tech} className={styles.techPill}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
