import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageIntroCta = { label: string; href: string };

type PageIntroProps = {
  label: string;
  title: string;
  description: string;
  cta?: PageIntroCta;
  secondaryCta?: PageIntroCta;
  children?: ReactNode;
  className?: string;
};

export function PageIntro({
  label,
  title,
  description,
  cta,
  secondaryCta,
  children,
  className,
}: PageIntroProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-7xl px-margin-mobile pb-space-lg pt-34 md:px-margin md:pt-42",
        className,
      )}
    >
      <div className="flex max-w-3xl flex-col gap-space-sm">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          <span className="text-label-uppercase text-tertiary">{label}</span>
        </div>
        <h1 className="text-headline-lg tracking-tight text-ink-primary">{title}</h1>
        <p className="mt-1 max-w-2xl text-body-lg font-light text-on-surface-variant">
          {description}
        </p>
        {cta || secondaryCta ? (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {cta ? (
              <Link
                href={cta.href}
                className="rounded-full bg-primary px-6 py-2.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep"
              >
                {cta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-outline-variant px-6 py-2.5 text-label-uppercase text-ink-primary transition-colors hover:bg-sand-container"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      {children}
    </section>
  );
}
