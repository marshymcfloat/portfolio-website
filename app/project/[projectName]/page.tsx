"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink, Github, ArrowLeft } from "lucide-react";
import Spinner from "@/components/Spinner";
import { getProjectBySlug, Project } from "@/constants";
import { useParams } from "next/navigation";

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function StandardProjectViewPage() {
  const params = useParams();

  const [project, setProject] = useState<Project | null | undefined>(undefined);
  const [[imageIndex, direction], setImageIndex] = useState([0, 0]);

  useEffect(() => {
    const projectData = getProjectBySlug(params.projectName);

    console.log(params.projectName);
    setProject(projectData);
  }, [params.projectName]);

  const paginate = (newIndex: number) => {
    const newDirection = newIndex > imageIndex ? 1 : -1;
    setImageIndex([newIndex, newDirection]);
  };

  const currentImageSrc = project?.images?.[imageIndex];

  if (project === undefined) {
    return (
      <main className="flex items-center justify-center h-screen">
        <Spinner />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold text-Custom_orange mb-4">
          Project Not Found
        </h1>
        <p className="text-Custom_gray mb-8">
          Sorry, we couldn't find the project you're looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 font-bold bg-Custom_orange text-BGDark rounded-lg hover:brightness-110"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          scroll={false}
          className="inline-flex items-center gap-2 text-Custom_gray hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/20">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={imageIndex}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  {currentImageSrc && (
                    <Image
                      src={currentImageSrc}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 50vw"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {project.images.map((imgSrc, index) => (
                <button
                  key={imgSrc}
                  onClick={() => paginate(index)}
                  className={`relative aspect-video rounded-md overflow-hidden transition-all duration-200 border-2 ${
                    imageIndex === index
                      ? "border-Custom_orange"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Thumbnail for ${imgSrc}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <h1 className="text-2xl md:text-[32px] font-krona-one text-Custom_orange">
              {project.title}
            </h1>
            <p className="text-Custom_gray leading-relaxed">
              {project.description}
            </p>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-Custom_lavender mb-3">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="bg-black/30 text-Custom_lavender text-sm font-medium px-3 py-1 rounded-full border border-Custom_lavender/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-y-3 gap-x-4 mt-auto pt-4">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 font-bold bg-Custom_orange text-BGDark rounded-lg hover:brightness-110 transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 font-semibold bg-transparent text-Custom_gray border border-Custom_gray rounded-lg hover:bg-Custom_gray hover:text-BGDark transition-colors"
              >
                <Github size={18} />
                Source
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
