import { site } from "@/data/site";

const items = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Fastify",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Astro",
  "Redis",
];

export function Marquee() {
  return (
    <div className="marquee marquee-mask relative select-none overflow-hidden border-y border-white/[0.07] py-4">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={copy + "-" + item}
                className="flex items-center gap-6 pr-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45"
              >
                {item}
                <span className="text-accent/70" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <span className="sr-only">
        Tecnologias: {items.join(", ")}. Portfólio de {site.name}.
      </span>
    </div>
  );
}
