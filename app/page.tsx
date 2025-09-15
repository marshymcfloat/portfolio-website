"use client";

import CardStack from "@/components/CardStack";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { projectSliceAction } from "@/Slice/ProjectSlice";

const BeautyFeelStack = [
  { image: "/SalesBF.png", title: "", description: "" },
  { image: "/DashboardBF.png", title: "", description: "" },
  {
    image: "/LandingBF.png",
    title: "BeautyFeel",
    description: "BeautyFeel Business System",
  },
];

const BeautyFeelForSlice = {
  projectId: "BTYFL1",
  title: "BeautyFeel Business System",
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
};

const TalentNestStack = [
  { image: "/TNApplicants.png", title: "", description: "" },
  { image: "/TNDashboard.png", title: "", description: "" },
  {
    image: "/TNLanding.png",
    title: "Talent Nest",
    description: "A platform for discovering and nurturing new talent.",
  },
];
const TalentNestForSlice = {
  projectId: "TLNTNST1",
  title: "Talent Nest",
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
};

const CapstoneStack = [
  { image: "/SubjectEval.png", title: "", description: "" },
  { image: "/DashboardEval.png", title: "", description: "" },
  {
    image: "/LandingEval.png",
    title: "Capstone Evaluation System",
    description: "HTU's Instructor Evaluation System.",
  },
];

const CapstoneForSlice = {
  projectId: "CPSTN1",
  title: "HTU's Instructor Evaluation System",
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
};

const XStack = [
  { image: "/XHomepage.png", title: "", description: "" },
  { image: "/XLogin.png", title: "", description: "" },
  {
    image: "/XLanding.png",
    title: "Self-made X Clone ",
    description: "Clone of X app without AI Assistance..",
  },
];
export default function Home() {
  const route = useRouter();
  const dispatch = useDispatch();

  const XStackForSlice = {
    projectId: "XCLONE1",
    title: "Self-made X Clone",
    images: ["/XLanding.png", "/XHomepage.png", "/XLogin.png"],
    description:
      "A clone of the X (formerly Twitter) application, built from scratch to practice front-end and back-end skills. This project focuses on core social media features like posting, following, and a real-time feed.",
    githubLink: "https://github.com/your-repo/x-clone",
    liveLink: "",
    technology: ["Next.JS", "TailwindCSS", "Prisma", "NextAuth", "TypeScript"],
  };

  return (
    <main className="flex flex-col min-h-screen w-full mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 mt-24">
        <CardStack
          items={CapstoneStack}
          onClick={() => {
            dispatch(projectSliceAction.selectProject(CapstoneForSlice));
            route.push("/project/capstone");
          }}
        />
        <CardStack
          items={BeautyFeelStack}
          onClick={() => {
            dispatch(projectSliceAction.selectProject(BeautyFeelForSlice));
            route.push("/project/beautyfeel");
          }}
        />
        <CardStack
          items={XStack}
          onClick={() => {
            dispatch(projectSliceAction.selectProject(XStackForSlice));
            route.push("/project/x-clone");
          }}
        />
        <CardStack
          items={TalentNestStack}
          onClick={() => {
            dispatch(projectSliceAction.selectProject(TalentNestForSlice));
            route.push("/project/x-clone");
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mt-auto pt-8">
        <div className="relative">
          <p className="text-neutral-400 pl-1">Hi, my name is Daniel Canoy</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight font-krona-one">
            <span className="text-red-400">Front-end</span>
            <br />
            <span className="text-purple-400">Developer</span>
          </h1>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-4 text-left lg:text-2xl  lg:text-right">
          <p className="max-w-md text-neutral-400">
            A front-end developer who transforms ideas into clean, responsive,
            and impactful digital experiences. I specialize in building
            intuitive user interfaces with a focus on modern web standards.
          </p>
        </div>
      </div>
    </main>
  );
}
