"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Module-scoped flag — survives React remounts (client-side nav)
// but resets on full page load (hard refresh, fresh navigation).
let hasPlayedHeroReveal = false;

const NAME = "Daniel Canoy";

export default function Approach() {
  const innerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    gsap.registerPlugin(ScrollTrigger);

    const letters = nameRef.current?.querySelectorAll(".letter") || [];
    const shouldReveal = !hasPlayedHeroReveal;

    const ctx = gsap.context(() => {
      // ── INITIAL REVEAL ──
      if (shouldReveal && !prefersReduced) {
        hasPlayedHeroReveal = true;

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.set(letters, {
          opacity: 0,
          yPercent: 110,
          rotateX: -45,
          filter: "blur(18px)",
        })
          .set(subtitleRef.current, { opacity: 0, y: 24, scaleX: 0.94 })
          // letters cascade up from below with blur clear
          .to(
            letters,
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              filter: "blur(0px)",
              stagger: { each: 0.045, from: "start" },
              duration: 1.2,
            },
            0.35,
          )
          // subtitle slides in with a slight horizontal expand
          .to(
            subtitleRef.current,
            {
              opacity: 1,
              y: 0,
              scaleX: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.45",
          );
      } else {
        // skip animation — show final state instantly
        gsap.set(letters, {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          filter: "none",
        });
        gsap.set(subtitleRef.current, { opacity: 1, y: 0, scaleX: 1 });
      }

      // ── SCROLL-DRIVEN TILT (every page mount) ──
      gsap.to(innerRef.current, {
        rotateX: 32,
        scale: 0.82,
        y: -60,
        opacity: 0.2,
        filter: "blur(6px)",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: 0,
          end: () => window.innerHeight,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const letters = NAME.split("");

  return (
    <section
      id="home"
      className="sticky top-0 z-0 h-screen w-full flex items-center justify-center px-4 md:px-8 pt-16 overflow-hidden"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 35%" }}
    >
      <div
        ref={innerRef}
        className="text-center w-full max-w-[1800px] mx-auto will-change-transform"
        style={{ transformStyle: "preserve-3d", transformOrigin: "50% 50%" }}
      >
        {/* THE NAME — letters cascade in */}
        <h1
          ref={nameRef}
          className="font-display text-ink uppercase leading-[0.9] tracking-[-0.01em] select-none"
          style={{
            fontSize: "clamp(3.5rem, 16vw, 18rem)",
            transformStyle: "preserve-3d",
            perspective: "800px",
          }}
        >
          {/* accessible label */}
          <span className="sr-only">{NAME}</span>
          {/* visible letters */}
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden align-baseline"
          >
            {letters.map((char, i) => (
              <span
                key={i}
                className="letter inline-block will-change-transform"
                style={{ opacity: 0 }}
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
        </h1>

        {/* RED SUBTITLE */}
        <div
          ref={subtitleRef}
          className="mt-4 md:mt-6 font-mono text-accent tracking-[0.15em] md:tracking-[0.3em] uppercase will-change-transform"
          style={{
            fontSize: "clamp(0.7rem, 0.95vw, 1rem)",
            opacity: 0,
            transformOrigin: "center",
          }}
        >
          Full-stack Developer &nbsp;·&nbsp; Palawan, PH
        </div>
      </div>

    </section>
  );
}
