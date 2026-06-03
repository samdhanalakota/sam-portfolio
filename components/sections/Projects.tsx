"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "@/components/sections/Projects.module.css";
import { useTranslation } from "@/hooks/useTranslation";

type TabType = "scope" | "tech";

type Project = {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  scope: string;
  gradient: string;
  tech_badges: string[];
  metric: string;
};

/**
 * Projects section with horizontally scrollable architecture cards.
 * Supports drag-to-scroll, card-local SCOPE/TECH tabs, and active dot indicators.
 */
export default function Projects() {
  const { t } = useTranslation("projects");
  const projects = t<Project[]>("projects", { returnObjects: true });
  const [activeTabs, setActiveTabs] = useState<Record<string, TabType>>({});
  const router = useRouter();

  const setCardTab = (projectId: string, tab: TabType) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className={styles.sectionLabel}>
          {t("section_number") as string} — {t("section_label") as string}
        </span>
        <h2 className={styles.heading}>{t("heading") as string}</h2>
        <p className={styles.subheading}>{t("subheading") as string}</p>
      </motion.div>

      <div className={styles.scrollContainer}>
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollTrack}>
            {projects.map((project) => {
            const activeTab = activeTabs[project.id] ?? "scope";
            return (
              <article
                key={project.id}
                className={styles.card}
              >
                <div
                  className={styles.cardGradient}
                  style={{ background: project.gradient }}
                >
                  <div className={styles.cardGradientPattern} />
                  <span className={styles.cardCategory}>
                    {project.number}
                  </span>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.toggleRow}>
                    <button
                      type="button"
                      onClick={() => setCardTab(project.id, "scope")}
                      className={`${styles.toggleButton} ${activeTab === "scope" ? styles.toggleButtonActive : ""}`}
                    >
                      {t("scope_tab") as string}
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardTab(project.id, "tech")}
                      className={`${styles.toggleButton} ${activeTab === "tech" ? styles.toggleButtonActive : ""}`}
                    >
                      {t("tech_tab") as string}
                    </button>
                  </div>

                  <div className={styles.tabContent}>
                    {activeTab === "scope" ? (
                    <div className={styles.metricWrapper}>
                        <p className={styles.metric}>{project.metric}</p>
                        <p className={styles.scopeText}>{project.scope}</p>
                    </div>
                    ) : (
                      <div className={styles.badgeWrap}>
                        {project.tech_badges.map((badge) => (
                          <span key={badge} className={styles.badge}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={styles.ctaGroup}>
                    <hr className={styles.divider} />
                    <button
                      type="button"
                      onClick={() => router.push(`/projects/${project.slug}`)}
                      className={styles.cta}
                    >
                      {t("cta") as string}
                      <span className={styles.ctaArrow} aria-hidden="true">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
