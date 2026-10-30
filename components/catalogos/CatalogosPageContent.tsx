"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { SplitHero } from "@/components/shared/SplitHero";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { catalogosCopy, type CatalogItem } from "@/content/catalogos";

function CatalogViewer({
  item,
  onClose,
  labels,
}: {
  item: CatalogItem;
  onClose: () => void;
  labels: (typeof catalogosCopy)["es"]["viewer"];
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
      className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-screen max-w-none flex-col bg-ink-primary/90 p-0 backdrop:bg-transparent open:flex"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-8">
        <div className="min-w-0">
          <p id={titleId} className="truncate font-medium text-surface">
            {item.title}
          </p>
          <p className="truncate text-sm text-surface/70">{item.subtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={item.pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm text-surface transition-colors hover:bg-white/10 sm:inline-flex"
          >
            <MaterialIcon name="open_in_new" className="text-base" />
            {labels.openTab}
          </a>
          <a
            href={item.pdfSrc}
            download
            className="hidden items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm text-surface transition-colors hover:bg-white/10 sm:inline-flex"
          >
            <MaterialIcon name="download" className="text-base" />
            {labels.download}
          </a>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-ink-primary transition-colors hover:bg-surface"
            aria-label={labels.close}
          >
            <MaterialIcon name="close" className="text-xl" />
          </button>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4 md:p-6">
        <iframe
          src={item.pdfSrc}
          title={`${item.title} — ${item.subtitle}`}
          className="min-h-0 w-full flex-1 rounded-editorial border border-white/10 bg-surface"
        />
        <div className="mt-3 flex gap-3 sm:hidden">
          <a
            href={item.pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-editorial bg-surface/90 px-3 py-2.5 text-sm text-ink-primary"
          >
            <MaterialIcon name="open_in_new" className="text-base" />
            {labels.openTab}
          </a>
          <a
            href={item.pdfSrc}
            download
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-editorial border border-white/20 px-3 py-2.5 text-sm text-surface"
          >
            <MaterialIcon name="download" className="text-base" />
            {labels.download}
          </a>
        </div>
      </div>
    </dialog>
  );
}

function CatalogCard({
  item,
  onOpen,
  viewLabel,
}: {
  item: CatalogItem;
  onOpen: (item: CatalogItem) => void;
  viewLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group flex h-full flex-col rounded-editorial border border-outline/10 bg-sand-container p-5 text-left transition-colors hover:border-primary/30 hover:bg-cream-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:p-6"
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-editorial border border-outline/10 bg-cream-base transition-colors group-hover:border-primary/20">
        <Image
          src={item.cover.src}
          alt={item.cover.alt}
          width={item.cover.width ?? 1200}
          height={item.cover.height ?? 900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-primary/25 via-transparent to-transparent opacity-80" />
        <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-medium text-ink-primary shadow-sm">
          <MaterialIcon name="menu_book" className="text-sm" />
          PDF
        </span>
      </div>
      <div className="mt-auto space-y-2">
        <p className="text-label-uppercase text-warm-label">{item.subtitle}</p>
        <h3 className="text-headline-md text-ink-primary">{item.title}</h3>
        <p className="text-body-sm text-ink-primary/75">{item.description}</p>
        <span className="inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
          {viewLabel}
          <MaterialIcon name="arrow_forward" className="text-base transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}

export function CatalogosPageContent() {
  const locale = useLocale();
  const copy = catalogosCopy[locale];
  const [activeItem, setActiveItem] = useState<CatalogItem | null>(null);
  const viewLabel = locale === "es" ? "Ver catálogo" : "View catalog";
  const handleClose = useCallback(() => setActiveItem(null), []);

  return (
    <div className="flex flex-col gap-0 bg-cream-base">
      <SplitHero
        label={copy.hero.label}
        title={copy.hero.title}
        headline={copy.hero.headline}
        description={copy.hero.description}
        support={copy.hero.support}
        image={copy.hero.image}
        cta={{ label: copy.hero.cta, href: "/contacto" }}
      />

      <section
        id="catalogos"
        className="mx-auto w-full max-w-7xl space-y-8 px-margin-mobile pb-space-2xl md:space-y-10 md:px-margin"
      >
        <div className="space-y-2 border-t border-outline/10 pt-space-xl">
          <p className="text-label-uppercase text-warm-label">{copy.grid.label}</p>
          <h2 className="text-headline-lg text-ink-primary">{copy.grid.title}</h2>
          <p className="max-w-2xl text-body-md text-ink-primary/80">{copy.grid.lead}</p>
        </div>

        <ul className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item) => (
            <li key={item.id}>
              <CatalogCard item={item} onOpen={setActiveItem} viewLabel={viewLabel} />
            </li>
          ))}
        </ul>
      </section>

      {activeItem ? (
        <CatalogViewer item={activeItem} onClose={handleClose} labels={copy.viewer} />
      ) : null}
    </div>
  );
}
