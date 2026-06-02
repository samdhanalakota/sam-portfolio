"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./Journey.module.css";

/**
 * Journey section — work experience and education in a
 * three-column minimal timeline layout.
 */
export default function Journey() {
  const { t } = useTranslation("journey");
  const sectionNumber = t("section_number") as string;
  const sectionLabel = t("section_label") as string;
  const heading = t("heading") as string;
  const entries = t("entries") as unknown as Array<{
    date: string;
    role: string;
    company: string;
    current: boolean;
    description: string;
  }>;

  return (
    <section id="journey" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className={styles.sectionLabel}>
          {sectionNumber} — {sectionLabel}
        </span>
        <h2 className={styles.heading}>{heading}</h2>
      </motion.div>

      <div className={styles.entries}>
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            className={styles.entry}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className={styles.date}>{entry.date}</span>

            <div className={styles.center}>
              <span className={styles.role}>{entry.role}</span>
              <span className={styles.company}>{entry.company}</span>
              {entry.current && (
                <span className={styles.currentBadge}>
                  <span className={styles.currentDot} />
                  Present
                </span>
              )}
            </div>

            <p className={styles.description}>{entry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
