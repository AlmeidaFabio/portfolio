import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { otherProjects, projects, site, type Project } from "@/data/site";
import { ProjectCover } from "@/components/project-cover";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

function hostname(url?: string) {
  if (!url) return "localhost";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionLabel index="02" label="Projetos" />
            <h2 className="mt-6 max-w-xl text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.03] tracking-[-0.035em] text-white">
              Coisas que construí e estão{" "}
              <span className="font-serif italic text-accent">no ar</span>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={site.github + "?tab=repositories"}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-accent"
            >
              Todos os repositórios
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="eyebrow whitespace-nowrap">Também no GitHub</span>
              <span className="h-px flex-1 bg-white/[0.07]" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="mt-2 divide-y divide-white/[0.06]">
            {otherProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <a
                  href={project.repo ?? project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-start gap-4 py-6 transition-colors sm:items-center"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-medium text-white/85 transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] text-white/50">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/55">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent sm:mt-0">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const primaryUrl = project.live ?? project.repo;

  return (
    <article className="group glass-hover relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
      <div className="relative">
        <div className="browser-frame m-2 mb-0 rounded-b-none border-b-0">
          <div className="browser-bar">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="ml-2 flex min-w-0 items-center gap-1.5 truncate rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] text-white/55">
              <span className="size-1 rounded-full bg-accent/60" />
              <span className="truncate">{hostname(primaryUrl)}</span>
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={"Prévia do projeto " + project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            ) : project.cover ? (
              <ProjectCover variant={project.cover} />
            ) : null}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <h3 className="text-xl font-medium tracking-tight text-white">
                {project.title}
              </h3>
              <span className="font-mono text-[10px] text-white/50">{project.year}</span>
              {project.stars ? (
                <span className="flex items-center gap-1 font-mono text-[10px] text-white/45">
                  <Star className="size-2.5 fill-accent text-accent" aria-hidden="true" />
                  {project.stars}
                </span>
              ) : null}
            </div>
            {project.highlight ? (
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent/80">
                {project.highlight}
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={"Repositório de " + project.title}
                className="grid size-8 place-items-center rounded-full border border-white/10 text-white/45 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon className="size-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={"Abrir " + project.title}
                className="grid size-8 place-items-center rounded-full border border-white/10 text-white/45 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}