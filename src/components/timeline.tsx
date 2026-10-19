import { GraduationCap } from "lucide-react";
import { milestones } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function Timeline() {
  return (
    <section id="trajetoria" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionLabel index="04" label="Trajetória" />
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.035em] text-white">
                Sete anos entre o primeiro{" "}
                <span className="font-mono text-[0.72em] tracking-tight text-accent">
                  console.log
                </span>{" "}
                e o deploy.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
                Comecei estudando por conta própria, passei pela graduação e fui
                empilhando projetos até conseguir entregar produtos completos. Cada
                etapa virou uma peça da stack.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass mt-9 flex items-start gap-3.5 rounded-2xl p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent">
                  <GraduationCap className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">
                    Análise e Desenvolvimento de Sistemas
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                    Estácio · 2022
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent"
            />

            {milestones.map((milestone, index) => (
              <li key={milestone.year} className="group relative pb-11 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[7px] size-[7px] rounded-full bg-white/25 ring-4 ring-ink transition-colors duration-300 group-hover:bg-accent"
                />
                <Reveal delay={index * 50}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-sm tracking-wide text-accent">
                      {milestone.year}
                    </span>
                    <span className="chip">{milestone.tag}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/55">
                    {milestone.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}