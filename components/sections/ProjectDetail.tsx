"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Code, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Project, projects } from "@/lib/constants/projects";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./ProjectDetail.module.css";

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  const router = useRouter();
  const { t } = useTranslation("project_detail");

  return (
    <div className={styles.page}>
      {/* Back button */}
      <div className={styles.topBar}>
        <button
          className={styles.backBtn}
          onClick={() => router.push("/")}
        >
          <ArrowLeft size={16} />
          {t("back") as string}
        </button>
      </div>

      {/* Main layout */}
      <div className={styles.layout}>
        {/* LEFT — main content */}
        <main className={styles.main}>
          {/* Hero image */}
          <motion.div
            className={styles.heroImage}
            style={{ background: project.gradient }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.dotPattern} />
            <div className={styles.heroGlow} />
          </motion.div>

          {/* Title block */}
          <motion.div
            className={styles.titleBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.tagline}>{project.tagline}</p>

            {/* Tech pills */}
            <div className={styles.techPills}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techPill}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Content sections */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Section title={t("sections.overview") as string}>
              <p className={styles.prose}>{project.content.overview}</p>
            </Section>

            <div className={styles.divider} />

            <Section title={t("sections.challenge") as string}>
              <p className={styles.prose}>{project.content.challenge}</p>
            </Section>

            <div className={styles.divider} />

            <Section title={t("sections.what_i_built") as string}>
              <ul className={styles.list}>
                {project.content.whatIBuilt.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.listDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <div className={styles.divider} />

            <Section title={t("sections.architecture") as string}>
              <p className={styles.prose}>{project.content.architecture}</p>
            </Section>

            <div className={styles.divider} />

            <Section title={t("sections.impact") as string}>
              <ul className={styles.list}>
                {project.content.impact.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.listDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <div className={styles.divider} />

            <Section title={t("sections.learned") as string}>
              <p className={styles.prose}>{project.content.learned}</p>
            </Section>
          </motion.div>
        </main>

        {/* RIGHT sidebar — placeholder for Chunk 3 */}
        <aside className={styles.sidebar}>
          {/* Key Metric card */}
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarCardLabel}>{t("sidebar.key_metric") as string}</p>
            <p className={styles.metricNumber}>{project.metric}</p>
            <p className={styles.metricLabel}>{project.metricLabel}</p>
          </div>

          {/* Project Links card */}
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarCardLabel}>{t("sidebar.project_links") as string}</p>
            <div className={styles.linksList}>
              <a
                href={project.links.live ?? "#"}
                className={`${styles.linkRow} ${!project.links.live ? styles.linkDisabled : ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                <span>{t("sidebar.live_demo") as string}</span>
                {!project.links.live && (
                  <span className={styles.comingSoon}>{t("sidebar.soon") as string}</span>
                )}
              </a>
              <a
                href={project.links.source ?? "#"}
                className={`${styles.linkRow} ${!project.links.source ? styles.linkDisabled : ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code size={14} />
                <span>{t("sidebar.source_code") as string}</span>
                {!project.links.source && (
                  <span className={styles.comingSoon}>{t("sidebar.soon") as string}</span>
                )}
              </a>
            </div>
          </div>

          {/* Open to Roles card */}
          <div className={styles.sidebarCard}>
            <div className={styles.openHeader}>
              <span className={styles.openDot} />
              <p className={`${styles.sidebarCardLabel} ${styles.sidebarCardLabelTight}`}>
                {t("sidebar.open_opportunities") as string}
              </p>
            </div>
            <p className={styles.openText}>{t("sidebar.open_text") as string}</p>
            <div className={styles.openLinks}>
              <a
                href="https://linkedin.com/in/sam-dhanalakota-946649147"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openBtn}
              >
                <Briefcase size={13} />
                {t("sidebar.linkedin") as string}
              </a>
              <a href="mailto:samdsiva1994@gmail.com" className={styles.openBtn}>
                <Mail size={13} />
                {t("sidebar.email") as string}
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* OTHER PROJECTS */}
      <OtherProjects currentSlug={project.slug} />

      {/* CTA + FOOTER */}
      <CtaSection />
      <ProjectFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}

