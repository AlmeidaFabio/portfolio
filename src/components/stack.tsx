import { learning, stack } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function Stack() {
  return (
    <section id="stack" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow right-[-10%] top-1/4 size-[380px] bg-[#6e5bff]/[0.08]" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionLabel index="03" label="Stack" />
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.035em] text-white">
                Ferramentas que uso para{" "}
                <span className="font-serif italic text-accent">tirar do papel</span>.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/50">
                Não é uma lista de tudo que já vi: é o que uso com confiança para
                entregar um produto do começo ao fim.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass mt-9 rounded-2xl p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                  Aprendendo agora
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {learning.map((item) => (
                    <span key={item} className="chip">
                      <span className="size-1 rounded-full bg-accent/70" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-white/40">
                  Sempre tem alguma coisa nova na fila. Aprender fazendo, com projeto
                  real, é o que funciona pra mim.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.07] sm:grid-cols-2">
              {stack.map((group, index) => (
                <div
                  key={group.group}
                  className="group/group bg-[#08080b] p-6 transition-colors duration-500 hover:bg-[#0b0b10] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {group.group}
                    </h3>
                    <span className="font-mono text-[10px] text-white/45">
                      0{index + 1}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[15px] text-white/60 transition-colors duration-300 hover:text-white"
                      >
                        <span
                          aria-hidden="true"
                          className="size-1 rounded-full bg-white/20 transition-colors duration-300 group-hover/group:bg-accent/70"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}