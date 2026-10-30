"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { SplitHero } from "@/components/shared/SplitHero";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { catalogosCopy, type CatalogItem } from "@/content/catalogos";
import { prefersNativePdfViewer } from "@/lib/catalogPdf";

function useNativePdfViewer() {
  const [native, setNative] = useState(false);

  useEffect(() => {
    const update = () => setNative(prefersNativePdfViewer());
    update();
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return native;
}

function CatalogViewerShell({
  item,
  onClose,
  labels,
  children,
}: {
  item: CatalogItem;
  onClose: () => void;
  labels: (typeof catalogosCopy)["es"]["viewer"];
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add("overflow-hidden");

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("close", handleClose);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-screen max-w-none flex-col overflow-hidden bg-ink-primary/90 p-0 backdrop:bg-transparent open:flex"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-8">
        <div className="min-w-0">
          <p id={titleId} className="truncate font-medium text-surface">
            {item.title}
          </p>
          <p className="truncate text-sm text-surface/70">{item.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface/90 text-ink-primary transition-colors hover:bg-surface"
          aria-label={labels.close}
        >
          <MaterialIcon name="close" className="text-xl" />
        </button>
      </div>
      {children}
    </dialog>
  );
}

function CatalogViewerDesktop({
  item,
  onClose,
  labels,
}: {
  item: CatalogItem;
  onClose: () => void;
  labels: (typeof catalogosCopy)["es"]["viewer"];
}) {
  return (
    <CatalogViewerShell item={item} onClose={onClose} labels={labels}>
      <div className="flex min-h-0 flex-1 flex-col gap-3 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:p-6">
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-editorial border border-white/10 bg-surface">
          <iframe
            src={item.pdfSrc}
            title={`${item.title} — ${item.subtitle}`}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="flex shrink-0 flex-wrap justify-end gap-2">
          <a
            href={item.pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm text-surface transition-colors hover:bg-white/10"
          >
            <MaterialIcon name="open_in_new" className="text-base" />
            {labels.openTab}
          </a>
          <a
            href={item.downloadSrc}
            download={item.downloadFilename}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm text-surface transition-colors hover:bg-white/10"
          >
            <MaterialIcon name="download" className="text-base" />
            {labels.download}
          </a>
        </div>
      </div>
    </CatalogViewerShell>
  );
}

function CatalogViewerMobile({
  item,
  onClose,
  labels,
}: {
  item: CatalogItem;
  onClose: () => void;
  labels: (typeof catalogosCopy)["es"]["viewer"];
}) {
  return (
    <CatalogViewerShell item={item} onClose={onClose} labels={labels}>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2">
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-editorial border border-white/15 bg-surface/10">
          <Image
            src={item.cover.src}
            alt=""
            width={item.cover.width ?? 1200}
            height={item.cover.height ?? 900}
            sizes="100vw"
            className="h-full w-full object-cover"
            aria-hidden
          />
        </div>
        <p className="text-body-md text-surface/90">{labels.mobileLead}</p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={item.pdfSrc}
            className="inline-flex w-full items-center justify-center gap-2 rounded-editorial bg-surface px-4 py-3.5 text-sm font-medium text-ink-primary"
          >
            <MaterialIcon name="menu_book" className="text-lg" />
            {labels.openInBrowser}
          </a>
          <a
            href={item.downloadSrc}
            download={item.downloadFilename}
            className="inline-flex w-full items-center justify-center gap-2 rounded-editorial border border-white/25 px-4 py-3.5 text-sm text-surface"
          >
            <MaterialIcon name="download" className="text-lg" />
            {labels.download}
          </a>
        </div>
      </div>
    </CatalogViewerShell>
  );
}

function CatalogViewer({
  item,
  onClose,
  labels,
}: {
  item: CatalogItem;
  onClose: () => void;
  labels: (typeof catalogosCopy)["es"]["viewer"];
}) {
  const native = useNativePdfViewer();

  if (native) {
    return <CatalogViewerMobile item={item} onClose={onClose} labels={labels} />;
  }

  return <CatalogViewerDesktop item={item} onClose={onClose} labels={labels} />;
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
        <p className="text-[0.6875rem] font-medium leading-4 tracking-normal text-warm-label uppercase">
          {item.subtitle}
        </p>
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
