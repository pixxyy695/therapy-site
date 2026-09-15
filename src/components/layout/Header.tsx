"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { nav, ctaLabel, site } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-background/95 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-sm"
          : "bg-background/0"
      )}
    >
      <Container className="flex h-20 items-center justify-between sm:h-24">
        <Link
          href="/"
          className="font-display text-[1.15rem] font-medium tracking-tight text-primary-dark sm:text-[1.3rem]"
          onClick={() => setMenuOpen(false)}
        >
          {site.therapistName}
          <span className="ml-2 hidden text-[0.65rem] font-normal uppercase tracking-[0.2em] text-ink-soft sm:inline">
            {site.credentials}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.92rem] font-medium text-ink/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={clsx(
              "h-[1.5px] w-6 bg-primary-dark transition-transform duration-300",
              menuOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-[1.5px] w-6 bg-primary-dark transition-transform duration-300",
              menuOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={clsx(
          "fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto bg-background transition-all duration-300 ease-out lg:hidden",
          menuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-8">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              className="border-b border-border py-4 font-display text-2xl text-primary-dark"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8">
            <Button href="#contact" variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
              {ctaLabel}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
