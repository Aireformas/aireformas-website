import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";

export type TopicGridItem = {
  id?: string;
  title: string;
  description: string;
};

type TopicGridSectionProps = {
  label: string;
  title: string;
  lead?: string;
  items: readonly TopicGridItem[];
  tone?: "cream" | "sand";
  borderTop?: boolean;
  columns?: 2 | 3;
  footer?: ReactNode;
};

const toneClass = {
  cream: "bg-cream-base text-ink-primary",
  sand: "bg-sand-container text-ink-primary",
} as const;

const columnClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
} as const;

export function TopicGridSection({
  label,
  title,
  lead,
  items,
  tone = "cream",
  borderTop = false,
  columns = 2,
  footer,
}: TopicGridSectionProps) {
  return (
    <section
      className={cn(
        "py-space-2xl px-margin-mobile md:px-margin",
        toneClass[tone],
        borderTop && "border-t border-outline/15",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro label={label} title={title} lead={lead} />

        <ul className={cn("grid gap-6", columnClass[columns])}>
          {items.map((item, index) => (
            <InView
              key={item.id ?? item.title}
              id={item.id}
              staggerIndex={index}
              as="li"
              className="list-none border-t border-outline/25 pt-6 scroll-mt-28"
            >
              <h3 className="text-headline-sm font-light">{item.title}</h3>
              <p className="mt-3 text-body-sm font-light text-on-surface-variant">
                {item.description}
              </p>
            </InView>
          ))}
        </ul>

        {footer}
      </div>
    </section>
  );
}
