import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons";
import { site } from "@/data/site";
import { ContactActions } from "@/components/contact-actions";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const socials = [
  { label: "GitHub", href: site.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedinIcon },
  { label: "WhatsApp", href: site.whatsapp, icon: WhatsappIcon },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0a0a0f] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="glow -right-24 -top-24 size-[420px] bg-accent/[0.12]"
            />
            <div
              aria-hidden="true"
              className="glow -bottom-32 left-1/4 size-[360px] bg-[#6e5bff]/[0.12]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_70%)]"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
              <div>
                <SectionLabel index="05" label="Contato" />
                <h2 className="mt-6 text-[clamp(2.3rem,5.2vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white">
                  Vamos construir
                  <br />
                  algo{" "}
                  <span className="font-serif italic text-accent">juntos?</span>
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/55 sm:text-base">
                  Estou disponível para oportunidades full stack e projetos freelance.
                  Me conte o que você tem em mente - normalmente respondo no mesmo dia.
                </p>

                <div className="mt-8 flex items-center gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:border-accent/40 hover:text-accent"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </a>
                    );
                  })}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
                    {site.location}
                  </span>
                </div>
              </div>

              <ContactActions />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