function OtherProjects({ currentSlug }: { currentSlug: string }) {
  const router = useRouter();
  const { t } = useTranslation("project_detail");
  const others = projects.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <div className={styles.otherProjects}>
      <div className={styles.otherHeader}>
        <h3 className={styles.otherHeading}>{t("other_projects.heading") as string}</h3>
      </div>
      <div className={styles.otherGrid}>
        {others.map((p) => (
          <button
            key={p.slug}
            className={styles.otherCard}
            onClick={() => router.push(`/projects/${p.slug}`)}
          >
            {/* Mini gradient image */}
            <div className={styles.otherCardImage} style={{ background: p.gradient }}>
              <div className={styles.dotPattern} />
            </div>

            {/* Card content */}
            <div className={styles.otherCardBody}>
              <h4 className={styles.otherCardTitle}>{p.title}</h4>
              <p className={styles.otherCardTagline}>{p.tagline}</p>
              <div className={styles.otherCardPills}>
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t} className={styles.otherCardPill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CtaSection() {
  const [showCal, setShowCal] = useState(false);
  const calLoaded = useRef(false);

  useEffect(() => {
    if (!showCal || calLoaded.current) return;
    calLoaded.current = true;

    // Cal.com official queue bootstrap: prepares window.Cal.q before embed.js runs.
    // @ts-ignore
    (function (C, A, L) {
      const p = function (a: { q: unknown[] }, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      // @ts-ignore
      C.Cal =
        // @ts-ignore
        C.Cal ||
        function (...args: unknown[]) {
          // @ts-ignore
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const scriptEl = d.createElement("script");
            scriptEl.src = A;
            scriptEl.async = true;
            d.head.appendChild(scriptEl);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (...apiArgs: unknown[]) {
              p(api as unknown as { q: unknown[] }, apiArgs);
            };
            const namespace = args[1];
            // @ts-ignore
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    window.Cal("init", "30min", { origin: "https://cal.com" });
    // @ts-ignore
    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#cal-inline",
      calLink: "sam-dhanalakota/connect",
      layout: "month_view",
      config: {
        layout: "month_view",
      },
    });
    // @ts-ignore
    window.Cal.ns["30min"]("ui", {
      theme: "dark",
      hideEventTypeDetails: true,
      layout: "month_view",
      styles: {
        branding: { brandColor: "#84cc16" },
        body: { background: "transparent" },
      },
    });
  }, [showCal]);

  return (
    <div className={styles.cta}>
      <div className={styles.ctaInner}>
        <p className={styles.ctaLabel}>Let&apos;s Work Together</p>
        <h2 className={styles.ctaHeading}>We Can Build Something Really Incredible</h2>
        <p className={styles.ctaSubtext}>
          FREE 30-Min Call — No agenda required. Just bring what you&apos;re working on.
        </p>

        {!showCal && (
          <button className={styles.ctaBtn} onClick={() => setShowCal(true)}>
            Schedule a Call
          </button>
        )}

        {showCal && (
          <div className={styles.ctaCalWrapper}>
            <motion.div
              className={styles.ctaCalEmbed}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div
                id="cal-inline"
                style={{
                  width: "100%",
                  minWidth: "600px",
                  height: "800px",
                  overflow: "auto",
                }}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectFooter() {
  const { t } = useTranslation("project_detail");
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerCopy}>{t("footer.copy") as string}</p>
        <div className={styles.footerLinks}>
          <a href="mailto:samdsiva1994@gmail.com" className={styles.footerLink}>
            {t("footer.email") as string}
          </a>
          <a
            href="https://linkedin.com/in/sam-dhanalakota-946649147"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            {t("footer.linkedin") as string}
          </a>
          <a
            href="https://github.com/samdhanalakota"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            {t("footer.github") as string}
          </a>
        </div>
      </div>
    </footer>
  );
}
