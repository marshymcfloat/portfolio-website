const PHRASES = [
  "Built in Palawan",
  "Shipped to production",
  "Still here",
];

export default function Marquee() {
  // double the content for seamless loop
  const items = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];

  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden border-y border-line-soft"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap marquee-track">
        {/* track 1 */}
        <div className="flex shrink-0">
          {items.map((phrase, i) => (
            <span
              key={`a-${i}`}
              className="font-display uppercase text-ink leading-none tracking-tight px-4 md:px-12 flex items-center gap-4 md:gap-12"
              style={{ fontSize: "clamp(2rem, 9vw, 9rem)" }}
            >
              {phrase}
              <span className="text-accent inline-block">●</span>
            </span>
          ))}
        </div>
        {/* track 2 — duplicate for seamless loop */}
        <div className="flex shrink-0" aria-hidden="true">
          {items.map((phrase, i) => (
            <span
              key={`b-${i}`}
              className="font-display uppercase text-ink leading-none tracking-tight px-4 md:px-12 flex items-center gap-4 md:gap-12"
              style={{ fontSize: "clamp(2rem, 9vw, 9rem)" }}
            >
              {phrase}
              <span className="text-accent inline-block">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
