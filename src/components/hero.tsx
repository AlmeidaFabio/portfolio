import Image from "next/image";
import { ArrowDownRight, MapPin, CircleDot } from "lucide-react";
import { site } from "@/data/site";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="glow -top-32 right-[-12%] size-[560px] bg-accent/10" aria-hidden="true" />
      <div className="glow left-[-18%] top-1/3 size-[460px] bg-[#6e5bff]/10" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:82px_82px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]"
      />

      <div className="shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <Reveal>
              <span className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2.5 pr-4">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                  {site.availability}
                </span>
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="eyebrow mt-8">Fábio Almeida · Full Stack Developer</p>
              <h1 className="mt-5 text-[clamp(2.9rem,7.6vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
                Do banco de dados
                <br className="hidden sm:block" /> à{" "}
                <span className="font-serif italic tracking-[-0.02em] text-accent">
                  interface.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-relaxed text-white/60 sm:text-lg">
                Construo aplicações web completas com{" "}
                <strong className="font-medium text-white/85">
                  TypeScript, React, Next.js e Node
                </strong>
                . APIs que aguentam produção, interfaces rápidas e acessíveis, e
                deploy sem drama.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projetos" className="btn btn-primary group">
                  Ver projetos
                  <ArrowDownRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a href="#contato" className="btn btn-ghost">
                  Vamos conversar
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3 text-accent/80" aria-hidden="true" />
                  {site.location}
                </span>
                <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />
                <span className="flex items-center gap-1.5">
                  <CircleDot className="size-3 text-accent/80" aria-hidden="true" />
                  Construindo desde 2019
                </span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto hidden items-center gap-1 text-white/45 transition-colors hover:text-accent sm:flex"
                >
                  GitHub
                  <ArrowDownRight className="size-3 -rotate-90" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <Portrait />
          </Reveal>
        </div>
      </div>

      <div className="relative mt-16 sm:mt-24">
        <Marquee />
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[390px] lg:mr-0 lg:max-w-[410px]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(214,255,75,0.22),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(110,91,255,0.2),transparent_55%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-[-18px] h-10 rounded-full bg-ink/80 blur-2xl"
      />

      <div className="group relative rotate-[-2deg] rounded-[1.75rem] bg-cream p-2.5 shadow-[0_50px_120px_-45px_rgba(0,0,0,0.95)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:rotate-0">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#e7dfcd]">
          <Image
            src={site.avatar}
            alt="Retrato de Fábio Almeida"
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 410px"
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#1a1508]/35 via-transparent to-transparent"
          />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-ink/55 px-2.5 py-1 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/85">
              Fábio Almeida
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 pb-0.5 pt-2.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70">
            Desenvolvedor full stack
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/65">
            2026
          </span>
        </div>
      </div>

      <div className="animate-float absolute -left-4 top-16 hidden items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md sm:flex lg:-left-8">
        <span className="size-1.5 rounded-full bg-[#3178c6]" />
        <span className="font-mono text-[10px] tracking-wide text-ink/80">TypeScript</span>
      </div>

      <div
        className="animate-float absolute -right-3 top-1/2 hidden items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-md sm:flex lg:-right-6"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="size-1.5 rounded-full bg-accent" />
        <span className="font-mono text-[10px] tracking-wide text-ink/80">Next.js</span>
      </div>


    </div>
  );
}