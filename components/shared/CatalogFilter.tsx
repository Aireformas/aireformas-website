"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FinishPalette } from "@/components/shared/FinishPalette";
import { KitchenPlan } from "@/components/shared/KitchenPlan";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { useLocale } from "@/components/locale/LocaleProvider";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { CatalogPanel, CatalogPhoto, FinishPaletteCopy } from "@/lib/types";
import { cn } from "@/lib/cn";

type CatalogFilterProps = {
  label: string;
  title: string;
  panels: readonly CatalogPanel[];
  finishes: FinishPaletteCopy;
};

export function CatalogFilter({ label, title, panels, finishes }: CatalogFilterProps) {
  const baseId = useId();
  const tabs = [
    ...panels.map((panel) => ({ id: panel.id, chip: panel.chip })),
    { id: "acabados", chip: finishes.chip },
  ];
  const [active, setActive] = useState(tabs[0]?.id ?? "acabados");
  const panel = panels.find((item) => item.id === active);

  return (
    <section id="sistemas" className="border-t border-outline/10 bg-cream-base py-space-2xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
        <SectionIntro label={label} title={title} titleId={`${baseId}-title`} className="mb-8" />

        <div role="tablist" aria-labelledby={`${baseId}-title`} className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-label-uppercase transition-colors",
                  selected
                    ? "border-slate-deep bg-slate-deep text-white"
                    : "border-outline/30 text-ink-primary hover:border-slate-deep",
                )}
              >
                {tab.chip}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-8"
      >
        {panel ? <PanelBody panel={panel} /> : null}
        {active === "acabados" ? (
          <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
            <FinishPalette title={finishes.title} lead={finishes.lead} groups={finishes.groups} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PanelBody({ panel }: { panel: CatalogPanel }) {
  const locale = useLocale();
  const closeLabel = locale === "es" ? "Cerrar" : "Close";
  const openLabel = locale === "es" ? "Ampliar imagen" : "Enlarge image";
  const hasMedia = panel.photos.length > 0 || Boolean(panel.plan);
  const [preview, setPreview] = useState<CatalogPhoto | null>(null);
  const handleClose = useCallback(() => setPreview(null), []);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
        <h3 className="text-headline-md font-light text-ink-primary">{panel.title}</h3>
        <p className="mt-2 max-w-2xl text-body-sm font-light leading-relaxed text-on-surface-variant">
          {panel.lead}
        </p>
      </div>

      {hasMedia ? (
        <div className="relative mt-6">
          <div
            className="custom-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pl-margin-mobile md:gap-5 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
            role="list"
            tabIndex={0}
            aria-label={panel.title}
          >
            {panel.photos.map((photo) => (
              <figure
                key={photo.src}
                role="listitem"
                className="w-[min(78vw,280px)] shrink-0 snap-start sm:w-64 md:w-72"
              >
                <button
                  type="button"
                  onClick={() => setPreview(photo)}
                  aria-label={`${openLabel}: ${photo.caption}`}
                  className="group relative block w-full overflow-hidden rounded-editorial border border-outline/12 bg-sand-container text-left transition-colors hover:border-slate-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-accent/40"
                >
                  <span className="relative block aspect-4/5">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 78vw, 288px"
                      className="object-contain object-center p-1.5 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </span>
                  <span className="pointer-events-none absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream-base/90 text-ink-primary opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <MaterialIcon name="zoom_in" className="text-lg" />
                  </span>
                </button>
                <figcaption className="mt-2.5 text-body-sm font-light text-on-surface-variant">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
            {panel.photos.length === 0 && panel.plan ? (
              <div role="listitem" className="shrink-0 snap-start">
                <KitchenPlan kind={panel.plan} label="Plan" />
              </div>
            ) : null}
            <div className="w-5 shrink-0 snap-end md:w-16" aria-hidden />
          </div>
          <p className="mx-auto mt-1 hidden max-w-7xl items-center gap-1.5 px-margin-mobile text-label-uppercase text-warm-label sm:flex md:px-margin">
            <span>Desliza</span>
            <MaterialIcon name="arrow_forward" className="text-base" />
          </p>
        </div>
      ) : null}

      <ul className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-2 px-margin-mobile md:px-margin">
        {panel.variants.map((variant) => (
          <li
            key={variant}
            className="rounded-full border border-outline/20 px-3 py-1 text-label-uppercase text-warm-label"
          >
            {variant}
          </li>
        ))}
      </ul>

      {preview ? (
        <CatalogLightbox photo={preview} onClose={handleClose} closeLabel={closeLabel} />
      ) : null}
    </div>
  );
}

function CatalogLightbox({
  photo,
  onClose,
  closeLabel,
}: {
  photo: CatalogPhoto;
  onClose: () => void;
  closeLabel: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-screen max-w-none items-center justify-center bg-ink-primary/85 p-4 backdrop:bg-transparent open:flex md:p-10"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="flex max-h-[90dvh] w-full max-w-5xl flex-col items-center gap-3">
        <p id={titleId} className="sr-only">
          {photo.alt}
        </p>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-ink-primary transition-colors hover:bg-surface md:right-8 md:top-8"
          aria-label={closeLabel}
        >
          <MaterialIcon name="close" className="text-xl" />
        </button>
        <div className="relative h-[min(78dvh,900px)] w-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="rounded-editorial object-contain"
            priority
          />
        </div>
        <p className="text-center text-body-sm font-light text-surface/90">{photo.caption}</p>
      </div>
    </dialog>
  );
}
