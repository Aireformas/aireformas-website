import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: string;
  className?: string;
  variant?: "light" | "dark";
};

export function SectionLabel({
  children,
  className,
  variant = "dark",
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[10px] uppercase tracking-[0.28em]",
        variant === "dark" ? "text-white/70" : "text-ink/50",
        className,
      )}
    >
      {children}
    </span>
  );
}
