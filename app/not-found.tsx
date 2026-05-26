import Link from "next/link";
import Rain from "@/components/Rain";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 overflow-hidden">
      <Rain className="absolute inset-0 w-full h-full z-[1]" density={6000} />

      <div className="relative z-10 text-center max-w-[1800px] mx-auto">
        <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-accent mb-6">
          [ 404 — page not found ]
        </div>
        <h1
          className="font-display uppercase text-ink leading-[0.88] tracking-[-0.01em]"
          style={{ fontSize: "clamp(3.5rem, 16vw, 18rem)" }}
        >
          Lost in
          <br />
          the rain
        </h1>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 mt-12 px-6 py-3 bg-accent text-bg font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-ink transition-colors duration-200"
        >
          ← Head home
        </Link>
      </div>
    </main>
  );
}
