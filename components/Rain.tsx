"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  /** Higher value = fewer drops. ~6000 is normal, ~10000 is sparse. */
  density?: number;
  /** RGB triple for the drops (no alpha — opacity is per-drop). */
  color?: string;
  /** Milliseconds before fade-in starts. 0 = instant (no reveal animation). */
  fadeInDelay?: number;
  /** Fade-in duration in milliseconds. */
  fadeInDuration?: number;
  /** Start drops above the canvas so they "fall in" rather than appearing mid-fall. */
  fallIn?: boolean;
};

export default function Rain({
  className = "",
  density = 7000,
  color = "250, 250, 247",
  fadeInDelay = 0,
  fadeInDuration = 1500,
  fallIn = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(fadeInDelay === 0);

  // Trigger the opacity fade-in after the configured delay.
  useEffect(() => {
    if (fadeInDelay === 0) return;
    const t = setTimeout(() => setVisible(true), fadeInDelay);
    return () => clearTimeout(t);
  }, [fadeInDelay]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let drops: {
      x: number;
      y: number;
      len: number;
      speed: number;
      opacity: number;
    }[] = [];

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.offsetWidth || window.innerWidth;
      const h = canvas.offsetHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((w * h) / density);
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        // If fallIn, start drops above the canvas (negative y), spread out
        // across a tall band so they enter the screen in waves over ~1s.
        y: fallIn ? -Math.random() * h * 1.3 : Math.random() * h,
        len: 8 + Math.random() * 22,
        speed: 4 + Math.random() * 10,
        opacity: 0.08 + Math.random() * 0.22,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      for (const d of drops) {
        ctx.strokeStyle = `rgba(${color}, ${d.opacity})`;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1, d.y + d.len);
        ctx.stroke();
        d.y += d.speed;
        if (d.y > h) {
          d.y = -d.len;
          d.x = Math.random() * w;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => init();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [color, density, fallIn]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${fadeInDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    />
  );
}
