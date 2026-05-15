/**
 * Single source of truth for portfolio copy and structured resume data.
 * Update links (cvUrl, github) when you publish assets.
 */

export const siteConfig = {
  name: "Aung Zin Latt",
  shortName: "Aung Zin Latt",
  title: "AUNG ZIN LATT",
  tagline: "Full-Stack Development",
  /** Portrait in /public (served from site root). */
  profileImage: "/profile/profile.jpeg",
  /** PDF under /public/files (URL path from site root). */
  cvUrl: "/files/AUNG-ZIN-LATT.pdf",
  location: {
    label: "Singapore (on-site)",
    detail: "S Pass / EP",
  },
  availabilityBadge: "Singapore on-site · S Pass / EP",
  contact: {
    email: "aungzinlatt007@gmail.com",
    whatsapp: "+65 989 26222",
    phone: "+84 385 591 842",
    linkedin: "https://www.linkedin.com/in/liam-dev",
    linkedinLabel: "linkedin.com/in/liam-dev",
    portfolio: "https://aungzinlat.netlify.app",
    portfolioLabel: "aungzinlat.netlify.app",
  },
  compensation: "Expected: SGD 4,500 - 7,000 (negotiable)",
  noticePeriod: "Immediate",
  personal: {
    nationality: "Myanmar",
    dateOfBirth: "07 Jun 1998",
    gender: "Male",
    motivation: "Make it work, make it fast, make it right.",
  },
  leadership: {
    label: "Leadership",
    items: [{ org: "Taxila Institute / Meiktila", period: "2018" }],
  },
  stats: {
    yearsHandsOn: "7+",
    yearsIndustry: "6+",
  },
  social: {
    github: "https://github.com/Aung-Zin-Latt",
    githubLabel: "github.com/Aung-Zin-Latt",
  },
  summary: {
    headline:
      "Senior full-stack engineer with 7+ years of hands-on development and 6+ years delivering production systems.",
    body: [
      "I lead delivery of mission-critical products end-to-end — from Laravel/Vue and React/Next services to AWS infrastructure, Docker, and Kubernetes. Recent focus: rostering, visitor management, and field PWAs for enterprise security operations.",
      "I care about clean architecture, mentoring, rigorous reviews, and owning the lifecycle: implementation, CI/CD, and operational stability — including polished public-facing work (this portfolio ships on Next.js + TypeScript).",
    ],
  },
  hero: {
    proofPoints: [
      "7+ years hands-on development",
      "Microservices",
      "High-volume systems",
      "AWS production ownership",
      "Real-time processing",
    ],
    techBadges: [
      "PHP",
      "Laravel",
      "Node.js",
      "Vue.js",
      "React",
      "Next.js",
      "AWS",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Microservices",
      "SQL/NoSQL",
      "REST & GraphQL",
    ],
  },
} as const;

export type ProjectCategory =
  | "All"
  | "Enterprise"
  | "E-commerce"
  | "Web Platform"
  | "Learning Platform"
  | "Business Tool"
  | "Internship";

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  /** Served from `/public`; e.g. `/projects/screenshot.webp` */
  coverImage?: string;
  overview: string;
  role: string;
  backendHighlights: string[];
  features: string[];
  challenges: string;
  results: string;
  stack: string[];
  isPrivate?: boolean;
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "Enterprise",
  "E-commerce",
  "Web Platform",
  "Learning Platform",
  "Business Tool",
  "Internship",
];

