"use client";

import CardStack from "@/components/CardStack";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { projectSliceAction } from "@/Slice/ProjectSlice";
import { projects } from "@/constants";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col min-h-screen w-full mx-auto p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 mt-24">
        {projects.map((project) => (
          <CardStack
            key={project.projectId}
            items={project.stackImages}
            onClick={() => {
              dispatch(projectSliceAction.selectProject(project));

              router.push(`/project/${project.slug}`);
            }}
          />
        ))}
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
