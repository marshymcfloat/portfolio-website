import SectionMark from "@/components/SectionMark";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-4 md:px-8 py-20 md:py-32 overflow-hidden"
    >
      <SectionMark text="Reach" label="── available · open" position="right" />
      <div className="relative z-10 max-w-[1800px] mx-auto">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10 md:mb-16">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-display uppercase text-ink leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Get in touch
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              [ available ]
            </span>
          </div>

          {/* Resume download — prominent, top-right of section */}
          <a
            href="/daniel-canoy-resume.pdf"
            download="Daniel-Canoy-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-5 py-3 border border-accent bg-accent/10 hover:bg-accent hover:text-bg text-accent font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M12 3v13" />
              <path d="M6 13l6 6 6-6" />
              <path d="M4 21h16" />
            </svg>
            Download résumé
            <span className="text-[10px] opacity-60">[ pdf ]</span>
          </a>
        </div>

        {/* big CTA — full email link block */}
        <a
          href="mailto:canoydaniel06@gmail.com"
          className="group relative block border-t border-b border-line py-10 md:py-14 transition-colors duration-300 hover:bg-bg-elev/40"
        >
          {/* eyebrow */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-mute group-hover:text-accent transition-colors duration-300">
            <span>── write to me</span>
            <span className="hidden md:inline">[ mail.app ]</span>
          </div>

          {/* the email — huge, fluid */}
          <div
            className="font-display uppercase text-ink leading-[0.92] tracking-tight group-hover:text-accent transition-colors duration-300 mt-4 md:mt-6 break-all"
            style={{ fontSize: "clamp(1.5rem, 7.2vw, 7rem)" }}
          >
            canoydaniel06
            <span className="text-accent">@</span>
            gmail.com
          </div>

          {/* compose hint — sits inline below, not floating right */}
          <div className="mt-5 md:mt-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-mute group-hover:text-ink transition-colors duration-300">
            <span className="block h-px w-8 bg-mute group-hover:w-14 group-hover:bg-accent transition-all duration-300" />
            <span>click to compose</span>
            <span className="text-mute group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </div>
        </a>

        {/* link rail */}
        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <a
            href="mailto:canoydaniel06@gmail.com"
            className="group block"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-2">
              ── email
            </div>
            <div className="font-display uppercase text-ink tracking-tight text-[18px] md:text-[22px] group-hover:text-accent transition-colors duration-300">
              Inbox →
            </div>
          </a>
          <a
            href="https://github.com/marshymcfloat"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-2">
              ── github
            </div>
            <div className="font-display uppercase text-ink tracking-tight text-[18px] md:text-[22px] group-hover:text-accent transition-colors duration-300">
              @marshymcfloat ↗
            </div>
          </a>
          <a
            href="/daniel-canoy-resume.pdf"
            download="Daniel-Canoy-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-2">
              ── résumé
            </div>
            <div className="font-display uppercase text-ink tracking-tight text-[18px] md:text-[22px] group-hover:text-accent transition-colors duration-300">
              Download ↓
            </div>
          </a>
          <div className="block">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute mb-2">
              ── status
            </div>
            <div className="font-display uppercase text-accent tracking-tight text-[18px] md:text-[22px] flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Open
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-20 md:mt-32 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
          <span>© {new Date().getFullYear()} Daniel Canoy</span>
          <span>Built with Next.js + GSAP · Palawan</span>
        </div>
      </div>
    </section>
  );
}
