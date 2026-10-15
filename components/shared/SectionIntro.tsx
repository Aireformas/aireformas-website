import { cn } from "@/lib/cn";

type SectionIntroProps = {
  label: string;
  title: string;
  lead?: string;
  className?: string;
  titleClassName?: string;
  titleId?: string;
  dark?: boolean;
};

export function SectionIntro({
  label,
  title,
  lead,
  className,
  titleClassName,
  titleId,
  dark = false,
}: SectionIntroProps) {
  return (
    <div className={cn("mb-space-xl max-w-3xl", className)}>
      <span
        className={cn(
          "mb-2 block text-label-uppercase",
          dark ? "text-tertiary-fixed" : "text-warm-label",
        )}
      >
        {label}
      </span>
      <h2
        id={titleId}
        className={cn(
          "text-headline-lg",
          dark ? "text-white" : "text-ink-primary",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-2 text-body-md font-light",
            dark ? "text-surface/85" : "text-on-surface-variant",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
