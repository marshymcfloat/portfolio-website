"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outerX = mouseX,
      outerY = mouseY;
    let innerX = mouseX,
      innerY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const OUTER = 720;
    const INNER = 220;

    let raf = 0;
    const tick = () => {
      outerX += (mouseX - outerX) * 0.08;
      outerY += (mouseY - outerY) * 0.08;
      innerX += (mouseX - innerX) * 0.2;
      innerY += (mouseY - innerY) * 0.2;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerX - OUTER / 2}px, ${outerY - OUTER / 2}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${innerX - INNER / 2}px, ${innerY - INNER / 2}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="spotlight pointer-events-none fixed top-0 left-0 z-[30] w-[720px] h-[720px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      <div
        ref={innerRef}
        className="spotlight pointer-events-none fixed top-0 left-0 z-[31] w-[220px] h-[220px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,45,0.10) 0%, transparent 65%)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
