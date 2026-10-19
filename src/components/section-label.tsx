type Props = {
  index: string;
  label: string;
};

export function SectionLabel({ index, label }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
        {index}
      </span>
      <span className="h-px w-7 bg-white/20" aria-hidden="true" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
