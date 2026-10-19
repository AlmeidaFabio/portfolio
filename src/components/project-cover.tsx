type Variant = "onepiece" | "quiz";

export function ProjectCover({ variant }: { variant: Variant }) {
  if (variant === "onepiece") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#080d09]">
        <div className="absolute -right-16 -top-20 size-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(214,255,75,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(214,255,75,0.08)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_75%)]"
        />
        <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent">
              API REST · v2
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
              Node · Prisma
            </span>
          </div>
          <div>
            <p className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] italic leading-none text-white">
              One Piece
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Character API
            </p>
          </div>
          <div className="space-y-1.5 font-mono text-[10px] leading-relaxed text-white/45">
            <p>
              <span className="text-accent">GET</span> /characters
            </p>
            <p>
              <span className="text-accent">POST</span> /auth/login
            </p>
            <p>
              <span className="text-accent">GET</span> /characters/:id
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#090a10]">
      <div className="absolute -left-20 -top-24 size-64 rounded-full bg-[#6e5bff]/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 right-0 size-56 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-accent" />
            Sala #8421
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
            12 jogadores
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {["A", "B", "C", "D"].map((letter, index) => (
            <div
              key={letter}
              className={
                "flex items-center gap-2 rounded-xl border px-3 py-2.5 " +
                (index === 1
                  ? "border-accent/40 bg-accent/10"
                  : "border-white/10 bg-white/[0.03]")
              }
            >
              <span
                className={
                  "grid size-5 place-items-center rounded-md font-mono text-[9px] " +
                  (index === 1
                    ? "bg-accent text-ink"
                    : "bg-white/10 text-white/60")
                }
              >
                {letter}
              </span>
              <span className="h-1 flex-1 rounded-full bg-white/10" />
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              Pontuação
            </p>
            <p className="font-mono text-xl text-accent">1.240</p>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
            Socket.IO
          </span>
        </div>
      </div>
    </div>
  );
}
