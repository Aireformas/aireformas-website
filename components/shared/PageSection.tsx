import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageSectionTone = "cream" | "sand" | "brown";

const toneClass: Record<PageSectionTone, string> = {
  cream: "bg-cream-base text-ink-primary",
  sand: "bg-sand-container text-ink-primary",
  brown: "bg-deep-brown text-surface",
};

type PageSectionProps = {
  children: ReactNode;
  tone?: PageSectionTone;
  borderTop?: boolean;
  id?: string;
  className?: string;
  compact?: boolean;
};

export function PageSection({
  children,
  tone = "cream",
  borderTop = false,
  id,
  className,
  compact = false,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-space-xl" : "py-space-2xl",
        "px-margin-mobile md:px-margin",
        borderTop && tone !== "brown" && "border-t border-outline/10",
        borderTop && tone === "brown" && "border-t border-white/10",
        toneClass[tone],
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
