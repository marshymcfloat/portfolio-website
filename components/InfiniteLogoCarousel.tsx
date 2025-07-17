"use client";

import React from "react";

const technologies = [
  { name: "TypeScript", src: "/typescript.png" },
  { name: "React", src: "/React.svg" },
  { name: "Next.js", src: "/nextjs-icon.svg" },
  { name: "Node.js", src: "/Nodejs.svg" },
  { name: "Redux", src: "/Redux.svg" },
  { name: "Tailwind CSS", src: "/tailwind.svg" },
  { name: "PostgreSQL", src: "/PostgresSQL.svg" },
  { name: "MongoDB", src: "/MongoDB.svg" },
  { name: "Prisma", src: "/prism.png" },
];

const InfiniteLogoCarousel = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-css">
        {technologies.map((tech) => (
          <li key={tech.name}>
            <div className="flex flex-col items-center gap-2 text-center">
              <img src={tech.src} alt={tech.name} className="h-16 w-16" />
              <span className="font-semibold text-gray-300">{tech.name}</span>
            </div>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-css"
        aria-hidden="true"
      >
        {technologies.map((tech) => (
          <li key={tech.name}>
            <div className="flex flex-col items-center gap-2 text-center">
              <img src={tech.src} alt={tech.name} className="h-16 w-16" />
              <span className="font-semibold text-gray-300">{tech.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteLogoCarousel;
