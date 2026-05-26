"use client";

import Image from "next/image";
import Link from "next/link";
import SectionMark from "@/components/SectionMark";
import type { Project } from "@/constants";

// Mobile: every tile uses a single 4/3 ratio for consistent rhythm.
// Desktop (md+): asymmetric column splits with matched heights.
// Math: aspect2 = aspect1 * (c2/c1).  7-col @ 16:10  ⇒  5-col needs 8:7.
const LAYOUT = [
  "aspect-[4/3] md:aspect-[21/9] md:col-span-12",   // 01 — ServiceFlow (top hero)
  "aspect-[4/3] md:aspect-[16/10] md:col-span-7",   // 02 — Jay Rockwell
  "aspect-[4/3] md:aspect-[8/7] md:col-span-5",     // 03 — AK Anleggstjenester
  "aspect-[4/3] md:aspect-[8/7] md:col-span-5",     // 04 — Mesterlanda
  "aspect-[4/3] md:aspect-[16/10] md:col-span-7",   // 05 — Tømrer Fjellheim
  "aspect-[4/3] md:aspect-[21/9] md:col-span-12",   // 06 — Best Partner (mid editorial hero)
  "aspect-[4/3] md:aspect-[16/10] md:col-span-7",   // 07 — BeautyFeel
  "aspect-[4/3] md:aspect-[8/7] md:col-span-5",     // 08 — ClarityHire
  "aspect-[4/3] md:aspect-[8/7] md:col-span-5",     // 09 — Alessence
  "aspect-[4/3] md:aspect-[16/10] md:col-span-7",   // 10 — TalentNest
  "aspect-[4/3] md:aspect-[21/9] md:col-span-12",   // 11 — HTU (closer)
];

export default function Work({ projects }: { projects: Project[] }) {
  return (
    <section
      id="work"
      className="blueprint relative px-4 md:px-8 py-20 md:py-32 overflow-hidden"
    >
      <SectionMark text="Works" label="── selected · 11" position="right" />
      <div className="relative z-10 max-w-[1800px] mx-auto">
        {/* section header */}
        <div className="flex items-baseline justify-between mb-8 md:mb-12">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-display uppercase text-ink leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Works
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              [ {String(projects.length).padStart(2, "0")} ]
            </span>
          </div>
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
            shipped · live · in production
          </span>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <Tile
              key={p.slug}
              project={p}
              idx={i}
              className={LAYOUT[i % LAYOUT.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  project,
  idx,
  className,
}: {
  project: Project;
  idx: number;
  className: string;
}) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className={`group relative overflow-hidden bg-bg-elev isolate ${className}`}
    >
      <Image
        src={project.cover}
        alt={`${project.title} screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        priority={idx < 2}
      />

      {/* permanent dark bleed BOTTOM — guarantees text legibility on any image */}
      <div
        className="absolute inset-x-0 bottom-0 h-[70%] pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.75) 30%, rgba(15,15,15,0.35) 65%, transparent 100%)",
        }}
      />
      {/* permanent dark bleed TOP — for badges */}
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,15,15,0.7) 0%, rgba(15,15,15,0.3) 50%, transparent 100%)",
        }}
      />
      {/* hover deepen layer (subtle) */}
      <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/25 transition-colors duration-500 pointer-events-none" />

      {/* TOP-LEFT — index + optional past-job tag */}
      <div className="absolute top-5 left-5 md:top-6 md:left-7 flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          {project.index}
        </span>
        {project.pastJob && (
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent border border-accent/60 bg-bg/70 backdrop-blur-sm px-1.5 py-0.5">
            @ Nettsaga
          </span>
        )}
      </div>

      {/* TOP-RIGHT — pulsing dot only (sr-only label for a11y) */}
      <span className="absolute top-5 right-5 md:top-6 md:right-7 flex h-2 w-2">
        <span className="sr-only">{project.status}</span>
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
          style={{ background: project.accent }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ background: project.accent }}
        />
      </span>

      {/* BOTTOM content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-10">
        {/* title + meta — shift UP on hover to make room for the reveal */}
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:-translate-y-[4rem]">
          <h3
            className="font-display uppercase text-ink leading-[0.9] tracking-[-0.005em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] truncate md:whitespace-normal md:overflow-visible"
            style={{ fontSize: "clamp(1.25rem, 3.6vw, 3.2rem)" }}
          >
            {project.title}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute mt-2 truncate md:whitespace-normal md:overflow-visible">
            <span className="md:hidden">{project.year} · {project.stack[0]}</span>
            <span className="hidden md:inline">{project.year} · {project.stack.slice(0, 3).join(" · ")}</span>
          </p>
        </div>

        {/* tagline + CTA — desktop hover-reveal only (touch ≠ hover) */}
        <div
          className="hidden md:block absolute left-5 md:left-8 right-5 md:right-8 bottom-5 md:bottom-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75"
        >
          <p className="font-body text-[13px] md:text-[14px] leading-[1.45] tracking-tight text-accent font-medium max-w-[60ch]">
            {project.tagline.split(".")[0]}.
          </p>
          <div className="flex items-center gap-2 mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink">
            View case study
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
