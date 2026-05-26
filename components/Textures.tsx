/* Fixed-position editorial textures: proper registration marks + corner bleed. */
export default function Textures() {
  return (
    <>
      {/* halftone dot pattern */}
      <div className="dot-bg" aria-hidden="true" />
      {/* CRT scanlines */}
      <div className="scanlines" aria-hidden="true" />

      {/* viewport corner print registration marks */}
      <div
        className="pointer-events-none fixed inset-0 z-[20] hidden md:block"
        aria-hidden="true"
      >
        <RegMark className="absolute top-5 left-5" />
        <RegMark className="absolute top-5 right-5" />
        <RegMark className="absolute bottom-5 left-5" />
        <RegMark className="absolute bottom-5 right-5" />
      </div>

      {/* red corner bleed — more present */}
      <div
        className="pointer-events-none fixed inset-0 z-[20]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 100% 0%, rgba(255,45,45,0.10), transparent 60%), radial-gradient(ellipse 600px 500px at 0% 100%, rgba(255,45,45,0.08), transparent 60%)",
        }}
      />
    </>
  );
}

function RegMark({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{ opacity: 0.35 }}
    >
      <line x1="11" y1="0" x2="11" y2="7" stroke="currentColor" strokeWidth="1" className="text-ink-mute" />
      <line x1="11" y1="15" x2="11" y2="22" stroke="currentColor" strokeWidth="1" className="text-ink-mute" />
      <line x1="0" y1="11" x2="7" y2="11" stroke="currentColor" strokeWidth="1" className="text-ink-mute" />
      <line x1="15" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="1" className="text-ink-mute" />
      <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1" className="text-ink-mute" />
    </svg>
  );
}
