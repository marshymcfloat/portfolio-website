export default function SectionMark({
  text,
  label,
  position = "left",
}: {
  text: string;
  label?: string;
  position?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none top-[2vh] md:top-[4vh] ${
        position === "left" ? "left-[-3vw]" : "right-[-3vw]"
      } whitespace-nowrap`}
      style={{ zIndex: 0 }}
    >
      <span
        className="font-display uppercase text-ink leading-[0.78] block"
        style={{
          fontSize: "clamp(5rem, 22vw, 30rem)",
          opacity: 0.06,
          WebkitTextStroke: "1px rgba(250,250,247,0.12)",
          letterSpacing: "-0.01em",
        }}
      >
        {text}
      </span>
      {label && (
        <span
          className={`hidden md:block font-mono uppercase tracking-[0.3em] text-mute text-[11px] mt-2 ${
            position === "left" ? "ml-4" : "mr-4 text-right"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
