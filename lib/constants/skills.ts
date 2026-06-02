/**
 * @fileoverview Skill definitions for the Skills section.
 * Each skill has a label and a devicon component reference.
 * Split into two rows that scroll in opposite directions.
 */

export interface Skill {
  /** Display label shown below the icon */
  label: string;
  /** Devicon component name to import */
  icon: string;
}

/** Row 1 - scrolls left to right */
export const SKILLS_ROW_1: Skill[] = [
  { label: "React", icon: "ReactOriginalIcon" },
  { label: "TypeScript", icon: "TypescriptOriginalIcon" },
  { label: "Next.js", icon: "NextjsOriginalIcon" },
  { label: "Tailwind CSS", icon: "TailwindcssOriginalIcon" },
  { label: "Node.js", icon: "NodejsOriginalIcon" },
  { label: "NestJS", icon: "NestjsOriginalIcon" },
  { label: "PostgreSQL", icon: "PostgresqlOriginalIcon" },
  { label: "Redis", icon: "RedisOriginalIcon" },
  { label: "GraphQL", icon: "GraphqlPlainIcon" },
  { label: "Ruby", icon: "RubyOriginalIcon" },
  { label: "Rails", icon: "RailsOriginalIcon" },
  { label: "WebSockets", icon: "NodejsOriginalIcon" },
];

/** Row 2 - scrolls right to left */
export const SKILLS_ROW_2: Skill[] = [
  { label: "AWS", icon: "AmazonwebservicesOriginalWordmarkIcon" },
  { label: "Docker", icon: "DockerOriginalIcon" },
  { label: "Kubernetes", icon: "KubernetesPlainIcon" },
  { label: "Terraform", icon: "TerraformOriginalIcon" },
  { label: "GitHub", icon: "GithubOriginalIcon" },
  { label: "Jest", icon: "JestPlainIcon" },
  { label: "Playwright", icon: "PlaywrightOriginalIcon" },
  { label: "Figma", icon: "FigmaOriginalIcon" },
  { label: "Git", icon: "GitOriginalIcon" },
  { label: "Jira", icon: "JiraOriginalIcon" },
  { label: "VS Code", icon: "VscodeOriginalIcon" },
  { label: "Storybook", icon: "StorybookOriginalIcon" },
];
