import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
      <div className="glow -top-20 right-0 size-[420px] bg-accent/10" aria-hidden="true" />
      <div className="shell relative">
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-5 text-[clamp(2.6rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-white">
          Essa página não
          <br />
          <span className="font-serif italic text-accent">compilou.</span>
        </h1>
        <p className="mt-6 max-w-md text-white/55">
          O link pode ter mudado ou nunca ter existido. Que tal voltar para o início?
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
