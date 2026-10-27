"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/locale/LocaleProvider";
import {
  proyectosCopy,
  type ProjectGalleryItem,
} from "@/content/proyectos";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ProjectMasonry } from "@/components/shared/ProjectMasonry";
import { SplitHero } from "@/components/shared/SplitHero";

function GalleryLightbox({
  item,
  onClose,
  closeLabel,
}: {
  item: ProjectGalleryItem;
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
      <p id={titleId} className="sr-only">
        {item.alt}
      </p>
      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-ink-primary transition-colors hover:bg-surface md:right-8 md:top-8"
        aria-label={closeLabel}
      >
        <MaterialIcon name="close" className="text-xl" />
      </button>
      <div className="relative max-h-[90dvh] max-w-5xl">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          quality={75}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="max-h-[90dvh] w-auto rounded-editorial object-contain"
          priority
        />
      </div>
    </dialog>
  );
}

export function ProyectosPageContent() {
  const locale = useLocale();
  const copy = proyectosCopy[locale];
  const proyectosPageIntro = copy.intro;
  const portfolioGridIntro = copy.grid;
  const gallery = copy.gallery;
  const [activeItem, setActiveItem] = useState<ProjectGalleryItem | null>(null);
  const closeLabel = locale === "es" ? "Cerrar" : "Close";

  const handleClose = useCallback(() => setActiveItem(null), []);

  return (
    <div className="flex flex-col gap-0 bg-cream-base">
      <SplitHero
        label={proyectosPageIntro.label}
        title={proyectosPageIntro.title}
        headline={proyectosPageIntro.headline}
        description={proyectosPageIntro.description}
        support={proyectosPageIntro.support}
        image={proyectosPageIntro.image}
        cta={{ label: proyectosPageIntro.cta, href: "/contacto" }}
      />

      <section
        id="proyectos"
        className="mx-auto w-full max-w-7xl space-y-space-2xl px-margin-mobile pb-space-2xl md:px-margin"
      >
        <div className="flex flex-col justify-between gap-4 pb-2 md:flex-row md:items-baseline">
          <div className="space-y-1">
            <span className="text-label-uppercase text-tertiary">
              {portfolioGridIntro.label}
            </span>
            <h2 className="text-headline-md text-ink-primary">
              {portfolioGridIntro.title}
            </h2>
          </div>
          <p className="max-w-sm text-body-sm text-outline">{portfolioGridIntro.lead}</p>
        </div>

        <ProjectMasonry
          items={gallery}
          onSelect={setActiveItem}
          desktopColumns={3}
          variant="pack"
          accent="collage"
        />
      </section>

      {activeItem ? (
        <GalleryLightbox
          item={activeItem}
          onClose={handleClose}
          closeLabel={closeLabel}
        />
      ) : null}
    </div>
  );
}