export const projects: Project[] = [
  {
    title: "Rostering Management System (eRoster)",
    category: "Enterprise",
    coverImage: "/projects/eroster.png",
    overview:
      "Enterprise platform for planning and deploying security officers — scheduling, attendance, overtime, and audit trails in one system.",
    role: "Senior full-stack engineer — owned services, data model, and integrations across rostering, attendance, and payroll workflows.",
    backendHighlights: [
      "Service boundaries for scheduling, attendance ingestion, and overtime rules with traceable audit history",
      "Automation for roster generation and payroll handoff, reducing manual reconciliation",
      "Multi-database footprint (MySQL, MSSQL, MongoDB) with clear ownership per domain",
    ],
    features: [
      "Automated shift scheduling",
      "Rostering Dashboard",
      "Attendance Dashboard",
      "Attendance & overtime integration",
      "Notifications & operational alerts",
      "Audit-ready history",
    ],
    challenges:
      "Coordinating accurate attendance and overtime across sites while keeping the roster solvent — required robust validation, idempotent jobs, and clear escalation paths for edge cases.",
    results:
      "Centralized rostering for large officer deployments with fewer scheduling conflicts and faster payroll readiness.",
    stack: [
      "PHP",
      "Laravel",
      "Node.js",
      "Vue.js",
      "MySQL",
      "MSSQL",
      "MongoDB",
      "AWS",
      "GitHub",
    ],
  },
  {
    title: "Visitor Management System (VMS)",
    category: "Enterprise",
    coverImage: "/projects/vms.png",
    overview:
      "End-to-end visitor journeys: pre-registration, on-site check-in, badge printing, tracking, and access-control integration.",
    role: "Full-stack engineer — Laravel services, React UI flows, and integrations with access-control endpoints.",
    backendHighlights: [
      "Normalized visitor lifecycle APIs with printable badge pipeline",
      "Integration hooks for physical access systems and audit logging",
      "Role-aware dashboards for facility operators",
    ],
    features: [
      "Real Time Visitor Tracking",
      "Pre-registration & host notifications",
      "Badge printing pipeline",
      "Facility Booking System with 3rd Party Doorlock",
      "Access-control handoff",
    ],
    challenges:
      "Balancing low-latency check-in at peak traffic with dependable hardware integrations — implemented resilient queues and retries around third-party access endpoints.",
    results:
      "Faster, traceable visitor processing and fewer manual overrides at security desks.",
    stack: ["PHP", "Laravel", "React.js", "Tailwind CSS", "MySQL", "AWS", "GitHub"],
  },
  {
    title: "Metro-Officer Application (PWA)",
    category: "Web Platform",
    coverImage: "/projects/emetro.png",
    overview:
      "Progressive web app for officers — schedules, availability, announcements, feedback, and employment details. Optimized for reliable mobile use.",
    role: "Senior engineer — performance-focused frontend and APIs supporting offline-tolerant flows where applicable.",
    backendHighlights: [
      "APIs tuned for mobile latency and concise payloads",
      "Caching and asset strategy for responsive PWA shells",
      "Secure session handling for distributed workforce devices",
    ],
    features: ["Responsive scheduling", "Availability updates", "Announcements", "Feedback loops"],
    challenges:
      "Field connectivity variability — prioritized resilient UI states, minimal round-trips, and pragmatic caching for critical roster data.",
    results:
      "Officers accessed up-to-date schedules and HR information without relying on a native app store deployment.",
    stack: ["PHP", "Laravel", "Inertia", "Vue.js", "PWA", "REST", "AWS"],
  },
  {
    title: "DNI (Daily Need Items) — E-commerce",
    category: "E-commerce",
    coverImage: "/projects/dnistore.webp",
    overview:
      "Full commerce stack: catalog, cart, favorites, checkout, delivery, invoices — built for scale across web and mobile experiences.",
    role: "Full-stack developer — Laravel/Livewire services, storefront performance, and payment-ready flows.",
    backendHighlights: [
      "Order and fulfillment services with provider-normalized delivery hooks",
      "Invoice generation and customer communications",
      "Operational dashboards for merchandising teams",
    ],
    features: ["Catalog & search", "Cart & checkout", "Delivery tracking", "Invoice automation"],
    challenges:
      "Unifying divergent delivery provider contracts behind a single internal interface so merchandising did not need bespoke logic per vendor.",
    results:
      "Reliable end-to-end purchasing with fewer manual interventions on fulfillment and billing.",
    stack: [
      "PHP",
      "Laravel",
      "Livewire",
      "jQuery",
      "Bootstrap",
      "MySQL",
      "DigitalOcean",
      "AWS",
      "GitHub",
    ],
  },
  {
    title: "ITVISIONHUB Online Training Course",
    category: "Learning Platform",
    overview:
      "Course platform for modern web stacks with emphasis on secure coding (SQLi, CSRF, XSS, validation, session hygiene) and toolchain depth.",
    role: "Full-stack developer — curriculum tooling, media/course structure, and student-facing UX across React/Vue/Livewire surfaces.",
    backendHighlights: [
      "Modular course delivery with progress tracking",
      "Secure-by-default examples wired into Laravel",
      "Multi-database support (MySQL, SQLite) for environment flexibility",
    ],
    features: [
      "Multi-technology tracks (HTML → Laravel → Vue/React/Node)",
      "Security modules with runnable samples",
      "Instructor content tools",
    ],
    challenges:
      "Keeping lessons current across fast-moving frameworks while preserving pedagogical consistency — structured content pipelines and versioned lesson assets.",
    results:
      "Consistent, security-aware training delivery for cohorts learning full-stack engineering.",
    stack: [
      "PHP",
      "Laravel",
      "Livewire",
      "React",
      "Vue",
      "MySQL",
      "SQLite",
      "AWS",
      "GitHub",
    ],
  },
  {
    title: "Invoice System",
    category: "Business Tool",
    coverImage: "/projects/mmeasyinvoice.png",
    overview:
      "Invoice lifecycle: create, brand (logo/theming), send, collect, and report — mobile-friendly for operators in the field.",
    role: "Full-stack engineer — Inertia/Vue UX with Laravel APIs on MSSQL, Bitbucket CI to AWS.",
    backendHighlights: [
      "Branding and templating pipeline per tenant",
      "Payment tracking with reporting exports",
      "Inertia/Vue stack for fast iteration on finance workflows",
    ],
    features: ["Branded PDFs", "Payment status", "Mobile layouts", "Operational reporting"],
    challenges:
      "Accurate financial reporting across currencies/tax variants while keeping MSSQL schemas maintainable for finance stakeholders.",
    results:
      "Finance teams replaced spreadsheet workflows with a single auditable system.",
    stack: ["PHP", "Laravel", "Inertia", "Vue.js", "Tailwind CSS", "MSSQL", "Bitbucket", "AWS"],
  },
  {
    title: "Cool Fancy Shop (Internship)",
    category: "Internship",
    coverImage: "/projects/coolfancyshop.png",
    overview:
      "Six-month internship capstone: Laravel-powered e-commerce with catalog, cart, and checkout — Bootstrap storefront and MySQL persistence.",
    role: "Intern developer — Laravel services, Bootstrap UI, and relational modeling with disciplined Git workflow.",
    backendHighlights: [
      "RESTful checkout and catalog flows backed by Laravel and MySQL",
      "Responsive Bootstrap storefront with AJAX-enhanced UX where appropriate",
      "Git-based delivery and foundational deployment hygiene (DigitalOcean)",
    ],
    features: ["Product catalog", "Cart & checkout", "Admin basics"],
    challenges:
      "First end-to-end production-style build — prioritized clear MVC boundaries, migration hygiene, and readable handoff docs.",
    results: "Shipped a functioning storefront demonstrating full-stack fundamentals.",
    stack: ["PHP", "Laravel", "Bootstrap", "HTML5", "CSS3", "JavaScript", "MySQL", "Git", "DigitalOcean"],
    isPrivate: false,
  },
];

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    period: "2023 - 2025",
    role: "Senior Software Engineer (Full-Stack)",
    company: "Metropolis Security Systems Pte. Ltd.",
    location: "Singapore",
    points: [
      "Owned end-to-end delivery of the core product suite (eRoster, Visitor Management System, Metro-Officer PWA).",
      "Architected and operated Docker/Kubernetes microservices on AWS (EC2, RDS, S3, CI/CD pipelines, observability-aligned ops).",
      "Automated rostering and payroll handoffs; standardized Laravel/Vue/Inertia and React stacks with measurable integration reliability.",
      "Mentored engineers, raised code-review quality, and documented runbooks so security-operations workflows survived team rotation.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "Vue.js",
      "React",
      "Node.js",
      "Docker",
      "Kubernetes",
      "AWS",
      "MySQL",
      "MongoDB",
      "MSSQL",
    ],
  },
  {
    period: "2019 - 2023",
    role: "Senior Full-Stack Developer",
    company: "ITVISIONHUB Co., Ltd.",
    location: "Yangon, Myanmar",
    points: [
      "Delivered DNI e-commerce, training platform, and invoice systems with PHP, Laravel, Node.js, Vue/React, and Livewire.",
      "Owned integrations across MySQL/MSSQL/SQLite/MongoDB with pragmatic cloud hosting on DigitalOcean and AWS.",
      "Collaborated across design tooling (Figma/Wireframes) for courseware and product marketing surfaces.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "Livewire",
      "Inertia",
      "Vue.js",
      "React.js",
      "Node.js",
      "MySQL",
      "MSSQL",
      "AWS",
      "DigitalOcean",
    ],
  },
  {
    period: "May 2018 - Nov 2018",
    role: "Intern — Full-Stack Developer",
    company: "Studio AMK Co., Ltd.",
    location: "Yangon, Myanmar",
    points: [
      "Delivered “Cool Fancy Shop” e-commerce capstone end-to-end under a six-month internship program.",
      "Implemented Laravel services, Bootstrap storefront (HTML5/CSS3/JS), and MySQL persistence with Git-based workflow.",
    ],
    stack: ["PHP", "Laravel", "Bootstrap", "HTML5", "CSS3", "JavaScript", "MySQL", "Git", "DigitalOcean"],
  },
];

