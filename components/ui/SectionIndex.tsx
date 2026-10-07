import { cn } from "@/lib/cn";

type SectionIndexProps = {
  index: string;
  label: string;
  className?: string;
  vertical?: boolean;
};

export function SectionIndex({
  index,
  label,
  className,
  vertical = false,
}: SectionIndexProps) {
  return (
    <div
      className={cn(
        "font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45",
        vertical &&
          "hidden lg:flex lg:flex-col lg:items-start lg:gap-3 lg:[writing-mode:vertical-rl] lg:rotate-180",
        className,
      )}
    >
      <span className="text-ink/35">{index}</span>
      {!vertical ? <span className="ml-2 text-ink/50">{label}</span> : null}
      {vertical ? <span className="text-ink/50">{label}</span> : null}
    </div>
  );
}
