import Image from "next/image";
import SectionMark from "@/components/SectionMark";

const STACK = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind", "Redux"],
  Backend: ["NestJS", "Node.js", "Express", "Prisma"],
  Database: ["PostgreSQL", "MongoDB"],
  Tooling: ["Turborepo", "Git", "Vercel", "Google Gemini"],
};

type TimelineItem = {
  month?: string;
  title: string;
  where: string;
  type: "work" | "project" | "education" | "intern" | "capstone";
  current?: boolean;
};

const TIMELINE_GROUPS: { year: string; items: TimelineItem[] }[] = [
  {
    year: "2026",
    items: [
      {
        month: "Feb",
        title: "Web Developer @ Nettsaga",
        where: "Norwegian client work — Mesterlanda, Tømrer Fjellheim, Best Partner",
        type: "work",
        current: true,
      },
      {
        month: "Jan",
        title: "ServiceFlow — Shipped",
        where: "Personal SaaS for Philippine salons, spas, and barbershops",
        type: "project",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "B.S. Information Technology — Graduated",
        where: "Holy Trinity University · Puerto Princesa, PH",
        type: "education",
      },
      {
        title: "Personal projects line",
        where: "Alessence · BeautyFeel · ClarityHire · TalentNest",
        type: "project",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        month: "Nov",
        title: "Government IT Intern",
        where: "Public sector — local government office, Palawan",
        type: "intern",
      },
      {
        title: "HTU Evaluation Capstone — Shipped",
        where: "Final-year project · in production at Holy Trinity University",
        type: "capstone",
      },
      {
        month: "Feb",
        title: "Palawan Pawnshop IT Intern",
        where: "First real-world IT role — internal tooling and support",
        type: "intern",
      },
    ],
  },
];

const TYPE_LABEL: Record<TimelineItem["type"], string> = {
  work: "work",
  project: "project",
  education: "education",
  intern: "intern",
  capstone: "capstone",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="blueprint relative px-4 md:px-8 py-20 md:py-32 overflow-hidden"
    >
      <SectionMark text="About" label="── bio · stack · timeline" position="left" />
      <div className="relative z-10 max-w-[1800px] mx-auto">
        <div className="flex items-baseline gap-3 mb-12 md:mb-16">
          <h2
            className="font-display uppercase text-ink leading-none tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            About
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            [ daniel ]
          </span>
        </div>

        {/* ── TOP ROW: portrait + bio + stack ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* PORTRAIT */}
          <div className="lg:col-span-4">
            <div className="relative aspect-square overflow-hidden bg-bg-elev">
              <Image
                src="/Me.jpg"
                alt="Daniel Canoy"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={20}
                className="object-cover dither"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-bg via-bg/70 to-transparent">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  ── this is me
                </div>
                <div
                  className="font-display uppercase text-ink leading-none tracking-tight mt-1"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.8rem)" }}
                >
                  Daniel, {new Date().getFullYear() - 2002}
                </div>
              </div>
            </div>
          </div>

          {/* BIO + STACK */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-4">
                ── short version
              </div>
              <div className="text-[clamp(1.05rem,1.4vw,1.4rem)] leading-[1.55] text-ink tracking-tight max-w-2xl space-y-4">
                <p>
                  Hi, I&apos;m Daniel — a full-stack developer from{" "}
                  <span className="text-accent">Puerto Princesa, Palawan</span>.
                </p>
                <p>
                  I&apos;ve shipped eleven projects in three years. Five of
                  them were client work at{" "}
                  <span className="text-ink font-medium">Nettsaga</span>, my
                  previous job — websites for a US event production company,
                  Norwegian construction and carpentry firms, and an equipment
                  rental brand. The rest are personal projects, including{" "}
                  <span className="text-ink font-medium">ServiceFlow</span> —
                  a SaaS I built for salons here in the Philippines.
                </p>
                <p>
                  I graduated with a Bachelor&apos;s in Information Technology
                  from Holy Trinity University in 2025.
                </p>
                <p className="text-ink-mute">
                  I just like building things that actually work.
                </p>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-4">
                ── the stack
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
                {Object.entries(STACK).map(([cat, items]) => (
                  <div key={cat}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
                      {cat}
                    </div>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="font-display uppercase text-ink tracking-tight leading-tight text-[15px] md:text-[17px]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TIMELINE — full width below ── */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-baseline justify-between gap-3 mb-8 md:mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
              ── timeline · how I got here
            </div>
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              shipping since feb 2024
            </div>
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-10">
            {TIMELINE_GROUPS.map((group) => (
              <li key={group.year} className="relative">
                {/* YEAR HEADER */}
                <div className="flex items-baseline justify-between gap-3 mb-6 md:mb-8 pb-4 border-b border-line">
                  <span
                    className="font-display uppercase text-ink leading-none tracking-tight"
                    style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
                  >
                    {group.year}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
                    [ {group.items.length} ]
                  </span>
                </div>

                {/* ENTRIES — vertical bullet rail per column */}
                <ul
                  className="relative pl-6 md:pl-8 space-y-6 md:space-y-7"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(250,250,247,0.12) 0%, rgba(250,250,247,0.12) 100%)",
                    backgroundSize: "1px 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 0",
                  }}
                >
                  {group.items.map((item, i) => (
                    <li key={i} className="relative">
                      {/* DOT */}
                      <span
                        className="absolute top-1.5 flex items-center justify-center"
                        style={{ left: "-29px", marginLeft: "0px" }}
                      >
                        {item.current && (
                          <span className="absolute inset-0 -m-2 rounded-full bg-accent opacity-30 animate-ping" />
                        )}
                        <span
                          className={`relative w-2.5 h-2.5 rounded-full ring-4 ring-bg ${
                            item.current ? "bg-accent" : "bg-ink"
                          }`}
                        />
                      </span>

                      {/* metadata row */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {item.month && (
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
                            {item.month}
                          </span>
                        )}
                        <span
                          className={`font-mono text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 border ${
                            item.current
                              ? "border-accent text-accent bg-accent/5"
                              : item.type === "work"
                                ? "border-line text-accent"
                                : item.type === "project"
                                  ? "border-line text-ink-mute"
                                  : item.type === "education"
                                    ? "border-line text-ink-mute"
                                    : "border-line text-mute"
                          }`}
                        >
                          {TYPE_LABEL[item.type]}
                        </span>
                        {item.current && (
                          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent inline-flex items-center gap-1.5">
                            <span className="relative flex h-1 w-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                              <span className="relative inline-flex rounded-full h-1 w-1 bg-accent" />
                            </span>
                            latest
                          </span>
                        )}
                      </div>

                      {/* title */}
                      <h4
                        className={`font-display uppercase leading-[0.95] tracking-tight ${
                          item.current ? "text-accent" : "text-ink"
                        }`}
                        style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.55rem)" }}
                      >
                        {item.title}
                      </h4>

                      {/* where */}
                      <p className="text-[12px] md:text-[13px] text-ink-mute mt-1.5 leading-snug max-w-2xl">
                        {item.where}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
