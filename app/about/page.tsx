"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { MotionValue } from "framer-motion";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import FadeInWhenVisible from "@/components/FadeInWhenVisible ";

const FloatingProjectImage = ({
  src,
  scrollYProgress,
  width,
  maxWidth,
  startX,
  startY,
  endX,
  endY,
  startRotate,
  endRotate,
}: {
  src: string;
  scrollYProgress: MotionValue<number>;
  width: string;
  maxWidth: string;
  startX: string;
  startY: string;
  endX: string;
  endY: string;
  startRotate: number;
  endRotate: number;
}) => {
  const x = useTransform(scrollYProgress, [0, 1], [startX, endX]);
  const y = useTransform(scrollYProgress, [0, 1], [startY, endY]);
  const brightness = useTransform(scrollYProgress, [0, 1], [0.8, 0.25]);
  const filter = useMotionTemplate`brightness(${brightness})`;
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [startRotate, endRotate]
  );

  return (
    <motion.div
      className="absolute"
      style={{
        width,
        maxWidth,
        x,
        y,
        rotate,
      }}
    >
      <motion.img
        src={src}
        alt="Project screenshot"
        className="rounded-lg object-cover w-full h-auto"
        style={{ filter }}
      />
    </motion.div>
  );
};

export default function AboutPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fontSize = useTransform(scrollYProgress, [0, 1], ["6rem", "3rem"]);
  const mobileFontSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["3rem", "1.25rem"]
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

  return (
    <main className="">
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <FloatingProjectImage
            src={"/LandingBF.png"}
            scrollYProgress={scrollYProgress}
            width="35vw"
            maxWidth="350px"
            startX="-100vw"
            startY="-40vh"
            endX="-20vw"
            endY="-15vh"
            startRotate={-30}
            endRotate={-8}
          />
          <FloatingProjectImage
            src={"/XHomepage.png"}
            scrollYProgress={scrollYProgress}
            width="40vw"
            maxWidth="400px"
            startX="-120vw"
            startY="50vh"
            endX="-10vw"
            endY="20vh"
            startRotate={25}
            endRotate={6}
          />
          <FloatingProjectImage
            src={"/DashboardEval.png"}
            scrollYProgress={scrollYProgress}
            width="30vw"
            maxWidth="300px"
            startX="110vw"
            startY="-30vh"
            endX="15vw"
            endY="-20vh"
            startRotate={35}
            endRotate={10}
          />
          <FloatingProjectImage
            src={"/XLanding.png"}
            scrollYProgress={scrollYProgress}
            width="25vw"
            maxWidth="250px"
            startX="100vw"
            startY="45vh"
            endX="25vw"
            endY="10vh"
            startRotate={-20}
            endRotate={-5}
          />
          <FloatingProjectImage
            src={"/ManageBF.png"}
            scrollYProgress={scrollYProgress}
            width="28vw"
            maxWidth="280px"
            startX="0vw"
            startY="-60vh"
            endX="2vw"
            endY="-3vh"
            startRotate={10}
            endRotate={2}
          />

          <div className="text-center z-10 px-4">
            <motion.h1
              className="hidden md:block font-bold font-krona-one text-Custom_orange text-nowrap"
              style={{ fontSize, opacity }}
            >
              The Story Behind The Code
            </motion.h1>
            <motion.h1
              className="md:hidden font-bold font-krona-one text-Custom_orange text-nowrap"
              style={{ fontSize: mobileFontSize, opacity }}
            >
              The Story Behind The Code
            </motion.h1>
          </div>
        </div>
      </div>

      {}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <FadeInWhenVisible>
            <div className="md:col-span-1">
              <img
                src="/Me.jpg"
                alt="Daniel Canoy"
                className="rounded-lg w-full max-w-xs mx-auto md:max-w-full object-cover shadow-lg"
              />
            </div>
          </FadeInWhenVisible>
          <div className="md:col-span-2">
            <FadeInWhenVisible>
              <h2 className="text-2xl md:text-3xl text-Custom_lavender font-bold mb-4 font-krona-one">
                Hi, I'm Daniel.
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-Custom_orange">full-stack developer</span>{" "}
                based in the beautiful city of Puerto Princesa, Palawan. For me,
                coding isn't just about building applications; it's about{" "}
                <span className="text-Custom_orange">
                  solving real-world problems
                </span>{" "}
                with elegant and efficient solutions. I thrive on turning
                complex challenges into simple, beautiful, and intuitive digital
                experiences.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4">
                My journey into tech began in senior high school, where I took
                the IT Strand at STI Puerto Princesa. I was immediately
                captivated by the process of creating websites, finding joy in
                bringing ideas to life with code, animations, and transitions.
                An encouraging instructor saw my potential and became a key
                mentor in my early learning. This passion was solidified during
                my final year capstone project in college.{" "}
                <span className="text-Custom_orange">
                  I took the lead on development{" "}
                </span>{" "}
                and built the entire system myself. The moment I successfully
                implemented a feature for it to send automated emails was a
                breakthrough for me—it was thrilling and made me realize the
                real-world power of code. Since then,{" "}
                <span className="text-Custom_orange">
                  I've dedicated myself to continuous learning
                </span>{" "}
                , mastering modern stacks like Next.js and React, and turning
                that initial spark of curiosity into a dedicated career.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      {}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <FadeInWhenVisible>
            <h2 className="text-2xl md:text-3xl text-Custom_lavender font-bold mb-2 font-krona-one">
              My Guiding Principles
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="text-base md:text-lg text-gray-400 mb-12">
              I believe great software is built on a foundation of...
            </p>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInWhenVisible>
              <div className="p-6 md:p-8 border border-gray-700 rounded-lg h-full">
                <h3 className="text-lg md:text-xl font-bold text-Custom_orange mb-2">
                  User-Centric Design
                </h3>
                <p className="text-gray-300">
                  It all starts and ends with the user. I prioritize creating
                  interfaces that are not only beautiful but also intuitive and
                  accessible to everyone.
                </p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="p-6 md:p-8 border border-gray-700 rounded-lg h-full">
                <h3 className="text-lg md:text-xl font-bold text-Custom_orange mb-2">
                  Clean & Scalable Code
                </h3>
                <p className="text-gray-300">
                  I write code that my future self (and other developers) will
                  thank me for. It’s maintainable, readable, and built to grow.
                </p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="p-6 md:p-8 border border-gray-700 rounded-lg h-full">
                <h3 className="text-lg md:text-xl font-bold text-Custom_orange mb-2">
                  Impactful Problem-Solving
                </h3>
                <p className="text-gray-300">
                  Technology is a tool for impact. I'm driven by the challenge
                  of using my skills to build products that make a tangible
                  difference.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      {}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <FadeInWhenVisible>
          <h2 className="text-2xl md:text-3xl  text-Custom_lavender font-bold text-center mb-12 font-krona-one">
            A Closer Look at My Work
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <FadeInWhenVisible>
            <div className="p-4 bg-gray-800 rounded-lg shadow-xl">
              <img
                src="/LandingBF.png"
                alt="Project X Homepage"
                className="rounded-md"
              />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-Custom_orange">
                BeautyFeel System
              </h3>
              <p className="my-4 text-base md:text-lg text-gray-300">
                An intuitive platform designed to simplify appointment
                management for salon staff and their clients. The core challenge
                was to empower employees with an easy-to-use tool for client
                accommodation while simultaneously reducing missed appointments.
                I solved this by implementing automated reminders and a
                real-time booking interface using WebSockets, ensuring a smooth,
                coordinated workflow for the entire team.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black text-white text-sm font-medium px-2.5 py-0.5 rounded">
                  NextJS
                </span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-2.5 py-0.5 rounded">
                  Node.js
                </span>
                <span className="bg-blue-900/50 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                  TailwindCSS
                </span>
                <span className="bg-green-300 text-black text-sm font-medium px-2.5 py-0.5 rounded">
                  Prisma
                </span>
                <span className="bg-blue-900/70 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                  PostgreSQL
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className="font-bold text-Custom_orange hover:underline mr-4"
                >
                  Live Demo →
                </a>
                <a href="#" className="font-bold text-gray-400 hover:underline">
                  GitHub Repo →
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeInWhenVisible>
            <h2 className="text-2xl md:text-3xl font-bold text-Custom_lavender text-center mb-12 font-krona-one">
              Technologies I Work With
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfiniteLogoCarousel />
          </FadeInWhenVisible>
        </div>
      </div>

      {}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-krona-one text-Custom_lavender">
            Let's Create Together
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            I'm currently{" "}
            <span className="text-Custom_orange">
              open to new opportunities
            </span>{" "}
            and collaborations. If you have a project in mind, a question, or
            just want to say hi, my inbox is always open.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <a
            href="mailto:canoydaniel06@gmail.com"
            className="bg-Custom_orange text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors inline-block"
            aria-label="Send email to Daniel Canoy"
          >
            Get In Touch
          </a>
        </FadeInWhenVisible>
      </div>
    </main>
  );
}
