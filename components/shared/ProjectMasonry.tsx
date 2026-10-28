"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ProjectGalleryItem } from "@/content/proyectos";
import { cn } from "@/lib/cn";

function aspectRatio(item: ProjectGalleryItem): number {
  return item.height / item.width;
}

function splitColumns(
  items: readonly ProjectGalleryItem[],
  count: number,
): ProjectGalleryItem[][] {
  const columns = Array.from({ length: count }, () => ({
    items: [] as ProjectGalleryItem[],
    height: 0,
  }));

  const ordered = [...items].sort((a, b) => aspectRatio(b) - aspectRatio(a));

  for (const item of ordered) {
    const shortest = columns.reduce((best, column) =>
      column.height < best.height ? column : best,
    );
    shortest.items.push(item);
    shortest.height += aspectRatio(item);
  }

  return columns.map((column) => column.items);
}

function useMasonryColumns(desktopColumns: number): number {
  const [count, setCount] = useState(Math.min(2, desktopColumns));

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setCount(media.matches ? desktopColumns : Math.min(2, desktopColumns));
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [desktopColumns]);

  return count;
}

const COLLAGE_TILT = ["-rotate-1", "rotate-1", "-rotate-[0.6deg]", "rotate-[0.8deg]"] as const;
const COLLAGE_SHIFT = ["", "ml-1 md:ml-2", "mr-1 md:mr-3", "md:ml-1"] as const;
const COLLAGE_SCALE = ["", "md:scale-[0.96]", "", "md:scale-[0.94]"] as const;

type ProjectMasonryProps = {
  items: readonly ProjectGalleryItem[];
  onSelect?: (item: ProjectGalleryItem) => void;
  href?: string;
  priorityCount?: number;
  desktopColumns?: 2 | 3 | 4;
  /** `pack` = natural aspect masonry. `fill` = equal cells, no empty gaps. */
  variant?: "pack" | "fill";
  /** Editorial = staggered columns + index. Collage = playful tilt/offsets. */
  accent?: "plain" | "editorial" | "collage";
  /** Fill tiles only. `4/5` is the default portrait card. */
  tileAspect?: "4/5" | "3/4" | "1/1";
  overlayLabel?: string;
  className?: string;
};

const TILE_ASPECT = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
} as const;

function imageSizes(columns: 2 | 3 | 4): string {
  if (columns === 4) return "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";
  if (columns === 2) return "(max-width: 768px) 100vw, 50vw";
  return "(max-width: 768px) 50vw, 33vw";
}

function fillGridClass(columns: 2 | 3 | 4): string {
  if (columns === 4) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  if (columns === 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-2 md:grid-cols-3";
}

function TileShell({
  item,
  index,
  priority,
  href,
  onSelect,
  fill,
  accent,
  tileAspect = "4/5",
  sizes,
  overlayLabel,
}: {
  item: ProjectGalleryItem;
  index: number;
  priority?: boolean;
  href?: string;
  onSelect?: (item: ProjectGalleryItem) => void;
  fill?: boolean;
  accent?: "plain" | "editorial" | "collage";
  tileAspect?: "4/5" | "3/4" | "1/1";
  sizes: string;
  overlayLabel?: string;
}) {
  const editorial = accent === "editorial";
  const collage = accent === "collage";
  const image = fill ? (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      quality={60}
      sizes={sizes}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      priority={priority}
    />
  ) : (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      quality={60}
      sizes={sizes}
      className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      priority={priority}
    />
  );

  const className = cn(
    "group relative block w-full overflow-hidden text-left",
    editorial &&
      !fill &&
      "rounded-sm shadow-[0_1px_0_rgba(46,42,38,0.06)] ring-1 ring-ink-primary/8 transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(46,42,38,0.45)]",
    editorial &&
      fill &&
      "rounded-editorial shadow-[0_10px_28px_-20px_rgba(46,42,38,0.45)] ring-1 ring-ink-primary/10 transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-22px_rgba(46,42,38,0.5)]",
    collage &&
      cn(
        "rounded-[2px] bg-surface p-1.5 shadow-[0_10px_28px_-18px_rgba(46,42,38,0.55)] ring-1 ring-ink-primary/10 transition-[transform,box-shadow] duration-500 ease-out",
        "hover:z-10 hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_22px_44px_-22px_rgba(46,42,38,0.5)]",
        COLLAGE_TILT[index % COLLAGE_TILT.length],
        COLLAGE_SHIFT[index % COLLAGE_SHIFT.length],
        COLLAGE_SCALE[index % COLLAGE_SCALE.length],
      ),
    !editorial && !collage && "rounded-editorial border border-outline/15",
    fill && TILE_ASPECT[tileAspect],
  );

  const body = (
    <>
      <span className={cn(collage && "block overflow-hidden rounded-[1px]")}>{image}</span>
      {editorial ? (
        <>
          <span className="pointer-events-none absolute left-3 top-3 z-10 font-mono text-[10px] tracking-[0.22em] text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-primary/55 via-ink-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {overlayLabel ? (
            <span className="pointer-events-none absolute bottom-3 left-3 z-10 translate-y-1 text-label-uppercase text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {overlayLabel}
            </span>
          ) : null}
        </>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {body}
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => onSelect?.(item)} className={className}>
      {body}
    </button>
  );
}

export function ProjectMasonry({
  items,
  onSelect,
  href,
  priorityCount = 0,
  desktopColumns = 3,
  variant = "pack",
  accent = "plain",
  tileAspect = "4/5",
  overlayLabel,
  className,
}: ProjectMasonryProps) {
  const columnCount = useMasonryColumns(desktopColumns);
  const columns = splitColumns(items, columnCount);
  const editorial = accent === "editorial";
  const collage = accent === "collage";
  const sizes = imageSizes(desktopColumns);
  const gapClass =
    variant === "fill"
      ? "gap-3 md:gap-4"
      : collage
        ? "gap-4 md:gap-5"
        : editorial
          ? "gap-2.5 md:gap-3"
          : "gap-3 md:gap-4";

  if (variant === "fill") {
    return (
      <div className={cn("grid", fillGridClass(desktopColumns), gapClass, className)}>
        {items.map((item, index) => (
          <TileShell
            key={item.id}
            item={item}
            index={index}
            priority={index < priorityCount}
            href={href}
            onSelect={onSelect}
            fill
            accent={accent}
            tileAspect={tileAspect}
            sizes={sizes}
            overlayLabel={overlayLabel}
          />
        ))}
      </div>
    );
  }

  let order = 0;

  return (
    <div className={cn("flex items-start", gapClass, className)}>
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={cn(
            "flex min-w-0 flex-1 flex-col",
            gapClass,
            (editorial || collage) && columnIndex === 1 && "md:mt-12",
            (editorial || collage) && columnIndex === 2 && "md:mt-5",
            collage && columnIndex === 0 && "md:mt-2",
          )}
        >
          {column.map((item) => {
            const index = order;
            order += 1;

            return (
              <TileShell
                key={item.id}
                item={item}
                index={index}
                priority={index < priorityCount}
                href={href}
                onSelect={onSelect}
                accent={accent}
                sizes={sizes}
                overlayLabel={overlayLabel}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
