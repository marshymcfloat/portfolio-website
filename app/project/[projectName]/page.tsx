import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/constants";

/* Wraps any occurrence of the live URL's hostname in `text` with a clickable accent-colored anchor. */
function linkifyHostname(text: string, liveUrl?: string) {
  if (!liveUrl) return text;
  let hostname: string;
  try {
    hostname = new URL(liveUrl).hostname;
  } catch {
    return text;
  }
  const parts = text.split(hostname);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/30 decoration-1 underline-offset-[3px] hover:decoration-accent transition-colors duration-200"
        >
          {hostname}
        </a>
      )}
    </Fragment>
  ));
}

export function generateStaticParams() {
  return projects.map((p) => ({ projectName: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;
  const project = getProjectBySlug(projectName);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const hostname = project.links.live
    ? new URL(project.links.live).hostname
    : null;

  return (
    <main className="pt-24 md:pt-28 pb-20 overflow-x-hidden">
      {/* HEADER */}
      <header className="px-4 md:px-8 max-w-[1800px] mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-mute hover:text-ink transition-colors duration-200 mb-12"
        >
          ← Back to works
        </Link>

        {/* index + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
          <span>{project.index}</span>
          <span>/</span>
          <span>{project.year}</span>
          {project.location && (
            <>
              <span>/</span>
              <span>{project.location}</span>
            </>
          )}
          <span>/</span>
          <span className="flex items-center gap-2 text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            {project.status}
          </span>
          {hostname && (
            <>
              <span>/</span>
              <span>{hostname}</span>
            </>
          )}
        </div>

        {/* Past-job badge — prominent above title */}
        {project.pastJob && (
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent border border-accent/60 bg-accent/10 px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-accent" />
              built at Nettsaga · last job
            </span>
          </div>
        )}

        {/* TITLE — huge */}
        <h1
          className="font-display uppercase text-ink leading-[0.88] tracking-[-0.005em]"
          style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
        >
          {project.title}
        </h1>

        <p className="font-body text-accent text-[clamp(1rem,1.5vw,1.4rem)] leading-[1.45] tracking-tight font-medium max-w-3xl mt-6">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-accent text-bg font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-ink transition-colors duration-200"
            >
              Live demo
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                ↗
              </span>
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 border border-line text-ink font-mono text-[11px] uppercase tracking-[0.25em] hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Source
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                ↗
              </span>
            </a>
          )}
        </div>
      </header>

      {/* HERO IMAGE — natural aspect ratio, no clipping */}
      <div className="mt-16 md:mt-24 px-4 md:px-8">
        <div className="relative max-w-[1800px] mx-auto bg-bg-elev overflow-hidden">
          {/* plain <img> so it renders at its true intrinsic aspect ratio */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={`${project.title} cover`}
            className="block w-full h-auto"
            loading="eager"
          />
        </div>
      </div>

      {/* STORY */}
      <section className="px-4 md:px-8 max-w-[1800px] mx-auto mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
            ── what it is
          </div>
          <p className="text-[clamp(1.1rem,1.6vw,1.6rem)] leading-[1.5] text-ink tracking-tight">
            {linkifyHostname(project.story.outcome, project.links.live)}
          </p>
        </div>
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-3">
              ── the problem
            </div>
            <p className="text-[14px] leading-[1.6] text-ink-mute">
              {project.story.problem}
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-3">
              ── the decision
            </div>
            <p className="text-[14px] leading-[1.6] text-ink-mute">
              {project.story.decision}
            </p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="px-4 md:px-8 max-w-[1800px] mx-auto mt-20 md:mt-32">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-6">
          ── built with
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-display uppercase text-ink tracking-tight"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.3rem)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery.length > 1 && (
        <section className="px-4 md:px-8 max-w-[1800px] mx-auto mt-20 md:mt-32">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-6">
            ── stills · {project.gallery.length - 1}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
            {project.gallery.slice(1).map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden bg-bg-elev ${
                  i % 3 === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${project.title} still ${i + 1}`}
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* NEXT */}
      <section className="px-4 md:px-8 max-w-[1800px] mx-auto mt-20 md:mt-32 border-t border-line pt-10">
        <Link
          href={`/project/${next.slug}`}
          className="group flex items-baseline justify-between gap-6"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-3">
              ── next project
            </div>
            <div
              className="font-display uppercase text-ink leading-[0.9] tracking-[-0.005em] group-hover:text-accent transition-colors duration-300"
              style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
            >
              {next.title}
            </div>
          </div>
          <span className="font-display text-4xl md:text-6xl text-mute group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