export const summaryHighlights = [
  {
    title: "Full-stack delivery",
    description:
      "Production features across Laravel, Vue/Inertia, React/Next.js, and Node — from admin consoles to PWAs and public marketing sites.",
  },
  {
    title: "Platform & data",
    description:
      "Schema design across MySQL, MSSQL, PostgreSQL, MongoDB, and SQLite with pragmatic normalization.",
  },
  {
    title: "APIs & security",
    description:
      "REST and GraphQL services with disciplined validation, auth middleware, and operational observability.",
  },
  {
    title: "Cloud & containers",
    description:
      "AWS ownership (EC2, RDS, S3, CI/CD) plus hands-on Docker/Kubernetes deployments.",
  },
  {
    title: "Automation & SDLC",
    description:
      "GitHub/Bitbucket CI/CD, Agile delivery, mentoring, and clear documentation for handoff.",
  },
  {
    title: "Singapore on-site",
    description:
      "Seeking on-site roles in Singapore with S Pass / EP eligibility and immediate availability.",
  },
] as const;

export const backendExpertiseAreas = [
  {
    title: "Service architecture",
    points: [
      "Microservices with Docker/Kubernetes and clear API contracts",
      "Laravel service layers with disciplined validation and policies",
      "Queue-backed workflows for rostering, payroll, and integrations",
    ],
  },
  {
    title: "Data engineering",
    points: [
      "Polyglot persistence: MySQL, MSSQL, PostgreSQL, MongoDB, SQLite",
      "Indexing and migration hygiene for high-churn operational data",
      "Auditable entities for rostering, visitors, and billing",
    ],
  },
  {
    title: "Cloud & DevOps",
    points: [
      "AWS (EC2, RDS, S3, CI/CD) with pragmatic cost controls",
      "CI/CD on GitHub Actions and Bitbucket pipelines",
      "Container packaging for repeatable staging/production parity",
    ],
  },
  {
    title: "Frontend platforms",
    points: [
      "Vue/React stacks with Inertia or SPA patterns when appropriate",
      "Mobile-first PWAs for distributed field users",
      "Design systems with Tailwind CSS and component reuse",
    ],
  },
  {
    title: "API design",
    points: [
      "REST and GraphQL with consistent error envelopes",
      "Integration adapters for third-party access, payments, and delivery",
      "Postman collections and contract tests for partner onboarding",
    ],
  },
  {
    title: "Leadership & collaboration",
    points: [
      "Mentoring juniors and elevating code review quality",
      "Cross-functional clarity — translating security operations needs into software",
      "Documentation that survives team rotation",
    ],
  },
] as const;

