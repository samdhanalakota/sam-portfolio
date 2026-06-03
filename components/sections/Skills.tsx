"use client";

import { motion } from "framer-motion";
import { ClaudeCode, Copilot, Cursor } from "@lobehub/icons";
import {
  Atom,
  Cpu,
  Database,
  Flag,
  Globe,
  KeyRound,
  Lock,
  Shield,
  Star,
  Table2,
  TestTube,
  Users,
} from "lucide-react";
import AmazonwebservicesOriginalWordmarkIcon from "@devicon/react/amazonwebservices/original-wordmark";
import CypressOriginalIcon from "@devicon/react/cypressio/original";
import D3jsOriginalIcon from "@devicon/react/d3js/original";
import DockerOriginalIcon from "@devicon/react/docker/original";
import ElasticsearchOriginalIcon from "@devicon/react/elasticsearch/original";
import ExpressOriginalIcon from "@devicon/react/express/original";
import FigmaOriginalIcon from "@devicon/react/figma/original";
import GitOriginalIcon from "@devicon/react/git/original";
import GithubOriginalIcon from "@devicon/react/github/original";
import GraphqlPlainIcon from "@devicon/react/graphql/plain";
import HelmOriginalIcon from "@devicon/react/helm/original";
import JavascriptOriginalIcon from "@devicon/react/javascript/original";
import JestPlainIcon from "@devicon/react/jest/plain";
import JiraOriginalIcon from "@devicon/react/jira/original";
import KubernetesPlainIcon from "@devicon/react/kubernetes/plain";
import MaterialuiOriginalIcon from "@devicon/react/materialui/original";
import MysqlOriginalIcon from "@devicon/react/mysql/original";
import NestjsOriginalIcon from "@devicon/react/nestjs/original";
import NextjsOriginalIcon from "@devicon/react/nextjs/original";
import NodejsOriginalIcon from "@devicon/react/nodejs/original";
import PlaywrightOriginalIcon from "@devicon/react/playwright/original";
import PostgresqlOriginalIcon from "@devicon/react/postgresql/original";
import { PostmanOriginalIcon } from "@devicon/react";
import RailsOriginalIcon from "@devicon/react/rails/plain";
import ReactOriginalIcon from "@devicon/react/react/original";
import RedisOriginalIcon from "@devicon/react/redis/original";
import RubyOriginalIcon from "@devicon/react/ruby/original";
import SassOriginalIcon from "@devicon/react/sass/original";
import StorybookOriginalIcon from "@devicon/react/storybook/original";
import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import TerraformOriginalIcon from "@devicon/react/terraform/original";
import TypescriptOriginalIcon from "@devicon/react/typescript/original";
import VitestOriginalIcon from "@devicon/react/vitest/original";
import VscodeOriginalIcon from "@devicon/react/vscode/original";

import styles from "@/components/sections/Skills.module.css";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "cloud"
  | "auth"
  | "testing"
  | "tools"
  | "ai";

interface SkillItem {
  label: string;
  category: SkillCategory;
  featured?: boolean;
  Icon?: React.ComponentType<{ size?: number }>;
  LobeIcon?: React.ComponentType<{ size?: number; type?: string }>;
  LucideIcon?: React.ComponentType<{ size?: number; className?: string }>;
}

const FILTERS = [
  { id: "featured", label: "Featured" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "auth", label: "Auth & Security" },
  { id: "testing", label: "Testing" },
  { id: "tools", label: "Tools" },
  { id: "ai", label: "AI Tooling" },
] as const;

