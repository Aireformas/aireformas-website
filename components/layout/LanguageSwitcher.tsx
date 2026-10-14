"use client";

import { cn } from "@/lib/cn";
import type { SiteLocale } from "@/content/navigation";

type LanguageSwitcherProps = {
  locale: SiteLocale;
  onChange: (locale: SiteLocale) => void;
  className?: string;
};

const options: { id: SiteLocale; label: string }[] = [
  { id: "es", label: "ES" },
  { id: "en", label: "EN" },
];

export function LanguageSwitcher({
  locale,
  onChange,
  className,
}: LanguageSwitcherProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em]",
        className,
      )}
      role="group"
      aria-label={locale === "es" ? "Idioma" : "Language"}
    >
      {options.map((option, index) => (
        <span key={option.id} className="flex items-center gap-1.5">
          {index > 0 ? (
            <span className="text-outline-variant/35" aria-hidden>
              |
            </span>
          ) : null}
          <button
            type="button"
            aria-pressed={locale === option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "transition-colors",
              locale === option.id
                ? "text-ink-primary"
                : "text-outline-variant/70 hover:text-on-surface-variant",
            )}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
