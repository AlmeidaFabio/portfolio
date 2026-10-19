import { ArrowUp } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] pb-10 pt-12">
      <div className="shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-accent text-[11px] font-bold text-ink transition-transform duration-300 group-hover:rotate-6">
              FA
            </span>
            <span className="text-sm font-medium text-white/85">Fábio Almeida</span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navegação do rodapé">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-white/10" aria-hidden="true" />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#top"
              aria-label="Voltar ao topo"
              className="ml-2 grid size-9 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50">
          <span>© {new Date().getFullYear()} Fábio Almeida</span>
        </div>
      </div>
    </footer>
  );
}