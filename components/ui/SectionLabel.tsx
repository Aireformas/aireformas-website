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
        "inline-block text-label-uppercase",
        variant === "dark" ? "text-white/70" : "text-warm-label",
        className,
      )}
    >
      {children}
    </span>
  );
}
