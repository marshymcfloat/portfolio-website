"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let drops: { x: number; y: number; len: number; speed: number; opacity: number }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((window.innerWidth * window.innerHeight) / 6000);
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: 8 + Math.random() * 22,
        speed: 4 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1;
      for (const d of drops) {
        ctx.strokeStyle = `rgba(250, 250, 247, ${d.opacity})`;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1, d.y + d.len);
        ctx.stroke();
        d.y += d.speed;
        if (d.y > canvas.height) {
          d.y = -d.len;
          d.x = Math.random() * canvas.width;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    if (!prefersReduced) draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        aria-hidden="true"
      />

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
