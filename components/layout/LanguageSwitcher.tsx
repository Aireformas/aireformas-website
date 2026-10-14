"use client";

import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  className?: string;
  onNavigate?: () => void;
};

export function LanguageSwitcher({ className, onNavigate }: LanguageSwitcherProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em]",
        className,
      )}
      role="group"
      aria-label="Idioma"
    >
      <button
        type="button"
        className="text-outline-variant/80 transition-colors hover:text-on-surface-variant"
        title="English — próximamente"
        onClick={onNavigate}
      >
        EN
      </button>
      <span className="text-outline-variant/35" aria-hidden>|</span>
      <span className="text-ink-primary" aria-current="true">
        ES
      </span>
    </div>
  );
}
