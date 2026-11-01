"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { SectionIntro } from "@/components/shared/SectionIntro";
import type { FurnitureFamily, FurnitureProgram, SystemsSheetCopy } from "@/lib/types";
import { cn } from "@/lib/cn";

type SystemSheetProps = SystemsSheetCopy;

const spanClass: Record<FurnitureFamily["span"], string> = {
  full: "md:col-span-12",
  half: "md:col-span-6",
  third: "md:col-span-4",
};

const pieceGridClass: Record<FurnitureFamily["span"], string> = {
  full: "flex flex-wrap justify-start gap-x-6 gap-y-6",
  half: "flex flex-wrap justify-start gap-x-6 gap-y-6",
  third: "flex flex-wrap justify-start gap-x-6 gap-y-6",
};

export function SystemSheet({ label, title, lead, programs }: SystemSheetProps) {
  const baseId = useId();
  const firstId = programs[0]?.id ?? "";
  const [active, setActive] = useState(firstId);
  const program = programs.find((item) => item.id === active) ?? programs[0];

  if (!program) return null;

  return (
    <section id="programas" className="border-t border-outline/10 bg-cream-base py-space-2xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
        <SectionIntro label={label} title={title} lead={lead} titleId={`${baseId}-title`} />

        <div
          role="tablist"
          aria-labelledby={`${baseId}-title`}
          className="mt-2 flex gap-8 border-b border-outline/15"
        >
          {programs.map((item) => {
            const selected = item.id === program.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActive(item.id)}
                className={cn(
                  "relative pb-3 text-left transition-colors",
                  selected ? "text-ink-primary" : "text-warm-label hover:text-ink-primary",
                )}
              >
                <span className="block text-label-uppercase">{item.tagline}</span>
                <span className="mt-0.5 block text-headline-md font-light">{item.name}</span>
                {selected ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-[#A89060]"
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${program.id}`}
          className="mt-8 md:mt-10"
        >
          <ProgramBody program={program} />
        </div>
      </div>
    </section>
  );
}

function ProgramBody({ program }: { program: FurnitureProgram }) {
  const families = program.families.filter((family) => family.pieces.length > 0);
  if (families.length === 0) return null;

  return (
    <div>
      <p className="max-w-2xl text-body-md font-light leading-relaxed text-on-surface-variant">
        {program.lead}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-12 md:gap-y-14">
        {families.map((family) => (
          <FamilyBlock key={family.id} family={family} />
        ))}
      </div>
    </div>
  );
}

function FamilyBlock({ family }: { family: FurnitureFamily }) {
  return (
    <div className={cn(spanClass[family.span])}>
      <div className="mb-6 border-t border-[#A89060]/55 pt-4">
        <h3 className="text-body-md font-medium text-ink-primary">{family.title}</h3>
        <p className="mt-0.5 text-body-sm font-light italic text-warm-label">{family.subtitle}</p>
      </div>

      <ul className={pieceGridClass[family.span]}>
        {family.pieces.map((piece) => (
          <li key={piece.id} className="group flex w-40 flex-col items-start text-left sm:w-44">
            <div className="relative aspect-square w-full overflow-hidden rounded-editorial bg-white transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                unoptimized
                sizes="176px"
                className="object-contain object-center p-3"
              />
            </div>
            <p className="mt-2.5 text-body-sm font-light text-on-surface-variant">{piece.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
