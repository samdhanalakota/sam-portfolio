
---

> Completely rewrite `components/sections/Skills.tsx` with the full corrected skill list, correct filter tabs, and flex-wrap grid layout for filtered view.
>
> **Filter tabs — replace current with:**
> ```tsx
> const FILTERS = [
>   { id: 'all', label: 'All' },
>   { id: 'languages', label: 'Languages' },
>   { id: 'frontend', label: 'Frontend' },
>   { id: 'backend', label: 'Backend' },
>   { id: 'databases', label: 'Databases' },
>   { id: 'cloud', label: 'Cloud & DevOps' },
>   { id: 'auth', label: 'Auth & Security' },
>   { id: 'testing', label: 'Testing' },
>   { id: 'tools', label: 'Tools' },
>   { id: 'ai', label: 'AI Tooling' },
> ] as const;
> ```
>
> **Complete skill arrays — replace ALL existing ROW_1, ROW_2, ROW_3 with:**
>
> ```tsx
> const ALL_SKILLS: SkillItem[] = [
>   // Languages
>   { label: 'TypeScript', category: 'languages', Icon: TypescriptOriginalIcon },
>   { label: 'JavaScript', category: 'languages', Icon: JavascriptOriginalIcon },
>   { label: 'Ruby', category: 'languages', Icon: RubyOriginalIcon },
>   { label: 'Node.js', category: 'languages', Icon: NodejsOriginalIcon },
>
>   // Frontend
>   { label: 'React', category: 'frontend', Icon: ReactOriginalIcon },
>   { label: 'Next.js', category: 'frontend', Icon: NextjsOriginalIcon },
>   { label: 'Tailwind CSS', category: 'frontend', Icon: TailwindcssOriginalIcon },
>   { label: 'SASS/SCSS', category: 'frontend', Icon: SassOriginalIcon },
>   { label: 'HTML5', category: 'frontend', Icon: Html5OriginalIcon },
>   { label: 'Material UI', category: 'frontend', Icon: MaterialuiOriginalIcon },
>   { label: 'shadcn/ui', category: 'frontend', LucideIcon: Layers },
>   { label: 'Jotai', category: 'frontend', LucideIcon: Atom },
>   { label: 'TanStack Query', category: 'frontend', LucideIcon: Table2 },
>   { label: 'WebSockets', category: 'frontend', LucideIcon: Globe },
>   { label: 'GraphQL', category: 'frontend', Icon: GraphqlPlainIcon },
>   { label: 'D3.js', category: 'frontend', Icon: D3jsOriginalIcon },
>   { label: 'Storybook', category: 'frontend', Icon: StorybookOriginalIcon },
>   { label: 'Turborepo', category: 'frontend', LucideIcon: Package },
>
>   // Backend
>   { label: 'NestJS', category: 'backend', Icon: NestjsOriginalIcon },
>   { label: 'Express', category: 'backend', Icon: ExpressOriginalIcon },
>   { label: 'TypeORM', category: 'backend', LucideIcon: DatabaseZap },
>   { label: 'Ruby on Rails', category: 'backend', Icon: RailsOriginalIcon },
>   { label: 'OpenAPI', category: 'backend', LucideIcon: FileCode },
>
>   // Databases
>   { label: 'PostgreSQL', category: 'databases', Icon: PostgresqlOriginalIcon },
>   { label: 'MySQL', category: 'databases', Icon: MysqlOriginalIcon },
>   { label: 'Redis', category: 'databases', Icon: RedisOriginalIcon },
>   { label: 'DynamoDB', category: 'databases', LucideIcon: Database },
>   { label: 'Elasticsearch', category: 'databases', Icon: ElasticsearchOriginalIcon },
>
>   // Cloud & DevOps
>   { label: 'AWS', category: 'cloud', Icon: AmazonwebservicesOriginalWordmarkIcon },
>   { label: 'AWS S3', category: 'cloud', LucideIcon: HardDrive },
>   { label: 'AWS SQS', category: 'cloud', LucideIcon: Zap },
>   { label: 'AWS Cognito', category: 'cloud', LucideIcon: ShieldCheck },
>   { label: 'AWS CloudWatch', category: 'cloud', LucideIcon: Activity },
>   { label: 'Docker', category: 'cloud', Icon: DockerOriginalIcon },
>   { label: 'Kubernetes', category: 'cloud', Icon: KubernetesPlainIcon },
>   { label: 'Helm', category: 'cloud', Icon: HelmOriginalIcon },
>   { label: 'Terraform', category: 'cloud', Icon: TerraformOriginalIcon },
>   { label: 'GitHub Actions', category: 'cloud', Icon: GithubOriginalIcon },
>   { label: 'Jenkins', category: 'cloud', Icon: JenkinsOriginalIcon },
>
>   // Auth & Security
>   { label: 'OAuth2', category: 'auth', LucideIcon: Lock },
>   { label: 'FIDO2 / WebAuthn', category: 'auth', LucideIcon: KeyRound },
>   { label: 'JWT', category: 'auth', LucideIcon: Shield },
>   { label: 'RBAC', category: 'auth', LucideIcon: Users },
>
>   // Testing
>   { label: 'Jest', category: 'testing', Icon: JestPlainIcon },
>   { label: 'Vitest', category: 'testing', Icon: VitestOriginalIcon },
>   { label: 'Playwright', category: 'testing', Icon: PlaywrightOriginalIcon },
>   { label: 'Cypress', category: 'testing', Icon: CypressOriginalIcon },
>   { label: 'WebDriverIO', category: 'testing', Icon: WebdriverioOriginalIcon },
>   { label: 'React Testing Lib', category: 'testing', LucideIcon: TestTube },
>   { label: 'Cucumber', category: 'testing', LucideIcon: Sprout },
>
>   // Tools
>   { label: 'Git', category: 'tools', Icon: GitOriginalIcon },
>   { label: 'GitHub', category: 'tools', Icon: GithubOriginalIcon },
>   { label: 'Jira', category: 'tools', Icon: JiraOriginalIcon },
>   { label: 'Figma', category: 'tools', Icon: FigmaOriginalIcon },
>   { label: 'VS Code', category: 'tools', Icon: VscodeOriginalIcon },
>   { label: 'Postman', category: 'tools', Icon: PostmanOriginalIcon },
>   { label: 'Swagger', category: 'tools', LucideIcon: FileText },
>   { label: 'LaunchDarkly', category: 'tools', LucideIcon: Flag },
>
>   // AI Tooling
>   { label: 'Claude Code', category: 'ai', LobeIcon: ClaudeCode },
>   { label: 'Cursor', category: 'ai', LobeIcon: Cursor },
>   { label: 'GitHub Copilot', category: 'ai', LobeIcon: Copilot },
>   { label: 'AgentOS', category: 'ai', LucideIcon: Bot },
> ];
> ```
>
> **Add these missing devicon imports:**
> ```tsx
> import Html5OriginalIcon from "@devicon/react/html5/original";
> import JenkinsOriginalIcon from "@devicon/react/jenkins/original";
> import WebdriverioOriginalIcon from "@devicon/react/webdriverio/original";
> import PostmanOriginalIcon from "@devicon/react/postman/original";
> ```
>
> **Add these missing lucide imports:**
> ```tsx
> import {
>   Database, Layers, Atom, Table2, Share2, Globe, Package,
>   Server, Network, FileCode, Timer, HardDrive, Zap,
>   ShieldCheck, Activity, Monitor, Lock, KeyRound, Shield,
>   Smartphone, Users, Cookie, TestTube, Sprout, Wifi,
>   FileText, Flag, PlayCircle, Bot, Accessibility
> } from "lucide-react";
> ```
>
> **Update SkillItem type:**
> ```tsx
> type SkillCategory = 'languages' | 'frontend' | 'backend' | 'databases' | 'cloud' | 'auth' | 'testing' | 'tools' | 'ai';
>
> interface SkillItem {
>   label: string;
>   category: SkillCategory;
>   Icon?: React.ComponentType<{ size?: number }>;
>   LobeIcon?: React.ComponentType<{ size?: number; type?: string }>;
>   LucideIcon?: React.ComponentType<{ size?: number; className?: string }>;
> }
> ```
>
> **Update SkillPill to handle LucideIcon:**
> ```tsx
> function SkillPill({ label, Icon, LobeIcon, LucideIcon }: SkillItem) {
>   return (
>     <div className={styles.skill}>
>       <div className={styles.skillIcon}>
>         {LobeIcon ? (
>           <LobeIcon size={36} type="color" />
>         ) : Icon ? (
>           <Icon size={36} />
>         ) : LucideIcon ? (
>           <LucideIcon size={28} className={styles.lucideIcon} />
>         ) : null}
>       </div>
>       <span className={styles.skillLabel}>{label}</span>
>     </div>
>   );
> }
> ```
>
> **Update filtered view layout — flex-wrap instead of 3 rows:**
>
> When filter is active, show skills in a flex-wrap grid that fills the width naturally:
> ```tsx
> {filteredSkills ? (
>   <div className={styles.filteredGrid}>
>     {filteredSkills.map((skill, i) => (
>       <SkillPill key={i} {...skill} />
>     ))}
>   </div>
> ) : (
>   // existing auto-scroll rows unchanged
> )}
> ```
>
> **Update Skills.module.css — replace staticRowsWrapper/staticRow with:**
> ```css
> .filteredGrid {
>   display: flex;
>   flex-wrap: wrap;
>   gap: 1rem;
>   padding: 0 10rem;
>   align-items: flex-start;
> }
> ```
>
> **For ALL view — keep existing 3 auto-scroll rows, but rebuild them from ALL_SKILLS:**
> ```tsx
> const SCROLL_ROW_1 = ALL_SKILLS.filter(s =>
>   ['languages', 'frontend'].includes(s.category)
> );
> const SCROLL_ROW_2 = ALL_SKILLS.filter(s =>
>   ['backend', 'databases', 'cloud'].includes(s.category)
> );
> const SCROLL_ROW_3 = ALL_SKILLS.filter(s =>
>   ['auth', 'testing', 'tools', 'ai'].includes(s.category)
> );
> ```
> Double each for seamless loop: `[...SCROLL_ROW_1, ...SCROLL_ROW_1]` etc.
>
> Show me the complete updated Skills.tsx.

---

Paste output and screenshot when done.