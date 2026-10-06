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
        "inline-flex items-center rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]",
        variant === "dark"
          ? "border-white/10 bg-glass text-white/90 backdrop-blur-md"
          : "border-ink/12 bg-transparent text-ink/65",
        className,
      )}
    >
      {children}
    </span>
  );
}
