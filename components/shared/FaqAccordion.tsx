"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";
import { cn } from "@/lib/cn";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { sectionShellClass } from "@/lib/sectionSurface";

type FaqAccordionProps = {
  label?: string;
  title?: string;
  items: FaqItem[];
  hideIntro?: boolean;
};

export function FaqAccordion({
  label,
  title,
  items,
  hideIntro = false,
}: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const showIntro = !hideIntro && Boolean(label && title);

  return (
    <section className={sectionShellClass("paper", { borderTop: true })}>
      <div className="mx-auto max-w-7xl">
        {showIntro ? <SectionIntro label={label!} title={title!} /> : null}
        <div
          className={cn(
            "divide-y divide-outline/20 border-y border-outline/20",
            showIntro ? "mt-12" : "mt-0",
          )}
        >
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-button-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-headline-sm font-light">{item.question}</span>
                  <span
                    className={cn(
                      "text-xl transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-body-sm font-light text-on-surface-variant">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