export type SkillLevel = "Expert" | "Advanced";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export const skillGroups: {
  title: string;
  skills: SkillItem[];
}[] = [
  {
    title: "Backend",
    skills: [
      { name: "PHP / Laravel", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
      { name: "Livewire / Inertia", level: "Advanced" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", level: "Expert" },
      { name: "React / Next.js", level: "Advanced" },
      { name: "TypeScript / JavaScript", level: "Advanced" },
      { name: "Tailwind CSS / Bootstrap", level: "Expert" },
      { name: "HTML5 / CSS3", level: "Expert" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "MySQL", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "MSSQL", level: "Advanced" },
      { name: "SQLite", level: "Advanced" },
    ],
  },
  {
    title: "Platform",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "AWS", level: "Advanced" },
      { name: "CI/CD (GitHub/Bitbucket)", level: "Expert" },
      { name: "Git / SourceTree", level: "Advanced" },
    ],
  },
];

export const architecturePatterns = [
  {
    title: "Microservices on Kubernetes",
    description:
      "Containerized services on AWS with independent deploys, observability, and guarded data boundaries.",
    nodes: ["Client", "Ingress", "Auth", "Roster", "VMS", "Worker", "RDS", "S3"],
  },
  {
    title: "Event-driven operations",
    description:
      "Queues for roster changes, payroll exports, and integration retries — failures isolated from user flows.",
    nodes: ["Producer", "Queue", "Retry", "Consumer", "Audit", "Notifications", "DB"],
  },
  {
    title: "API & integration layer",
    description:
      "Versioned REST/GraphQL with adapters for visitor access, HR feeds, and finance exports.",
    nodes: ["Gateway", "Validation", "Service", "ACL", "Providers", "Observability"],
  },
  {
    title: "Progressive web delivery",
    description:
      "PWAs for field officers with performance budgets and resilient offline-first UX patterns.",
    nodes: ["PWA Shell", "Service Worker", "Cache", "API", "Push", "Telemetry"],
  },
  {
    title: "Data resilience",
    description:
      "Polyglot storage with backups, replication awareness, and pragmatic caching for hot paths.",
    nodes: ["App", "Pool", "Primary", "Replica", "Object Store", "Cache"],
  },
] as const;

