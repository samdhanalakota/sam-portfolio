export interface ProjectLink {
  live: string | null;
  source: string | null;
}

export interface ProjectContent {
  overview: string;
  challenge: string;
  whatIBuilt: string[];
  architecture: string;
  impact: string[];
  learned: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  gradient: string;
  tech: string[];
  metric: string;
  metricLabel: string;
  links: ProjectLink;
  content: ProjectContent;
}

export const projects: Project[] = [
  {
    slug: "soc-workforce-management",
    title: "SOC Workforce Management Platform",
    tagline: "Unified real-time interface for security analysts across 6 global SOCs",
    gradient: "linear-gradient(135deg, #0a0a2e, #1a1a4e)",
    tech: ["React 19", "TypeScript", "Vite", "Jotai", "TanStack Table", "WebSockets", "NestJS", "PostgreSQL", "TypeORM", "AWS SQS", "AWS S3", "OAuth2", "RBAC", "Kubernetes", "Helm", "Terraform", "Ruby on Rails", "Sinatra"],
    metric: "26,000+",
    metricLabel: "Organizations Protected",
    links: { live: null, source: null },
    content: {
      overview:
        "Built the SMSC platform from scratch — a unified workforce management interface for SOC analysts. Before this, analysts were switching between three separate tools to manage their work. SMSC brought case queues, real-time presence, and account context into a single interface, serving 6 global SOCs protecting 26,000+ organizations worldwide.",
      challenge:
        "Three hard problems in one project — real-time synchronization across two platforms, a 3-hop identity resolution chain (Genesys ID → email → Taegis XDR principal), and async eventual consistency from Genesys query jobs. All three at the same time, as the sole engineer, 0-to-1.",
      whatIBuilt: [
        "React 19 SPA with Jotai atomic state — only components subscribed to relevant atoms re-render",
        "Real-time WebSocket layer connecting Genesys Cloud Notifications API — status changes and case assignments appear instantly",
        "NestJS microservice proxying Genesys Cloud behind a Sophos-standard REST contract with OpenAPI validation",
        "Exponential backoff polling for async Genesys query jobs (5ms base, 2ⁿ growth, max 1s, 30 retries)",
        "OAuth2 token caching with preemptive revalidation at 50% lifetime",
        "RBAC with 15 security operations roles mapped from MS Entra ID JWT groups",
        "AWS SQS event pipeline with DLQ retry semantics for bidirectional sync",
      ],
      architecture:
        "smsc-ui (React 19) communicates via REST and WebSocket with smsc-cases (NestJS), which proxies Genesys Cloud. smsc-accounts (NestJS) aggregates Central Accounts, EndpointIntel, and PostgreSQL into a single BFF surface. Underlying MDR capabilities are served by 4 Ruby/Rails services. Deployed on Kubernetes via Helm and Terraform across dev/qa/prod.",
      impact: [
        "26,000+ organizations protected across 6 global SOCs",
        "Case claim time reduced from 3 tool-switches to under 5 seconds",
        "Zero critical production incidents post-launch",
        "Zero downtime deployment via blue-green strategy",
      ],
      learned:
        "Started implementation before fully understanding the identity model — assumed a simple ID mapping, discovered a 3-hop chain mid-build. Cost a significant refactor. The lesson: produce data flow diagrams and walk them with stakeholders before writing a single line of code.",
    },
  },
  {
    slug: "contact-centre-xdr-integration",
    title: "Contact Centre & XDR Integration",
    tagline: "Post-acquisition integration bridging Genesys and Taegis XDR",
    gradient: "linear-gradient(135deg, #0a2e2e, #0a1a2e)",
    tech: ["NestJS", "TypeScript", "Genesys Cloud SDK", "OAuth2 PKCE", "DynamoDB", "AWS SQS", "EventBridge", "Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions"],
    metric: "Zero",
    metricLabel: "Downtime on Launch",
    links: { live: null, source: null },
    content: {
      overview:
        "Post-acquisition, Sophos needed to bridge two separate platforms — Genesys Cloud (contact centre) and Taegis XDR (security cases). 500+ analysts across 6 global SOCs were switching between systems to claim a case in Genesys, then pivot to Taegis to investigate. I built the integration service from scratch as sole engineer — a NestJS microservice that unified both platforms behind a single API surface.",
      challenge:
        "The hardest problem was identity resolution across three completely different systems. A Genesys agent ID is not an email address, and an email address is not a Taegis XDR principal. Every case assignment required a 3-hop lookup chain — and each hop could fail independently with a different failure mode. On top of that, Genesys query jobs are asynchronous with eventual consistency, and every event needed to be processed reliably with no data loss.",
      whatIBuilt: [
        "NestJS REST API proxying Genesys Cloud behind a Sophos-standard OpenAPI contract with runtime request/response validation",
        "3-hop identity resolution chain: Genesys assigneeId → email lookup → Taegis XDR principal, with per-HTTP-status error handling (404 silent skip, 401/403 token refresh + retry, 5xx exponential backoff)",
        "AWS SQS event pipeline consuming EventBridge messages with DLQ retry semantics for guaranteed at-least-once delivery",
        "OAuth2 Authorization Code + PKCE login flow with DynamoDB-backed session storage and TTL",
        "Genesys OAuth2 client credentials token caching with preemptive revalidation at 50% token lifetime",
        "Idempotent event processing — duplicate SQS messages don't cause double assignments",
        "Blue-green Kubernetes deployment via Helm and Terraform with automatic rollback on failed health checks",
      ],
      architecture:
        "NestJS service sits between Genesys Cloud and Taegis XDR. Inbound: SQS consumers receive EventBridge events for work item changes. Outbound: REST calls to Taegis XDR APIs for case assignment sync. Identity resolution runs as a middleware layer — caching resolved identities in DynamoDB to avoid repeated 3-hop lookups. Auth tokens cached in Redis. Deployed on EKS via Helm charts and Terraform across dev/qa/prod environments.",
      impact: [
        "26,000+ enterprise customers unified across Genesys and Taegis XDR",
        "Zero downtime deployment via blue-green Kubernetes strategy",
        "Zero critical production incidents post-launch",
        "Eliminated analyst context switching between two separate systems",
        "DLQ-backed event pipeline ensures no assignment events are lost",
      ],
      learned:
        "I started coding before fully understanding the identity model — assumed Genesys IDs mapped directly to XDR principals. The actual 3-hop chain emerged mid-build and required a significant refactor. Now I always produce a data flow diagram and walk it with stakeholders before writing a single line of implementation code.",
    },
  },
  {
    slug: "phishing-resistant-auth",
    title: "Phishing-Resistant Auth Migration",
    tagline: "Full FIDO2/WebAuthn migration with zero user lockouts",
    gradient: "linear-gradient(135deg, #1a0a2e, #2e0a4e)",
    tech: ["React", "TypeScript", "Python", "Flask", "FIDO2", "WebAuthn", "AWS Cognito", "Lambda", "DynamoDB", "Redis", "Ruby on Rails", "LaunchDarkly", "JWT"],
    metric: "Zero",
    metricLabel: "User Lockouts",
    links: { live: null, source: null },
    content: {
      overview:
        "TOTP-based MFA is vulnerable to phishing — a user can be tricked into entering their 6-digit code on a fake login page. With 500+ enterprise security analysts accessing the MDR portal daily, this was a real exposure. I led the full migration from TOTP to FIDO2 hardware security keys (YubiKeys) — spanning React frontend, Python/Flask auth backend, AWS Cognito Lambda chain, and Ruby/Rails middleware — with a phased 1%→100% LaunchDarkly rollout and zero user lockouts.",
      challenge:
        "The migration had to be completely invisible to users in production — 24/7 security operations meant zero tolerance for lockouts or downtime. Multiple production edge cases emerged: YubiKey attestation format variations (fido-u2f vs packed), Chrome version-specific WebAuthn API differences, a Redis TTL race condition that could expire a challenge mid-authentication, and YubiKeys shipped without PIN set. Every edge case had to be caught before it hit 100% of users.",
      whatIBuilt: [
        "Full WebAuthn registration and authentication flows in React — attestation options parsing, credential serialization, challenge-response for both registration and login",
        "Python/Flask backend (secops-auth-service) implementing FIDO2 attestation verification, credential storage in DynamoDB, and Redis challenge state with atomic TTL management",
        "AWS Cognito custom auth Lambda chain (define → create → verify) orchestrating SRP → FIDO2/TOTP → token issuance",
        "Step-up auth dialog in React supporting both FIDO2 and TOTP as second factors for high-risk operations (broadcasts, security profile changes)",
        "LaunchDarkly phased rollout 1%→5%→10%→50%→100% with CloudWatch monitoring and automatic pause thresholds",
        "Ruby on Rails Rack middleware enforcing step-up auth on sensitive routes",
        "Legacy auth stack deprecation — removed old login provider, TOTP form, and password reset flow, eliminating unnecessary proxy hop",
      ],
      architecture:
        "React frontend calls secops-auth-service (Python/Flask) for WebAuthn registration and authentication. secops-auth-service orchestrates AWS Cognito custom auth via 3 Lambda triggers. Challenge state stored in Redis with 180s TTL and atomic check-and-set. FIDO2 credentials stored in DynamoDB. Step-up JWTs issued for sensitive operations and validated by Ruby on Rails Rack middleware across 4 backend services. LaunchDarkly controls rollout percentage per user segment.",
      impact: [
        "Zero user lockouts across 500+ enterprise users during full migration",
        "Phishing exposure eliminated — hardware keys are physically non-transferable",
        "Faster authentication — removed extra proxy hop from legacy auth stack",
        "Legacy auth stack deprecated — reduced codebase from ~10K to ~5K lines",
        "Phased rollout caught 4 production edge cases before they reached 100% of users",
      ],
      learned:
        "Production edge cases in auth systems are non-obvious until you hit real hardware. YubiKey attestation format differences, browser version quirks, and Redis race conditions all emerged only under real conditions. The phased rollout with hard pause thresholds (>2% error rate = stop) was what made zero lockouts possible — not luck.",
    },
  },
  {
    slug: "mdr-analyst-platform",
    title: "MDR Analyst Platform",
    tagline: "Modular domain-driven React SPA for 6 global SOCs",
    gradient: "linear-gradient(135deg, #0a2e1a, #0a1a0a)",
    tech: ["React 18", "TypeScript", "Turborepo", "Jotai", "GraphQL", "Apollo", "WebSockets", "Storybook", "LaunchDarkly", "FullStory", "PrimeReact", "Material UI"],
    metric: "26,000+",
    metricLabel: "Organizations",
    links: { live: null, source: null },
    content: {
      overview:
        "The MDR Analyst Platform is Sophos's primary SOC operations console — a React 18 SPA used by security analysts to manage cases, investigate detections, run discovery queries, and review customer accounts across 26,000+ organizations. I was one of two engineers owning the entire frontend, responsible for shipping features across all major domain modules: Cases, Case Dashboard, Discover, Accounts, Reports, and Management. I also contributed to 4 Ruby backend services when the work required it.",
      challenge:
        "Two engineers owning a production SPA serving 6 global SOCs with 24/7 uptime requirements — every change had to ship cleanly, with no regressions, across a provider-heavy React architecture and a multi-service Ruby backend. The frontend had a session-centric security model (idle timers, max session enforcement, cross-tab sync, step-up auth) that had to work perfectly at all times. On the backend, changes touched Sinatra services, Rails 7 APIs, and cross-database FDW queries — all without a dedicated backend team.",
      whatIBuilt: [
        "Feature development across all major domain modules — Cases, Case Dashboard, Discover, Accounts, Reports, and Management — as one of two frontend engineers on the SPA",
        "Step-up auth dialog (FIDO2 and TOTP) triggered via Axios interceptor on 419/420 responses — user completes hardware key or TOTP challenge before sensitive operations proceed",
        "Session lifecycle management — idle timer prompts, max session enforcement from JWT auth_time, and cross-tab state sync to keep all open tabs consistent",
        "Discover query flow — async search initiation, polling for job completion, and results/schema/source handling in provider state",
        "Auth routes in db-accessor (Sinatra BFF) — FIDO/MFA toggle flows, user detail retrieval, step-up auth checks for distributed query categories, and audit logging for MS Entra response actions",
        "Versioned API routes in db-casemanager (Sinatra + ActiveRecord) — expanded Central routes v2/v3/v4 with OpenAPI docs, database migrations for case status and detection workflows",
        "MDR case filtering in db-casemanager-hub (Rails 7) — attribute filters, pinned/global pin behavior, response-time filtering, and customer access mapping via Cognito → Endpoint Intel",
        "Customer audit trail and filtering in db-endpointintel (Sinatra + ActiveRecord) — date-range filtering on audit trail endpoint and license level support in customer filter service",
      ],
      architecture:
        "React 18 SPA with domain-based module structure under src/features/* — Cases, Dashboard, Discover, Accounts, Reports, Management. Provider-first architecture: AppProvider → AccessorProvider → AuthProvider → ProfileProvider → PresenceProvider compose the authenticated shell. Thin Axios API client layer (Accessor, AuthService, Discover) with shared token headers. Session state in sessionStorage with idle/max-session enforcement. Feature flags via LaunchDarkly, session recording via FullStory. Backend: db-accessor (Sinatra BFF) aggregates across 4 microservices. db-casemanager (Sinatra + PostgreSQL) handles multi-tenant case management. db-casemanager-hub (Rails 7 + FDW) aggregates MDR case data cross-database. db-endpointintel (Sinatra + PostgreSQL) serves fleet management and customer operations.",
      impact: [
        "26,000+ organizations protected — platform runs 24/7 across 6 global SOCs",
        "One of two engineers owning the entire React SPA — every domain module shipped by this team",
        "Step-up auth enforced across all sensitive operations — FIDO2 and TOTP as second factors",
        "Versioned API surface (v2/v3/v4) expanded and documented with OpenAPI specs",
        "MDR case filtering covering attribute filters, pinned cases, response-time, and customer access — core to analyst daily workflow",
      ],
      learned:
        "Being one of two people responsible for a production platform serving global security operations teaches you to think carefully before every change. There's no safety net of a large team to catch mistakes — every PR needs to be right. It also taught me that full-stack ownership is different from full-stack knowledge: knowing how to navigate 4 different backend services (Sinatra, Rails, FDW, SQS) and a complex React SPA simultaneously is a skill in itself.",
    },
  },
  {
    slug: "endpoint-security-mobile",
    title: "Endpoint Security Mobile App",
    tagline: "Cross-platform React Native security app for iOS and Android",
    gradient: "linear-gradient(135deg, #1a1a2e, #0a0a1a)",
    tech: ["React Native", "TypeScript", "JavaScript", "Expo", "iOS", "Android"],
    metric: "2",
    metricLabel: "Platforms Shipped",
    links: { live: null, source: null },
    content: {
      overview:
        "Mobile security application installed on customer endpoint devices — servers, workstations, and mobile devices — giving security administrators real-time visibility and control over device protection. Built with React Native and Expo for a single TypeScript codebase running on both iOS and Android. I spent 2 years shipping and maintaining production features across protection workflows, device management, and real-time threat alerting.",
      challenge:
        "Mobile security apps have constraints that web apps don't — sensitive auth tokens must live in device Keychain/Keystore (not AsyncStorage), WebSocket connections drain battery, large APK/IPA sizes kill install rates, and the app must function in degraded mode when offline. Keeping the codebase truly cross-platform (no platform-specific forks) while respecting iOS and Android design conventions required constant discipline.",
      whatIBuilt: [
        "Real-time protection status dashboard — engine state, last scan time, threat count, definitions date — with WebSocket-driven live updates for threat detection events",
        "Remote device actions — trigger quick/full scans with live progress tracking, network isolation, and policy assignment",
        "Device enrollment via QR code scanning — parse enrollment token, register device with Endpoint Intel API, store auth token in device Keychain/Keystore via Expo SecureStore",
        "Adaptive polling — poll interval scales from 10s (full battery) to 60s (below 20%) to reduce battery drain",
        "Offline-first caching — last known policy and device state cached locally, served as fallback when API is unreachable",
        "App size optimization — code splitting, WebP image compression, tree-shaking — reduced bundle from 120MB to 45MB",
      ],
      architecture:
        "React Native + Expo shared codebase for iOS and Android. API client communicates with Endpoint Intel REST API using Bearer tokens stored in Expo SecureStore. WebSocket connection provides real-time threat and scan progress updates. Local cache via AsyncStorage for offline fallback. Platform-specific modules (Keychain on iOS, Keystore on Android) abstracted behind Expo SecureStore API. CI/CD builds separate IPA and APK from the same codebase.",
      impact: [
        "iOS and Android shipped from a single TypeScript codebase",
        "2 years of production development and maintenance",
        "App size reduced from 120MB to 45MB — directly improving install rates",
        "Adaptive polling reduced battery drain by ~40% on low-battery devices",
        "Security administrators can isolate a compromised device in seconds from anywhere",
      ],
      learned:
        "Mobile development punishes assumptions carried over from web. AsyncStorage is not encrypted — learned this before storing anything sensitive. WebSockets on mobile need adaptive heartbeats or the OS kills the connection. The offline-first mindset has to be baked in from day one, not bolted on later.",
    },
  },
  {
    slug: "ea-play-social-platform",
    title: "EA Play Social Platform",
    tagline: "Real-time social features for millions of EA Play subscribers",
    gradient: "linear-gradient(135deg, #2e0a0a, #1a0a1a)",
    tech: ["React", "TypeScript", "GraphQL", "WebSockets", "WebDriverIO", "Selenium", "Jenkins", "PowerShell"],
    metric: "Millions",
    metricLabel: "Subscribers",
    links: { live: null, source: null },
    content: {
      overview:
        "EA Play is Electronic Arts' subscription social platform serving millions of subscribers across titles like Apex Legends, FIFA, and Madden. I built real-time social features — messaging, presence tracking, and friend systems — and created the Cube test automation framework, an internal WebDriverIO extension adopted by 25+ engineers across the org.",
      challenge:
        "Real-time social features at millions-of-users scale requires WebSocket connections that stay alive, presence state that stays consistent across regions, and message delivery that works even when recipients are temporarily offline. For Cube, the challenge was making multi-browser orchestration reliable enough for CI — controlling two browser instances in sync, handling async WebSocket events in tests, and keeping the framework simple enough that non-QA engineers could write tests.",
      whatIBuilt: [
        "Real-time messaging (1-to-1 and group) using WebSockets — message delivery, read receipts, typing indicators, and offline message queuing via Redis pub/sub",
        "Presence tracking system — heartbeat-based online/offline state with 90s timeout, Redis distributed cache for cross-region sync, and instant broadcast to all mutual friends on status change",
        "Friend system — add/accept/block/remove with real-time WebSocket notifications for all state transitions",
        "Cube framework — WebDriverIO extension enabling multi-browser orchestration, custom async wait conditions for WebSocket events, network throttling simulation, and parallel test execution",
        "PowerShell scripts automating VM provisioning for Cube test environments — spin up Hyper-V VMs, install Chrome + WebDriver, and tear down after test runs",
        "Jenkins CI/CD pipeline integration running Cube tests in parallel on every commit",
      ],
      architecture:
        "React frontend connects to WebSocket server for real-time events. Presence state stored in Redis (distributed cache) with heartbeat TTL. Messages persisted to database for offline users. Cube framework extends WebDriverIO with custom commands for multi-browser coordination and WebSocket event assertions. Jenkins pipeline provisions VM pool via PowerShell, runs Cube test suites in parallel, then tears down VMs.",
      impact: [
        "Millions of subscribers using real-time messaging and presence features daily",
        "Cube adopted by 25+ engineers across EA engineering teams",
        "Test cycle time reduced from 3 hours to 30 minutes",
        "Bug catch rate improved from ~60% to ~95% with automated test coverage",
        "CI/CD pipeline fully automated — tests run on every commit",
      ],
      learned:
        "Building test infrastructure is product work. Cube only got adopted because it was easy to use — custom wait conditions that felt natural, clear error messages when tests failed, and examples that covered real scenarios. A framework nobody uses is worthless. I spent as much time on DX as on the core engine.",
    },
  },
];
