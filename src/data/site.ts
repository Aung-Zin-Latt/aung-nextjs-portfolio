/**
 * Single source of truth for portfolio copy and structured resume data.
 * Update links (cvUrl, github) when you publish assets.
 */

export const siteConfig = {
  name: "Aung Zin Latt",
  shortName: "Aung Zin Latt",
  title: "AUNG ZIN LATT",
  tagline: "Enterprise & Product Delivery",
  /** Portrait in /public (served from site root). */
  profileImage: "/profile/AUNG-ZIN-LATT-aungzinlatt007@gmail.com.png",
  /** PDF under /public/files (URL path from site root). */
  cvUrl: "/files/Aung-Zin-Latt-Full-Stack-Engineer-SG-On-site.pdf",
  location: {
    label: "Da Nang City, Vietnam",
    detail: "Open to Singapore on-site · global remote · Vietnam/Malaysia on-site",
  },
  workAuthorization: "S Pass / Employment Pass eligible",
  availabilityBadge: "Open to opportunities · Singapore on-site · global remote · Vietnam/Malaysia on-site",
  contact: {
    email: "aungzinlatt007@gmail.com",
    whatsapp: "+65 989 26222",
    phone: "+84 385 591 842",
    linkedin: "https://www.linkedin.com/in/liam-dev",
    linkedinLabel: "linkedin.com/in/liam-dev",
    portfolio: "https://aungzinlatt.netlify.app",
    portfolioLabel: "aungzinlatt.netlify.app",
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
    yearsIndustry: "7+",
  },
  social: {
    github: "https://github.com/liam-dev",
    githubLabel: "github.com/liam-dev",
  },
  summary: {
    headline:
      "Senior Full-Stack Engineer with 7+ years hands-on development and enterprise system ownership across Singapore security operations, workflow automation, and customer-facing applications.",
    body: [
      "Full-stack production expertise in PHP, Laravel, JavaScript, React.js, Vue.js, Next.js, Node.js, and TypeScript — from Metropolis Security Systems (Singapore) through ITVISIONHUB product delivery in Myanmar.",
      "Delivers business-critical systems on AWS, DigitalOcean, Docker, and CI/CD with focus on scalable architecture, release reliability, and maintainability. At Metropolis, reduced operational processing overhead by 65%, cut production downtime by 40%, and supported platforms processing 1,000+ daily attendance records across 75+ active Singapore client sites (100+ total deployments).",
    ],
  },
  hero: {
    roleTitle: "Senior Full-Stack Engineer",
    roleSubtitle: "Laravel · React.js · Node.js · AWS · Enterprise & Product Delivery",
    proofPoints: [
      "7+ years (2018 – present)",
      "55% less manual roster coordination",
      "85% release automation (CI/CD)",
      "50,000+ monthly operational records",
      "75+ active Singapore client sites",
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
      "Real-time operations platform for site-based day and night shift rostering across condos and commercial sites — planning officers by rank with attendance, patrolling, office management, and leave workflows.",
    role: "Senior Full-Stack Engineer — end-to-end ownership of rostering services, iREP attendance integration, and operational reporting.",
    backendHighlights: [
      "Automated scheduling, overtime approval, and leave management with compliance reporting and audit-ready manpower summaries (daily, weekly, monthly, yearly)",
      "Integrated iREP for officer attendance clock-in/out on Laravel and Node.js backends, reducing manual roster coordination by 55%",
      "Multi-database architecture (MySQL, MSSQL, MongoDB) with REST APIs and Vue.js (TypeScript) operations dashboards",
    ],
    features: [
      "Real-time rostering dashboard",
      "Attendance & iREP integration",
      "Overtime & leave workflows",
      "Compliance reporting",
      "Audit-ready history",
    ],
    challenges:
      "Coordinating accurate attendance and overtime across distributed Singapore sites while keeping rosters solvent — required robust validation, idempotent jobs, and traceable audit trails.",
    results:
      "Reduced operational processing overhead by 65% and centralized rostering for large officer deployments across 75+ active Singapore client sites.",
    stack: ["Laravel", "Node.js", "Vue.js", "TypeScript", "REST APIs", "MySQL", "MSSQL", "MongoDB", "AWS"],
  },
  {
    title: "Visitor Management System (VMS)",
    category: "Enterprise",
    coverImage: "/projects/vms.png",
    overview:
      "End-to-end visitor and shared-space operations: pre-registration, check-in, host notification, badge printing, access control, facility booking, and LPR entry tracking.",
    role: "Senior Full-Stack Engineer — Laravel services, React (TypeScript) UI, and third-party hardware integrations.",
    backendHighlights: [
      "Third-party door lock integration with digital handover/takeover forms for KTV, dining, and shared facility rooms",
      "Separate LPR (license plate recognition) workflows for automated car and motorcycle entry tracking",
      "PDPA-aligned visitor logging with compliance-ready check-in/out tracking and host notification automation",
    ],
    features: [
      "Pre-registration & host notifications",
      "Badge printing pipeline",
      "Facility booking & door lock integration",
      "LPR car & motorcycle entry",
      "Access-control handoff",
    ],
    challenges:
      "Balancing low-latency check-in at peak traffic with dependable hardware integrations — implemented resilient queues and retries around third-party access endpoints.",
    results:
      "Improved audit readiness by 35% through PDPA-aligned workflows and structured visitor lifecycle APIs.",
    stack: ["React.js", "TypeScript", "Laravel", "REST APIs", "MySQL", "AWS", "DigitalOcean"],
  },
  {
    title: "Metro-Officer Application (PWA)",
    category: "Web Platform",
    coverImage: "/projects/emetro.png",
    overview:
      "Officer-facing progressive web app for schedules, leave requests, announcements, feedback, and employment details on desktop and mobile.",
    role: "Senior Full-Stack Engineer — Vue/Inertia frontend, Laravel APIs, and Bitbucket CI/CD to AWS/DigitalOcean.",
    backendHighlights: [
      "Offline schedule caching and role-based access for distributed field staff",
      "Push-style announcements and leave-request workflows on MSSQL-backed services",
      "Production releases automated through Bitbucket CI/CD pipelines",
    ],
    features: ["Responsive scheduling", "Leave requests", "Announcements", "Feedback loops", "Offline schedule caching"],
    challenges:
      "Field connectivity variability — prioritized resilient UI states, minimal round-trips, and pragmatic caching for critical roster data.",
    results:
      "Officers accessed up-to-date schedules and HR information without a native app store deployment across Singapore operational sites.",
    stack: ["Vue.js", "Inertia", "Laravel", "MSSQL", "Bitbucket CI/CD", "AWS", "DigitalOcean", "PWA"],
  },
  {
    title: "DNI E-commerce Platform (Daily Need Items)",
    category: "E-commerce",
    coverImage: "/projects/dnistore.webp",
    overview:
      "Full order-lifecycle commerce platform: catalog, cart, checkout, warehouse management, delivery tracking, invoicing, and customer favorites.",
    role: "Software Engineer (Full-Stack) — Laravel/Livewire services, JavaScript/TypeScript UI, and fulfillment workflows on MySQL, AWS, and DigitalOcean.",
    backendHighlights: [
      "End-to-end order, inventory, and warehouse stock workflows with automated billing and fulfillment notifications",
      "Microservices-oriented architecture with Laravel, Node.js, React.js, TypeScript, and GraphQL service boundaries",
      "MySQL query optimization and streamlined checkout workflows for catalog and billing performance",
    ],
    features: ["Catalog & cart", "Warehouse management", "Delivery tracking", "Invoice automation", "Customer favorites"],
    challenges:
      "Unifying divergent delivery provider contracts behind a single internal interface so operations did not need bespoke logic per vendor.",
    results:
      "Supported full browse-to-fulfillment order lifecycle with automated billing and reliable production operations — honest technical ownership without inflated scale claims.",
    stack: [
      "Laravel",
      "Livewire",
      "Node.js",
      "React.js",
      "TypeScript",
      "GraphQL",
      "Docker",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "DigitalOcean",
    ],
  },
  {
    title: "Online Training Platform",
    category: "Learning Platform",
    overview:
      "Learning platform with course catalog, module delivery, enrollment workflows, and student progress tracking for software engineering training programs.",
    role: "Software Engineer (Full-Stack) — reusable content management, enrollment flows, and Laravel/Livewire delivery surfaces.",
    backendHighlights: [
      "Reusable content management for structured software engineering training programs",
      "Enrollment workflows and progress tracking across React.js, Vue.js, and TypeScript frontends",
      "Secure coding curriculum modules (validation, session hygiene, common web vulnerabilities)",
    ],
    features: [
      "Course catalog & modules",
      "Enrollment workflows",
      "Progress tracking",
      "Instructor content tools",
    ],
    challenges:
      "Keeping lessons current across fast-moving frameworks while preserving pedagogical consistency — structured content pipelines and versioned lesson assets.",
    results:
      "Launched training and invoice modules alongside DNI delivery, with automated billing document generation on Laravel and Livewire.",
    stack: ["Laravel", "Livewire", "React.js", "Vue.js", "TypeScript", "MySQL"],
  },
  {
    title: "Invoice System",
    category: "Business Tool",
    coverImage: "/projects/mmeasyinvoice.png",
    overview:
      "Invoice issuance, branding customization, payment tracking, and reporting for daily business operations — mobile-friendly for field operators.",
    role: "Software Engineer (Full-Stack) — Laravel/Livewire billing workflows and automated document generation.",
    backendHighlights: [
      "Automated billing document generation and payment status workflows",
      "Branding and templating pipeline (logo/theming) per tenant",
      "Operational reporting exports for finance stakeholders",
    ],
    features: ["Branded invoices", "Payment tracking", "Mobile layouts", "Operational reporting"],
    challenges:
      "Accurate financial reporting while keeping schemas maintainable for finance stakeholders and iterative Livewire UX delivery.",
    results:
      "Finance teams replaced spreadsheet workflows with a single auditable billing system with automated document generation.",
    stack: ["Laravel", "Livewire", "MySQL"],
  },
  {
    title: "Internship E-commerce Application",
    category: "Internship",
    coverImage: "/projects/coolfancyshop.png",
    overview:
      "Six-month university internship capstone at ITVISIONHUB: Laravel e-commerce application with catalog, cart, and checkout supporting 100+ SKUs.",
    role: "Software Engineering Intern — Laravel backend, Bootstrap UI, and GitHub-based team delivery.",
    backendHighlights: [
      "Hands-on feature development and bug fixes on PHP, Laravel, JavaScript, and MySQL",
      "React Native mobile UI components and navigation flows alongside the core Laravel stack",
      "Earned full-time offer after internship through consistent production-style delivery",
    ],
    features: ["Product catalog", "Cart & checkout", "React Native UI exposure"],
    challenges:
      "First production-grade team workflow — focused on predictable MVC boundaries, migration hygiene, and readable handoff docs.",
    results: "Delivered a functioning e-commerce application and converted internship into a full-time engineering role at ITVISIONHUB.",
    stack: ["PHP", "Laravel", "Bootstrap", "JavaScript", "MySQL", "React Native", "GitHub"],
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
    period: "09/2023 – 08/2025",
    role: "Senior Full-Stack Engineer",
    company: "Metropolis Security Systems Pte. Ltd.",
    location: "Singapore · On-site",
    points: [
      "Led end-to-end delivery of 3 production platforms (eRoster, VMS, Metro-Officer PWA) on Laravel and Node.js backends, integrating iREP for officer attendance clock-in/out — reducing manual roster coordination by 55% and operational processing overhead by 65%.",
      "Architected PDPA-aligned compliance workflows with audit trails and access-control integrations, improving audit readiness by 35%.",
      "Delivered facility booking management with third-party door lock integration and digital handover/takeover forms for KTV, dining, and shared facility rooms; built separate LPR workflows for car and motorcycle entry tracking.",
      "Scaled production environments on AWS and DigitalOcean processing 50,000+ monthly operational records, automating 85% of releases via GitHub Actions and Bitbucket CI/CD.",
      "Partnered with project manager, operations stakeholders, and engineering colleagues to translate business requirements into production releases and ongoing platform support.",
    ],
    stack: [
      "Laravel",
      "Node.js",
      "Vue.js",
      "React.js",
      "TypeScript",
      "REST APIs",
      "MySQL",
      "MSSQL",
      "MongoDB",
      "AWS",
      "DigitalOcean",
      "Docker",
      "CI/CD",
    ],
  },
  {
    period: "09/2020 – 08/2023",
    role: "Software Engineer (Full-Stack)",
    company: "ITVISIONHUB Co., Ltd.",
    location: "Yangon, Myanmar · On-site",
    points: [
      "Built end-to-end DNI E-commerce (catalog, cart, checkout, warehouse, delivery, invoicing) with Laravel, Livewire, and JavaScript/TypeScript UI workflows on MySQL, AWS, and DigitalOcean — supporting full order lifecycle from browse to fulfillment.",
      "Launched Online Training Platform and Invoice System modules with reusable content management, enrollment workflows, and automated billing document generation on Laravel and Livewire.",
      "Improved catalog and checkout performance through MySQL query optimization, streamlined order workflows, and automated billing processes.",
    ],
    stack: [
      "Laravel",
      "Livewire",
      "React.js",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "MySQL",
      "AWS",
      "DigitalOcean",
      "Docker",
    ],
  },
  {
    period: "01/2019 – 08/2020",
    role: "Junior Full-Stack Developer",
    company: "ITVISIONHUB Co., Ltd.",
    location: "Yangon, Myanmar · On-site",
    points: [
      "Promoted to full-time after internship and shipped production features across DNI e-commerce and internal business systems on Laravel, MySQL, and Bootstrap.",
      "Shipped catalog, checkout, and order management features across iterative releases on Laravel and MySQL, supporting DNI e-commerce production operations.",
    ],
    stack: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "PHP"],
  },
  {
    period: "05/2018 – 11/2018",
    role: "Software Engineering Intern",
    company: "ITVISIONHUB Co., Ltd.",
    location: "Yangon, Myanmar · On-site",
    points: [
      "Completed 6-month internship during final-year university, delivering an e-commerce application with Laravel, MySQL, and Bootstrap supporting 100+ SKUs.",
      "Delivered hands-on feature development and bug fixes on PHP, Laravel, JavaScript, MySQL, and GitHub-based team workflows — earning a full-time offer after the internship.",
      "Implemented React Native mobile UI components and navigation flows, applying cross-platform development patterns alongside the core Laravel stack.",
    ],
    stack: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "React Native", "GitHub", "PHP"],
  },
];