export const achievements = [
  {
    metric: "Mission-critical",
    label: "Security operations",
    description: "Delivered rostering, visitor, and field tooling used daily by distributed teams.",
  },
  {
    metric: "Microservices",
    label: "Docker & Kubernetes",
    description: "Hands-on container orchestration paired with AWS infrastructure ownership.",
  },
  {
    metric: "Polyglot data",
    label: "SQL + NoSQL",
    description: "Modeled workloads across MySQL, MSSQL, MongoDB, PostgreSQL, and SQLite.",
  },
  {
    metric: "Availability",
    label: "Singapore · remote",
    description: "On-site Singapore (S Pass / EP) as primary focus; selective senior full-remote scopes when alignment is mutual.",
  },
] as const;

export const whyHireReasons = [
  {
    title: "Operates like an owner",
    description:
      "End-to-end accountability — from discovery with stakeholders to production support and iterative tuning.",
  },
  {
    title: "Production hardened",
    description:
      "Experience in environments where downtime directly impacts officers and facilities — favors graceful degradation.",
  },
  {
    title: "Modern full-stack breadth",
    description:
      "Balances Laravel/Vue strengths with React/Next and Node services when teams need heterogeneous stacks.",
  },
  {
    title: "Security-aware delivery",
    description:
      "Training background emphasizes secure coding patterns; carries that discipline into enterprise features.",
  },
  {
    title: "Mentor & multiplier",
    description:
      "Develops juniors, documents decisions, and keeps reviews focused on risk and customer outcomes.",
  },
  {
    title: "Singapore-forward",
    description:
      "Primary focus on on-site Singapore (S Pass / EP) with clear compensation bands; open to selective remote roles at senior scope.",
  },
] as const;

export const interpersonalStrengths = [
  "Structured communicator across engineering and operations stakeholders",
  "Self-driven in ambiguous requirements — clarifies outcomes before implementation",
  "Comfortable owning SDLC rituals: testing discipline, CI/CD, and production monitoring",
  "Analytical debugging — traces issues across services, data stores, and integrations",
] as const;

export const workModes = [
  {
    label: "Singapore on-site",
    description: "Primary focus — S Pass / EP pathways with immediate availability.",
  },
  {
    label: "Hybrid flexibility",
    description: "Open to hybrid if anchored on meaningful in-person collaboration.",
  },
  {
    label: "Global collaboration",
    description: "Experienced coordinating async workflows across Myanmar → Singapore delivery.",
  },
  {
    label: "Remote / contract (selective)",
    description:
      "Open to verified remote engagements or defined contract outcomes when scope matches senior IC ownership.",
  },
] as const;

export const openSourceHighlights = [
  {
    name: "Reference architectures",
    description:
      "Modular Laravel services, queue strategies, and AWS deployment notes curated from production playbooks.",
    tag: "Architecture",
  },
  {
    name: "Integration kits",
    description:
      "Reusable patterns for roster feeds, visitor access hardware, and payroll connectors (shared privately under NDA).",
    tag: "Integrations",
  },
  {
    name: "Mentoring labs",
    description:
      "Workshops distilled from ITVISIONHUB coursework on secure coding and modern JavaScript stacks.",
    tag: "Education",
  },
] as const;

export const devOpsHighlights = [
  {
    title: "AWS",
    items: [
      "EC2, RDS, S3, Route 53, SES, ELB, Elastic Beanstalk, CodePipeline, CloudWatch, Backup",
    ],
  },
  {
    title: "Containers & orchestration",
    items: ["Docker packaging", "Kubernetes operations for production services"],
  },
  {
    title: "Edge & hosting",
    items: ["DigitalOcean", "Apache / Nginx configuration"],
  },
] as const;