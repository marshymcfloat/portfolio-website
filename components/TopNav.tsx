"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "work", label: "Works", href: "/#work" },
  { id: "experience", label: "About", href: "/#experience" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

// Intercept clicks: if user is already on the destination page, smooth-scroll
// to the section via Lenis instead of letting Next router re-navigate.
function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (typeof window === "undefined") return;
  const [path, hash] = href.split("#");
  const targetPath = path || "/";
  if (!hash) return;
  if (window.location.pathname !== targetPath) return; // let Link nav cross-page

  e.preventDefault();

  type LenisAPI = {
    scrollTo: (
      target: HTMLElement | number,
      opts?: { offset?: number; duration?: number; immediate?: boolean; force?: boolean },
    ) => void;
  };
  const lenis = (window as unknown as { __lenis?: LenisAPI }).__lenis;

  // "#home" → scroll to very top (hero is sticky, so element-targeting is unreliable)
  if (hash === "home") {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    history.replaceState(null, "", href);
    return;
  }

  const target = document.getElementById(hash);
  if (!target) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: -60, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
  // keep URL in sync without re-running router
  history.replaceState(null, "", href);
}

export default function TopNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-based active-section detection (replaces IntersectionObserver — more reliable
  // with the sticky hero and pinned sections).
  useEffect(() => {
    let raf = 0;
    let lastActive = "";

    const compute = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV
        .map((s) => ({ id: s.id, el: document.getElementById(s.id) }))
        .filter(
          (s): s is { id: string; el: HTMLElement } => s.el !== null,
        );

      if (sections.length === 0) {
        // not on a page with the home sections — no active link
        if (lastActive !== "") {
          lastActive = "";
          setActive("");
        }
        return;
      }

      // Active = the section whose document-relative top has just been crossed by
      // the upper 1/3 viewport line. Use getBoundingClientRect (offsetTop is
      // relative to offsetParent, which gives wrong values for nested wrappers).
      const viewportLine = window.innerHeight * 0.33;
      let current = sections[0].id;
      for (const s of sections) {
        const top = s.el.getBoundingClientRect().top;
        if (top <= viewportLine) current = s.id;
      }

      if (current !== lastActive) {
        lastActive = current;
        setActive(current);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        compute();
        raf = 0;
      });
    };

    // give DOM a tick to settle after navigation, then compute
    const initial = setTimeout(compute, 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      clearTimeout(initial);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // close menu on resize to md+
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = () => mql.matches && setMenuOpen(false);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // close on Escape + lock body scroll while open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-bg/85 backdrop-blur-md border-b border-line-soft"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Daniel Canoy — Home"
            className="group inline-flex items-center transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/logo.png"
              alt="DC"
              width={64}
              height={48}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((s) => {
              const isActive = active === s.id;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  scroll={false}
                  onClick={(e) => handleNavClick(e, s.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex items-center gap-2 px-1 py-2 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActive
                      ? "text-ink"
                      : "text-mute hover:text-ink"
                  }`}
                >
                  {/* leading dot — accent when active */}
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-1.5 h-1.5 bg-accent"
                        : "w-1 h-1 bg-transparent"
                    }`}
                  />
                  {s.label}
                  {/* underline indicator */}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-px bg-accent origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* desktop right */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://github.com/marshymcfloat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-mute hover:text-ink transition-colors duration-200"
            >
              Github
            </a>
            <a
              href="mailto:canoydaniel06@gmail.com"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-mute hover:text-accent transition-colors duration-200"
            >
              Email
            </a>
          </div>

          {/* mobile burger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative h-11 w-11 flex items-center justify-center text-ink"
          >
            <span
              className={`absolute h-px w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* mobile menu sheet */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* scrim */}
        <div
          className="absolute inset-0 bg-bg/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        <nav className="relative flex flex-col h-full pt-24 px-6 pb-12">
          <ul className="flex flex-col gap-2">
            {NAV.map((s, i) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  scroll={false}
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleNavClick(e, s.href);
                  }}
                  className="group flex items-baseline justify-between border-b border-line-soft py-4"
                  style={{
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: `opacity 0.45s ease ${0.1 + i * 0.06}s, transform 0.45s ease ${0.1 + i * 0.06}s`,
                  }}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display uppercase text-[2.25rem] leading-none tracking-tight ${
                        active === s.id ? "text-accent" : "text-ink"
                      }`}
                    >
                      {s.label}
                    </span>
                  </span>
                  <span className="font-mono text-mute group-hover:text-accent">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="mt-auto flex flex-col gap-3 pt-10"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.5s ease ${0.1 + NAV.length * 0.06}s`,
            }}
          >
            <a
              href="https://github.com/marshymcfloat"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-line-soft font-mono text-[11px] uppercase tracking-[0.25em] text-ink"
            >
              Github <span className="text-mute">↗</span>
            </a>
            <a
              href="mailto:canoydaniel06@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-line-soft font-mono text-[11px] uppercase tracking-[0.25em] text-accent"
            >
              canoydaniel06@gmail.com <span className="text-accent">↗</span>
            </a>
            <div className="flex items-center justify-between py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
              <span>Palawan, PH</span>
              <span className="inline-flex items-center gap-1.5 text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                Available
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