const ALL_SKILLS: SkillItem[] = [
  { label: "TypeScript", category: "languages", Icon: TypescriptOriginalIcon, featured: true },
  { label: "JavaScript", category: "languages", Icon: JavascriptOriginalIcon, featured: true },
  { label: "Ruby", category: "languages", Icon: RubyOriginalIcon, featured: true },
  { label: "Node.js", category: "languages", Icon: NodejsOriginalIcon, featured: true },

  { label: "React", category: "frontend", Icon: ReactOriginalIcon, featured: true },
  { label: "Next.js", category: "frontend", Icon: NextjsOriginalIcon, featured: true },
  { label: "Tailwind CSS", category: "frontend", Icon: TailwindcssOriginalIcon, featured: true },
  { label: "SASS/SCSS", category: "frontend", Icon: SassOriginalIcon },
  { label: "GraphQL", category: "frontend", Icon: GraphqlPlainIcon, featured: true },
  { label: "D3.js", category: "frontend", Icon: D3jsOriginalIcon },
  { label: "Storybook", category: "frontend", Icon: StorybookOriginalIcon },
  { label: "Material UI", category: "frontend", Icon: MaterialuiOriginalIcon },
  { label: "WebSockets", category: "frontend", LucideIcon: Globe, featured: true },
  { label: "Jotai", category: "frontend", LucideIcon: Atom, featured: true },
  { label: "TanStack Query", category: "frontend", LucideIcon: Table2, featured: true },

  { label: "NestJS", category: "backend", Icon: NestjsOriginalIcon, featured: true },
  { label: "Ruby on Rails", category: "backend", Icon: RailsOriginalIcon, featured: true },
  { label: "Express", category: "backend", Icon: ExpressOriginalIcon, featured: true },
  { label: "TypeORM", category: "backend", LucideIcon: Database, featured: true },

  { label: "PostgreSQL", category: "databases", Icon: PostgresqlOriginalIcon, featured: true },
  { label: "Redis", category: "databases", Icon: RedisOriginalIcon, featured: true },
  { label: "Elasticsearch", category: "databases", Icon: ElasticsearchOriginalIcon, featured: true },
  { label: "MySQL", category: "databases", Icon: MysqlOriginalIcon },
  { label: "DynamoDB", category: "databases", LucideIcon: Database, featured: true },

  { label: "AWS", category: "cloud", Icon: AmazonwebservicesOriginalWordmarkIcon, featured: true },
  { label: "Docker", category: "cloud", Icon: DockerOriginalIcon, featured: true },
  { label: "Kubernetes", category: "cloud", Icon: KubernetesPlainIcon, featured: true },
  { label: "Terraform", category: "cloud", Icon: TerraformOriginalIcon, featured: true },
  { label: "Helm", category: "cloud", Icon: HelmOriginalIcon },
  { label: "GitHub Actions", category: "cloud", Icon: GithubOriginalIcon, featured: true },

  { label: "OAuth2", category: "auth", LucideIcon: Lock, featured: true },
  { label: "FIDO2 / WebAuthn", category: "auth", LucideIcon: KeyRound, featured: true },
  { label: "JWT", category: "auth", LucideIcon: Shield, featured: true },
  { label: "RBAC", category: "auth", LucideIcon: Users, featured: true },

  { label: "Jest", category: "testing", Icon: JestPlainIcon, featured: true },
  { label: "Vitest", category: "testing", Icon: VitestOriginalIcon, featured: true },
  { label: "Playwright", category: "testing", Icon: PlaywrightOriginalIcon, featured: true },
  { label: "Cypress", category: "testing", Icon: CypressOriginalIcon, featured: true },
  { label: "WebDriverIO", category: "testing", Icon: TestTube },

  { label: "Git", category: "tools", Icon: GitOriginalIcon, featured: true },
  { label: "Jira", category: "tools", Icon: JiraOriginalIcon, featured: true },
  { label: "Figma", category: "tools", Icon: FigmaOriginalIcon, featured: true },
  { label: "Postman", category: "tools", Icon: PostmanOriginalIcon, featured: true },
  { label: "LaunchDarkly", category: "tools", LucideIcon: Flag, featured: true },
  { label: "GitHub", category: "tools", Icon: GithubOriginalIcon },
  { label: "VS Code", category: "tools", Icon: VscodeOriginalIcon },

  { label: "Claude Code", category: "ai", LobeIcon: ClaudeCode, featured: true },
  { label: "Cursor", category: "ai", LobeIcon: Cursor, featured: true },
  { label: "GitHub Copilot", category: "ai", LobeIcon: Copilot, featured: true },
  { label: "AgentOS", category: "ai", Icon: Cpu, featured: true },
];

