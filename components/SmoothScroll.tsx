"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NAV_OFFSET = -60; // account for fixed top nav height
const SCROLL_DURATION = 1.4;

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isFirstNav = useRef(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;
    // expose for same-page hash nav clicks (TopNav consumes this)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Scroll to top on every route change, or smoothly scroll to hash section.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;

    // Two animation frames to let the new page DOM settle (sections mount)
    const tick = () =>
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (hash) {
            // "#home" → scroll to very top (sticky hero element scroll is unreliable)
            if (hash === "#home") {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(0, {
                  duration: SCROLL_DURATION,
                });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              isFirstNav.current = false;
              ScrollTrigger.refresh();
              return;
            }
            const target = document.querySelector(hash);
            if (target && lenisRef.current) {
              lenisRef.current.scrollTo(target as HTMLElement, {
                offset: NAV_OFFSET,
                duration: SCROLL_DURATION,
              });
            } else if (target) {
              (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
            }
          } else if (!isFirstNav.current) {
            // route changed (not first mount), no hash → top
            if (lenisRef.current) {
              lenisRef.current.scrollTo(0, { immediate: true, force: true });
            } else {
              window.scrollTo(0, 0);
            }
          }
          isFirstNav.current = false;
          ScrollTrigger.refresh();
        }),
      );

    // If there's a hash, snap to top first so the browser doesn't auto-jump there instantly
    if (hash) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    tick();
  }, [pathname]);

  // Same-page hash changes (e.g. clicking nav while on home) — smooth scroll
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target && lenisRef.current) {
        lenisRef.current.scrollTo(target as HTMLElement, {
          offset: NAV_OFFSET,
          duration: SCROLL_DURATION,
        });
      } else if (target) {
        (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <>{children}</>;
}
