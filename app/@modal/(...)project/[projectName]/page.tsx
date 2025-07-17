"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/components/ReduxProvider";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink, Github } from "lucide-react";
import Spinner from "@/components/Spinner";

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

export default function InterceptedProjectView() {
  const router = useRouter();
  const selectedProject = useSelector((state: RootState) => state.project);

  const [[imageIndex, direction], setImageIndex] = useState([0, 0]);

  const paginate = (newIndex: number) => {
    const newDirection = newIndex > imageIndex ? 1 : -1;
    setImageIndex([newIndex, newDirection]);
  };

  const currentImageSrc = selectedProject?.images?.[imageIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={() => router.back()}
    >
      <motion.dialog
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        open
        onClick={(e: React.MouseEvent<HTMLDialogElement>) =>
          e.stopPropagation()
        }
        className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 w-full h-full 
                   bg-BGDark border-white/10 shadow-2xl
                   md:max-w-6xl md:h-auto md:max-h-[90vh] md:rounded-xl 
                   overflow-y-auto p-4 sm:p-6 md:p-8"
      >
        <button
          aria-label="Close project view"
          onClick={() => router.back()}
          className="absolute top-4 right-4 z-20 cursor-pointer p-2 rounded-full text-Custom_gray bg-black/30 hover:bg-black/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {selectedProject && selectedProject.title ? (
          <>
            {}
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
                        alt="Project screenshot"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 50vw"
                        priority
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {selectedProject.images.map((imgSrc, index) => (
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

            {}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <h1 className="text-2xl md:text-[32px] font-krona-one text-Custom_orange">
                {selectedProject.title}
              </h1>
              <p className="text-Custom_gray leading-relaxed">
                {selectedProject.description}
              </p>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-Custom_lavender mb-3">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technology.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/30 text-Custom_lavender text-sm font-medium px-3 py-1 rounded-full border border-Custom_lavender/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {}
              <div className="flex flex-col sm:flex-row items-center gap-y-3 gap-x-4 mt-auto pt-4">
                <Link
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 font-bold bg-Custom_orange text-BGDark rounded-lg hover:brightness-110 transition-all"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Link>
                <Link
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 font-semibold bg-transparent text-Custom_gray border border-Custom_gray rounded-lg hover:bg-Custom_gray hover:text-BGDark transition-colors"
                >
                  <Github size={18} />
                  Source
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center col-span-5">
            <Spinner />
          </div>
        )}
      </motion.dialog>
    </div>
  );
}