export const summaryHighlights = [
  {
    title: "Singapore enterprise delivery",
    description:
      "Led 3 production platforms at Metropolis Security Systems — rostering, visitor management, and officer PWA — across 75+ active Singapore client sites (100+ total deployments).",
  },
  {
    title: "Measurable operations impact",
    description:
      "55% reduction in manual roster coordination, 65% lower operational processing overhead, 35% improved audit readiness, and 40% reduction in production downtime.",
  },
  {
    title: "Cloud & release reliability",
    description:
      "AWS and DigitalOcean production ownership processing 50,000+ monthly operational records with 85% of releases automated via GitHub Actions and Bitbucket CI/CD.",
  },
  {
    title: "Full-stack product breadth",
    description:
      "Laravel, Vue.js, React.js, Next.js, Node.js, and TypeScript across enterprise security ops and customer-facing commerce/training products.",
  },
  {
    title: "Polyglot data & APIs",
    description:
      "MySQL, MSSQL, MongoDB, PostgreSQL, Redis, and RabbitMQ with REST APIs, GraphQL, and integration adapters for access control and fulfillment.",
  },
  {
    title: "Market-neutral availability",
    description:
      "Singapore on-site (S Pass / EP eligible), global remote (APAC / EMEA / US-friendly time zones), and Vietnam on-site with openness to Malaysia relocation.",
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
      "AWS (EC2, RDS, S3, Route 53, SES, ELB, CodePipeline, CloudWatch) and DigitalOcean production ops",
      "85% release automation via GitHub Actions and Bitbucket CI/CD pipelines",
      "Docker packaging and Kubernetes exposure for containerized service delivery",
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
      "Partnered with PMs, operations stakeholders, and engineers on production releases",
      "Translated security-operations requirements into shippable platform increments",
      "Secure coding discipline from training platform delivery into enterprise features",
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
    title: "Core Technologies",
    skills: [
      { name: "Laravel / PHP", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "Vue.js / Inertia", level: "Expert" },
      { name: "React.js / Next.js", level: "Advanced" },
      { name: "TypeScript / JavaScript", level: "Advanced" },
      { name: "Livewire", level: "Advanced" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, RDS, S3, CI/CD)", level: "Advanced" },
      { name: "DigitalOcean", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "GitHub Actions / Bitbucket CI/CD", level: "Expert" },
      { name: "Nginx / Apache", level: "Advanced" },
    ],
  },
  {
    title: "Architecture & APIs",
    skills: [
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
      { name: "RBAC / Modular architecture", level: "Advanced" },
      { name: "Event-driven / queue workflows", level: "Advanced" },
      { name: "Component architecture (UI)", level: "Expert" },
    ],
  },
  {
    title: "Database & Infrastructure",
    skills: [
      { name: "MySQL", level: "Expert" },
      { name: "MSSQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis / RabbitMQ", level: "Advanced" },
      { name: "Query optimization / schema design", level: "Expert" },
    ],
  },
  {
    title: "Additional Experience",
    skills: [
      { name: "Tailwind CSS / Bootstrap", level: "Expert" },
      { name: "React Native (exposure)", level: "Advanced" },
      { name: "Agile SDLC", level: "Advanced" },
      { name: "Postman / API testing", level: "Advanced" },
      { name: "Git / SourceTree", level: "Advanced" },
      { name: "Legacy jQuery/Ajax maintenance", level: "Advanced" },
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
    metric: "55%",
    label: "Less manual roster work",
    description: "Reduced manual roster coordination through iREP attendance integration and automated scheduling across Singapore operational sites.",
  },
  {
    metric: "85%",
    label: "Release automation",
    description: "Automated releases via GitHub Actions and Bitbucket CI/CD while scaling AWS and DigitalOcean environments processing 50,000+ monthly operational records.",
  },
  {
    metric: "1,000+",
    label: "Daily attendance records",
    description: "Supported internal platforms processing high-volume attendance data across 75+ active Singapore client sites (100+ total deployments).",
  },
  {
    metric: "Open",
    label: "Multi-market roles",
    description: "Singapore on-site (S Pass / EP), global remote, and Vietnam/Malaysia on-site — available immediately from Da Nang, Vietnam.",
  },
] as const;

export const whyHireReasons = [
  {
    title: "Enterprise system ownership",
    description:
      "Led end-to-end delivery of eRoster, VMS, and Metro-Officer PWA at Metropolis — production context where downtime directly impacts officers and facilities.",
  },
  {
    title: "Defensible outcomes",
    description:
      "65% lower operational processing overhead, 35% improved audit readiness, and 40% reduction in production downtime — metrics tied to real Singapore deployments.",
  },
  {
    title: "Full-stack + cloud delivery",
    description:
      "Laravel, Vue.js, React.js, Node.js, and TypeScript on AWS/DigitalOcean with Docker, CI/CD, and pragmatic release automation.",
  },
  {
    title: "Integration-heavy platforms",
    description:
      "iREP attendance, door lock hardware, LPR entry tracking, and PDPA-aligned audit workflows — not just CRUD admin panels.",
  },
  {
    title: "Product engineering breadth",
    description:
      "DNI e-commerce, training platform, and invoice systems at ITVISIONHUB — honest ownership of order lifecycle and billing automation.",
  },
  {
    title: "Collaborative senior IC",
    description:
      "Partnered with project managers, operations stakeholders, and engineering colleagues to ship production releases and ongoing platform support.",
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
    description:
      "Primary differentiator — hands-on Metropolis enterprise delivery; S Pass / Employment Pass eligible; immediate availability.",
  },
  {
    label: "Global remote",
    description:
      "Open to senior full-stack roles with APAC, EMEA, or US-friendly time zones and async collaboration maturity.",
  },
  {
    label: "Vietnam on-site",
    description: "Based in Da Nang City, Vietnam — available for on-site engineering roles locally.",
  },
  {
    label: "Malaysia relocation",
    description: "Open to on-site opportunities in Malaysia when scope aligns with senior IC ownership.",
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