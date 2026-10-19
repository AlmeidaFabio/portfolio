import { LayoutTemplate, Server, Rocket } from "lucide-react";
import { learning } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const services = [
  {
    title: "Interfaces",
    description:
      "Front-end em React, Next.js ou Astro. Rápido, responsivo e acessível, sem sacrificar personalidade.",
    icon: LayoutTemplate,
  },
  {
    title: "APIs",
    description:
      "Back-end em Node com autenticação, validação, testes e banco de dados modelado para durar.",
    icon: Server,
  },
  {
    title: "Do zero ao deploy",
    description:
      "Modelagem, integração, CI/CD e publicação. Do primeiro commit ao link no ar.",
    icon: Rocket,
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionLabel index="01" label="Sobre" />
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.035em] text-white">
                Código com{" "}
                <span className="font-serif italic text-accent">cuidado</span>, do
                primeiro commit ao deploy.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 hidden items-center gap-3 lg:flex">
                <span className="h-px w-14 bg-white/15" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                  Full stack desde 2019
                </span>
              </div>
              <div className="mt-10 hidden flex-wrap gap-2 lg:flex">
                {learning.map((item) => (
                  <span key={item} className="chip">
                    <span className="size-1 rounded-full bg-accent/70" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-3 hidden font-mono text-[10px] uppercase tracking-[0.14em] text-white/25 lg:block">
                Estudando agora
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-white/70 sm:text-xl sm:leading-relaxed">
                Sou desenvolvedor full stack formado em Análise e Desenvolvimento de
                Sistemas. Desde 2019 venho construindo na web, comecei com HTML, CSS e
                JavaScript e hoje trabalho com todo o ciclo de um produto: modelagem de
                dados, API, interface e deploy.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/55 sm:text-base">
                <p>
                  Gosto de código legível, de testes que pegam o que importa e de
                  interfaces que não fazem o usuário pensar. Já coloquei em produção uma
                  API com autenticação JWT, upload de imagens e Docker, um quiz
                  multijogador com WebSockets e um blog estático com acessibilidade 100.
                </p>
                <p>
                  Estou aberto a{" "}
                  <span className="text-white/85">oportunidades full stack</span> e a{" "}
                  <span className="text-white/85">projetos freelance</span>. Se você tem
                  uma vaga ou uma ideia,{" "}
                  <a href="#contato" className="link-underline text-accent">
                    vamos conversar
                  </a>
                  .
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={120 + index * 80}>
                    <div className="glass glass-hover group h-full rounded-2xl p-5">
                      <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-sm font-medium text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                        {service.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.07] pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                <span>Brasil · Remoto</span>
                <span className="h-3 w-px bg-white/15" aria-hidden="true" />
                <span>Inglês intermediário</span>
                <span className="h-3 w-px bg-white/15" aria-hidden="true" />
                <span>Remoto ou híbrido</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}