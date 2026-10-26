"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/locale/LocaleProvider";
import { chrome } from "@/content/chrome";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const logoHeights = {
  dock: "h-8 w-auto max-w-[10rem] sm:h-9 sm:max-w-[11rem]",
  header: "h-[3.25rem] w-auto sm:h-14 md:h-16",
  footer: "h-16 w-auto md:h-[4.25rem]",
} as const;

const logoShadow = {
  default: "drop-shadow-[0_1px_2px_rgba(46,42,38,0.18)]",
  white: "drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",
} as const;

type LogoSize = keyof typeof logoHeights;

type LogoProps = {
  className?: string;
  size?: LogoSize;
  variant?: "default" | "white";
  onNavigate?: () => void;
};

export function Logo({
  className,
  size = "header",
  variant = "default",
  onNavigate,
}: LogoProps) {
  const ui = chrome[useLocale()];
  const asset =
    variant === "white"
      ? {
          src: site.logo.white.src,
          width: site.logo.white.width,
          height: site.logo.white.height,
        }
      : { src: site.logo.src, width: site.logo.width, height: site.logo.height };

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      onClick={onNavigate}
      aria-label={`${site.name}, ${ui.home}`}
    >
      <Image
        src={asset.src}
        alt={site.logo.alt}
        width={asset.width}
        height={asset.height}
        unoptimized
        className={cn(
          logoHeights[size],
          size === "header" && logoShadow[variant],
        )}
        priority={size === "header" || size === "dock"}
      />
    </Link>
  );
}
