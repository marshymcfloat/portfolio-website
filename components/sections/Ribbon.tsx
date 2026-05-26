/* Slim marquee ribbon that sits at the very top of the cover wrapper —
   gives a visible "edge" as the wrapper rises over the hero on scroll. */

type Phrase = { text: string; accent?: boolean };

const PHRASES: Phrase[] = [
  { text: "Daniel Canoy" },
  { text: "Full-stack Developer" },
  { text: "Open to Work", accent: true },
  { text: "Palawan, PH" },
  { text: "11 Projects Shipped" },
  { text: "Since 2024", accent: true },
];

function Track({ tag }: { tag: "a" | "b" }) {
  const items = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <div className="flex shrink-0">
      {items.map((p, i) => (
        <span
          key={`${tag}-${i}`}
          className={`font-display uppercase leading-none tracking-tight px-3 md:px-6 flex items-center gap-3 md:gap-6 ${
            p.accent ? "text-accent" : "text-ink"
          }`}
          style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)" }}
        >
          {p.text}
          <span className={p.accent ? "text-ink" : "text-accent"}>●</span>
        </span>
      ))}
    </div>
  );
}

export default function Ribbon() {
  return (
    <section
      className="relative overflow-hidden border-b border-line bg-bg"
      aria-hidden="true"
    >
      {/* accent top edge — the visible "lid" of the cover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-accent"
        style={{ boxShadow: "0 0 12px rgba(255,45,45,0.5)" }}
      />

      <div
        className="flex whitespace-nowrap marquee-track py-3 md:py-4"
        style={{ animationDuration: "22s" }}
      >
        <Track tag="a" />
        <Track tag="b" />
      </div>
    </section>
  );
}
