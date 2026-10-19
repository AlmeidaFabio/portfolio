"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const anchor = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= anchor) current = section.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="shell relative z-10">
        <div
          className={
            "flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition-all duration-500 sm:rounded-full sm:px-4 " +
            (scrolled || open
              ? "glass shadow-[0_20px_70px_-30px_rgba(0,0,0,0.95)]"
              : "border border-transparent")
          }
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5 rounded-full pl-1 pr-2"
          >
            <span className="grid size-8 place-items-center rounded-full bg-accent text-[11px] font-bold tracking-tight text-ink transition-transform duration-300 group-hover:rotate-6">
              FA
            </span>
            <span className="text-sm font-medium tracking-tight text-white/90">
              Fábio Almeida
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    "rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300 " +
                    (isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-white/55 hover:text-white")
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden items-center gap-1.5 rounded-full bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:bg-accent hover:text-ink sm:inline-flex"
            >
              Falar comigo
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid size-9 place-items-center rounded-full bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12] lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="animate-fade-in fixed inset-0 top-0 z-0 bg-ink/95 pt-28 backdrop-blur-xl lg:hidden"
        >
          <nav className="shell flex flex-col gap-1" aria-label="Navegação mobile">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-white/[0.07] py-4"
              >
                <span className="text-3xl font-medium tracking-tight text-white/85 transition-colors group-hover:text-accent">
                  {link.label}
                </span>
                <span className="font-mono text-[10px] text-white/30">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
          <div className="shell mt-8 flex flex-col gap-3">
            <a href={"mailto:" + site.email} className="btn btn-primary w-full">
              Enviar e-mail
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost w-full"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}