interface SkillPillProps {
  label: string;
  Icon?: React.ComponentType<{ size?: number }>;
  LobeIcon?: React.ComponentType<{ size?: number; type?: string }>;
  LucideIcon?: React.ComponentType<{ size?: number; className?: string }>;
}

/**
 * Individual skill pill with icon and label.
 */
function SkillPill({ label, Icon, LobeIcon, LucideIcon }: SkillPillProps) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillIcon}>
        {LobeIcon ? (
          <LobeIcon size={36} type="color" />
        ) : Icon ? (
          <Icon size={36} />
        ) : LucideIcon ? (
          <LucideIcon size={28} className={styles.lucideIcon} />
        ) : null}
      </div>
      <span className={styles.skillLabel}>{label}</span>
    </div>
  );
}

/**
 * Skills section - three auto-scrolling rows of tech icons.
 * Rows alternate direction: left, right, left.
 * All rows pause on hover.
 */
export default function Skills() {
  const { t } = useTranslation("skills");
  const [activeFilter, setActiveFilter] = useState<string>("featured");

  const showScrollRows = activeFilter === "featured";

  const filteredSkills =
    activeFilter === "featured"
      ? null
      : ALL_SKILLS.filter((skill) => skill.category === activeFilter);

  const FEATURED_ROW_1 = ALL_SKILLS.filter(
    (skill) =>
      skill.featured && ["languages", "frontend"].includes(skill.category)
  );
  const FEATURED_ROW_2 = ALL_SKILLS.filter(
    (skill) =>
      skill.featured && ["backend", "databases", "cloud"].includes(skill.category)
  );
  const FEATURED_ROW_3 = ALL_SKILLS.filter(
    (skill) =>
      skill.featured && ["auth", "testing", "tools", "ai"].includes(skill.category)
  );

  const row1Doubled = [...FEATURED_ROW_1, ...FEATURED_ROW_1];
  const row2Doubled = [...FEATURED_ROW_2, ...FEATURED_ROW_2];
  const row3Doubled = [...FEATURED_ROW_3, ...FEATURED_ROW_3];

  return (
    <section id="skills" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className={styles.sectionLabel}>
          {t("section_number") as string} — {t("section_label") as string}
        </p>
        <h2 className={styles.heading}>{t("heading") as string}</h2>
        <p className={styles.subheading}>{t("subheading") as string}</p>
      </motion.div>

      <div className={styles.filtersHeader}>
        <div className={styles.filterRow}>
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.filterBtnActive : ""}`}
            >
              {filter.id === "featured" && (
                <Star size={11} className={styles.filterStar} />
              )}
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {showScrollRows ? (
        <div className={styles.rowsWrapper}>
          <div
            className={`${styles.scrollRow} ${styles.rowLeft}`}
            onMouseEnter={(event) => {
              event.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.animationPlayState = "running";
            }}
          >
            {row1Doubled.map((skill, index) => (
              <SkillPill
                key={`r1-${index}`}
                label={skill.label}
                Icon={skill.Icon}
                LobeIcon={skill.LobeIcon}
                LucideIcon={skill.LucideIcon}
              />
            ))}
          </div>

          <div
            className={`${styles.scrollRow} ${styles.rowRight}`}
            onMouseEnter={(event) => {
              event.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.animationPlayState = "running";
            }}
          >
            {row2Doubled.map((skill, index) => (
              <SkillPill
                key={`r2-${index}`}
                label={skill.label}
                Icon={skill.Icon}
                LobeIcon={skill.LobeIcon}
                LucideIcon={skill.LucideIcon}
              />
            ))}
          </div>

          <div
            className={`${styles.scrollRow} ${styles.rowLeft}`}
            onMouseEnter={(event) => {
              event.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.animationPlayState = "running";
            }}
          >
            {row3Doubled.map((skill, index) => (
              <SkillPill
                key={`r3-${index}`}
                label={skill.label}
                Icon={skill.Icon}
                LobeIcon={skill.LobeIcon}
                LucideIcon={skill.LucideIcon}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.filteredGrid}>
          {filteredSkills?.map((skill, index) => (
            <SkillPill key={index} {...skill} />
          ))}
        </div>
      )}
    </section>
  );
}
