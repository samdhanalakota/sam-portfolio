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
        </motion.div>

        <div className={styles.rightColumn}>
          <motion.p
            className={styles.primaryParagraph}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {t("paragraph_primary")}
          </motion.p>
          <motion.p
            className={styles.secondaryParagraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {t("paragraph_secondary")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
