export interface Project {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  location?: string;
  status: "live" | "shipped" | "archived" | "in-progress";
  pastJob?: boolean;
  cover: string;
  gallery: string[];
  accent: string;
  story: {
    problem: string;
    decision: string;
    outcome: string;
  };
  stack: string[];
  links: {
    live?: string;
    repo?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "service-flow",
    index: "01",
    title: "ServiceFlow",
    tagline:
      "A full-stack SaaS for service businesses — bookings, payroll, attendance, and payments in one calm dashboard. Built for the Philippine salon industry.",
    year: "2026",
    location: "Palawan, PH",
    status: "live",
    cover: "/serviceFlow/hero.png",
    gallery: [
      "/serviceFlow/hero.png",
      "/serviceFlow/ownerDashboard.png",
      "/serviceFlow/employee-portal.png",
    ],
    accent: "#10b981",
    story: {
      problem:
        "Salons, spas, and barbershops in the Philippines stitch their operations together from spreadsheets, group chats, and luck — bookings on Messenger, payroll in Excel, attendance on paper. The cost is errors, double-bookings, and owners who can't take a day off without something breaking.",
      decision:
        "I built a single SaaS that runs the whole shop: public booking pages per business slug, service and package management, owner + employee dashboards, attendance with clock-in/leave tracking, payroll with payslips, customer records, and cash + QRPH (PayMongo) payment paths. Under the hood: email workflows, background cron jobs, a transactional outbox, and an audit log.",
      outcome:
        "Live at serviceflow.store — the most architecturally complete project I've shipped. Next.js 16 App Router, Prisma 7 + Postgres, NextAuth, TanStack Query, Sentry, Vitest. Built to actually run a business, not to impress a portfolio review.",
    },
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "NextAuth",
      "TanStack Query",
      "PayMongo",
      "Sentry",
    ],
    links: {
      live: "https://www.serviceflow.store/",
      repo: "https://github.com/marshymcfloat/service-flow",
    },
  },
  {
    slug: "jay-rockwell",
    index: "02",
    title: "Jay Rockwell Entertainment",
    tagline:
      "One of my best builds at Nettsaga (last job) — a synthwave-styled site for a Philadelphia event production crew running lights, sound, and atmosphere since 1997.",
    year: "2024",
    location: "Philadelphia, US",
    status: "live",
    pastJob: true,
    cover: "/rockwell/hero.png",
    gallery: ["/rockwell/hero.png", "/rockwell/services.png"],
    accent: "#d4ff00",
    story: {
      problem:
        "Jay Rockwell Entertainment has been doing lighting, sound, and atmosphere for Philadelphia clubs and bars since 1997 — but the brand had no web presence that matched the energy of what actually happens at a venue at 1am.",
      decision:
        "I built around a single bold idea: the site should feel like the inside of a club. Synthwave aesthetic — acid yellow on near-black, retrowave grid horizon, heavy condensed display type, services presented as four bold disciplines with full-bleed inquiry bars.",
      outcome:
        "Live at jay-rockwell-entertainment.vercel.app — the brand's home on the web for an active Philadelphia entertainment outfit. One of the strongest builds I delivered during my time at my previous company.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: {
      live: "https://jay-rockwell-entertainment.vercel.app/",
    },
  },
  {
    slug: "ak-anleggstjenester",
    index: "03",
    title: "AK Anleggstjenester AS",
    tagline:
      "Another standout from my last job at Nettsaga — a Norwegian construction-services and equipment rental brand. Industrial weight, dark editorial palette with a warm orange accent.",
    year: "2024",
    location: "Norway",
    status: "live",
    pastJob: true,
    cover: "/ak-anleggstjenester/showcase.png",
    gallery: [
      "/ak-anleggstjenester/showcase.png",
      "/ak-anleggstjenester/services.png",
    ],
    accent: "#f97316",
    story: {
      problem:
        "AK Anleggstjenester AS rents vehicles, machines, and equipment to the Norwegian construction industry. The brand needed a web presence that conveyed industrial trust and capability — not the cookie-cutter rental-catalog template you find everywhere else.",
      decision:
        "I built around a heavy editorial dark palette with a single warm orange accent. Featured-vehicle showcases with stat callouts (HP, drivetrain, range), category-organized rental listings with full-bleed imagery, and a navigation bar that reads as confidently as the equipment itself.",
      outcome:
        "Live at ak-anleggstjenester-as-tawny.vercel.app — serving as the brand's home on the web for an active Norwegian rental operation. The second of my standout builds from my time at my previous company.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: {
      live: "https://ak-anleggstjenester-as-tawny.vercel.app/",
    },
  },
  {
    slug: "mesterlanda",
    index: "04",
    title: "Mesterlanda AS",
    tagline:
      "Another from my last job at Nettsaga — a Norwegian carpentry firm. The brand needed weight, so I built the site around a single word, 'BUILD,' set at the scale of a billboard.",
    year: "2024",
    location: "Asker, Norway",
    status: "live",
    pastJob: true,
    cover: "/mesterlanda-as/hero.png",
    gallery: ["/mesterlanda-as/hero.png", "/mesterlanda-as/services.png"],
    accent: "#ea580c",
    story: {
      problem:
        "Mesterlanda AS has been doing carpentry — full turnkey builds — in the Asker region since 2004. The brand had craft but no web presence that matched the precision of their work.",
      decision:
        "Built around one bold word: 'BUILD' set at billboard scale over a photograph of an actual job site. Heavy condensed type, a single warm orange accent, top bar that reads as a business card. The site should feel like the brand has nothing to prove.",
      outcome:
        "Live at mesterlanda-as.vercel.app — the web home for a working Norwegian carpentry firm operating since 2004.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: { live: "https://mesterlanda-as.vercel.app/" },
  },
  {
    slug: "tomrer-fjellheim",
    index: "05",
    title: "Tømrer Fjellheim",
    tagline:
      "Built at Nettsaga (last job) — a Norwegian carpenter in Mjøndalen. The site is one bold typographic moment: the brand name set so big it doesn't fit on the screen.",
    year: "2024",
    location: "Mjøndalen, Norway",
    status: "live",
    pastJob: true,
    cover: "/tomrer-fjellheim/hero.png",
    gallery: ["/tomrer-fjellheim/hero.png", "/tomrer-fjellheim/services.png"],
    accent: "#b45309",
    story: {
      problem:
        "Tømrer Fjellheim is a carpenter working homes and commercial buildings around Drammen. The site needed to do what good carpentry does — speak loudly with very little ornamentation.",
      decision:
        "Two-line title stack — 'TØMRER' / 'FJELLHEIM' — set across the viewport with a worked photograph behind, a bottom info ticker reading as a marquee of credentials. One amber accent, no decoration.",
      outcome:
        "Live at tomrer-fjellheim.vercel.app. The brand's web presence for a working Norwegian carpenter, established 2023.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: { live: "https://tomrer-fjellheim.vercel.app/" },
  },
  {
    slug: "best-partner",
    index: "06",
    title: "Best Partner",
    tagline:
      "The most refined of my Nettsaga builds (last job) — a Norwegian apparatus and equipment company since 1991. I broke from the dark-bold pattern and went editorial: cream paper, serif display, calibrated to feel like a luxury fact sheet.",
    year: "2024",
    location: "Trøndelag, Norway",
    status: "live",
    pastJob: true,
    cover: "/best-partner/hero.png",
    gallery: ["/best-partner/hero.png", "/best-partner/services.png"],
    accent: "#8b7355",
    story: {
      problem:
        "Best Partner has been quietly delivering apparatus and equipment in Trøndelag since 1991. The brief was different from the construction-firm sites — this one needed elegance, not weight. The brand sells calibration, not muscle.",
      decision:
        "Light cream background, editorial serif display, side annotations with stats (33 employees, 07 industries, focus: Trøndelag), a black-and-white treated photograph of the actual products in use. Tagline: 'Apparatus, calibrated. Ritual, undisturbed.'",
      outcome:
        "Live at best-partner.vercel.app — the most refined of the past-job builds. Proof that the same developer who ships brutalist club sites can also write a luxury fact sheet.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: { live: "https://best-partner.vercel.app/" },
  },
  {
    slug: "beautyfeel-system",
    index: "07",
    title: "BeautyFeel",
    tagline:
      "A salon was tracking appointments in a notebook. I gave them a system.",
    year: "2024",
    location: "Palawan, PH",
    status: "live",
    cover: "/bfPublicLanding.png",
    gallery: [
      "/bfPublicLanding.png",
      "/bfServices.png",
      "/bfBookings.png",
      "/LandingBF.png",
      "/DashboardBF.png",
      "/SalesBF.png",
      "/ManageBF.png",
    ],
    accent: "#c9837a",
    story: {
      problem:
        "A growing beauty salon in Palawan was running its entire operation out of a physical notebook — bookings, services, staff schedules, sales. Double-bookings were routine. Sales numbers were guesses.",
      decision:
        "I built a single source of truth: a Next.js app with a typed Postgres schema modeled around the way the owner actually thought about her business — clients, services, slots, staff — not the way a generic SaaS imagined her.",
      outcome:
        "Live in production at beautyfeel.net. Handles daily bookings, staff payouts, and sales reporting for a real salon that still depends on it tonight.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redux", "Tailwind"],
    links: {
      live: "https://beautyfeel.net",
      repo: "https://github.com/marshymcfloat/beautyfeel_prisma",
    },
  },
  {
    slug: "clarity-hire",
    index: "08",
    title: "ClarityHire",
    tagline:
      "A recruitment platform that decides who gets seen — built to be slower, on purpose.",
    year: "2024",
    status: "live",
    cover: "/LandingClarity.png",
    gallery: [
      "/LandingClarity.png",
      "/UserDashboardClarity.png",
      "/JobApplicationClarity.png",
      "/RecruiterDashboardClarity.png",
    ],
    accent: "#8aa9c9",
    story: {
      problem:
        "Most hiring tools optimize for recruiter throughput — sort, filter, reject. The candidate disappears into a queue. I wanted to build the opposite: a tool that forced consideration.",
      decision:
        "AI-assisted candidate analysis via Google Gemini, but with the AI surfacing reasons to look closer, not reasons to filter out. The recruiter dashboard intentionally shows fewer applicants per screen.",
      outcome:
        "A full-stack ATS handling postings, applicant tracking, interview scheduling, and AI-assisted evaluation — with an opinion about how hiring should feel.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redux",
      "Google Gemini",
    ],
    links: {
      live: "https://new-clarity-hire.vercel.app/",
      repo: "https://github.com/marshymcfloat/Clarity-Hire",
    },
  },
  {
    slug: "alessence",
    index: "09",
    title: "Alessence",
    tagline:
      "An AI study platform for the students who can't afford to fail the bar.",
    year: "2025",
    status: "live",
    cover: "/AlessenceLanding.png",
    gallery: [
      "/AlessenceLanding.png",
      "/AlessenceDashboard.png",
      "/AlessenceExamGenerator.png",
      "/AlessenceExamForm.png",
    ],
    accent: "#7a9a8c",
    story: {
      problem:
        "Accountancy and law students in the Philippines prep for the CPA and Bar with stacks of PDFs, group chats, and luck. The tools they're given are spreadsheets and prayer.",
      decision:
        "A Turborepo monorepo: Next.js frontend, NestJS backend, Postgres. Visual task management, AI-generated practice exams from their own materials via Google Gemini, file storage organized by subject — not by date dumped.",
      outcome:
        "Live at alessence.vercel.app. Architecturally my most ambitious project — modular backend, type-safe edges, room to grow into a real product.",
    },
    stack: ["Turborepo", "NestJS", "Next.js", "PostgreSQL", "Prisma", "Gemini"],
    links: {
      live: "https://alessence.vercel.app",
      repo: "https://github.com/marshymcfloat/Alessence",
    },
  },
  {
    slug: "talent-nest",
    index: "10",
    title: "TalentNest",
    tagline: "A scout's notebook, made for the people they're scouting.",
    year: "2024",
    status: "live",
    cover: "/TNLanding.png",
    gallery: ["/TNLanding.png", "/TNDashboard.png", "/TNApplicants.png", "/TNJobs.png"],
    accent: "#a89b7a",
    story: {
      problem:
        "Talent scouts juggle applicants across spreadsheets, emails, and memory. The candidate experience is an afterthought.",
      decision:
        "A unified platform for discovering, tracking, and nurturing applicants — with attention paid to both sides of the table.",
      outcome:
        "Application management, interview scheduling, and progress tracking in one place. Shipped and live.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redux", "Tailwind"],
    links: {
      live: "https://talentnesttt.vercel.app/",
      repo: "https://github.com/marshymcfloat/new_talent_nest",
    },
  },
  {
    slug: "htu-evaluation-system",
    index: "11",
    title: "HTU Evaluation",
    tagline:
      "My capstone. A system my university actually uses to grade its own teachers.",
    year: "2023",
    status: "shipped",
    cover: "/LandingEval.png",
    gallery: [
      "/LandingEval.png",
      "/DashboardEval.png",
      "/SubjectEval.png",
      "/QuestionsEval.png",
      "/StudentsEval.png",
    ],
    accent: "#a07a8c",
    story: {
      problem:
        "Holy Trinity University ran instructor evaluations on paper — forms passed around, manually tallied, summaries that took weeks. The feedback loop was broken before it began.",
      decision:
        "Vanilla JS, Node, Express, MongoDB, EJS — deliberately boring, because the team had to maintain it after I graduated. A clean evaluation flow, automatic summaries, dashboard for admins.",
      outcome:
        "Final capstone. Shipped to the university. The first thing I built that someone other than my classmates used.",
    },
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "EJS"],
    links: {
      repo: "https://github.com/marshymcfloat/evaluationSystem",
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
