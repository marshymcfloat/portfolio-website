import { ParamValue } from "next/dist/server/request/params";

export interface CardStackItem {
  image: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  projectId: string;
  title: string;
  stackImages: CardStackItem[];
  images: string[];
  description: string;
  githubLink: string;
  liveLink: string;
  technology: string[];
}

export const projects: Project[] = [
  {
    slug: "htu-evaluation-system",
    projectId: "CPSTN1",
    title: "HTU's Instructor Evaluation System",
    stackImages: [
      { image: "/SubjectEval.png", title: "", description: "" },
      { image: "/DashboardEval.png", title: "", description: "" },
      {
        image: "/LandingEval.png",
        title: "Evaluation System",
        description: "HTU's Instructor Evaluation System.",
      },
    ],
    images: [
      "/LandingEval.png",
      "/DashboardEval.png",
      "/SubjectEval.png",
      "/QuestionsEval.png",
    ],
    description:
      "A system that we made for our finals capstone project. The purpose of this is to help our university to have a better way to evaluate and receive summary grades of their own instructors.",
    githubLink: "https://github.com/marshymcfloat/evaluationSystem",
    liveLink: "",
    technology: ["Vanilla Javascript", "MongoDB", "NodeJS", "ExpressJS", "EJS"],
  },
  {
    slug: "beautyfeel-system",
    projectId: "BTYFL1",
    title: "BeautyFeel Business System",
    stackImages: [
      { image: "/SalesBF.png", title: "", description: "" },
      { image: "/DashboardBF.png", title: "", description: "" },
      {
        image: "/LandingBF.png",
        title: "BeautyFeel",
        description: "BeautyFeel Business System",
      },
    ],
    images: [
      "/LandingBF.png",
      "/DashboardBF.png",
      "/ManageBF.png",
      "/SalesBF.png",
    ],
    description:
      "A comprehensive business management system designed for beauty salons. It includes features for appointment scheduling, client management, inventory tracking, and sales reporting. The goal was to create a clean, intuitive interface to streamline daily operations for salon owners and staff.",
    githubLink: "https://github.com/marshymcfloat/beautyfeel_prisma",
    liveLink: "https://beautyfeel.net",
    technology: [
      "Next.JS",
      "TailwindCSS",
      "ReduxJS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
    ],
  },
  {
    slug: "clarity-hire",
    projectId: "CLRTY1",
    title: "ClarityHire - Smart Recruitment System",
    stackImages: [
      { image: "/RecruiterDashboardClarity.png", title: "", description: "" },
      { image: "/JobApplicationClarity.png", title: "", description: "" },
      { image: "/UserDashboardClarity.png", title: "", description: "" },
      {
        image: "/LandingClarity.png",
        title: "ClarityHire",
        description: "An AI-Powered B2B Job-Board System",
      },
    ],
    images: [
      "/LandingClarity.png",
      "/UserDashboardClarity.png",
      "/JobApplicationClarity.png",
      "/RecruiterDashboardClarity.png",
    ],
    description:
      "ClarityHire is a full-stack recruitment management system designed to streamline the hiring process. It helps HR teams and employers efficiently handle job postings, applicant tracking, and interview evaluations — all within a unified dashboard. It leverages AI-powered features via Google Gemini to assist in candidate analysis and decision-making.",
    githubLink: "https://github.com/marshymcfloat/Clarity-Hire",
    liveLink: "https://new-clarity-hire.vercel.app/",
    technology: [
      "Next.js (Fullstack)",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redux",
      "Google Gemini AI",
    ],
  },
  {
    slug: "talent-nest",
    projectId: "TLNTNST1",
    title: "Talent Nest",
    stackImages: [
      { image: "/TNApplicants.png", title: "", description: "" },
      { image: "/TNDashboard.png", title: "", description: "" },
      {
        image: "/TNLanding.png",
        title: "Talent Nest",
        description: "A platform for discovering and nurturing new talent.",
      },
    ],
    images: ["/TNLanding.png", "/TNDashboard.png", "/TNApplicants.png"],
    description:
      "A comprehensive platform for discovering, tracking, and nurturing new talent. It provides tools for managing applications, scheduling interviews, and tracking candidate progress, streamlining the recruitment process for talent scouts and HR professionals.",
    githubLink: "https://github.com/marshymcfloat/new_talent_nest",
    liveLink: "https://talentnesttt.vercel.app/",
    technology: [
      "Next.JS",
      "TailwindCSS",
      "ReduxJS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
    ],
  },
];

export const getProjectBySlug = (slug: ParamValue): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
