import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const logoHeights = {
  dock: "h-8 w-auto max-w-[10rem] sm:h-9 sm:max-w-[11rem]",
  header: "h-11 w-auto sm:h-12 md:h-[3.25rem]",
  footer: "h-14 w-auto md:h-16",
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
      aria-label={`${site.name}, inicio`}
    >
      <Image
        src={asset.src}
        alt={site.logo.alt}
        width={asset.width}
        height={asset.height}
        unoptimized
        className={logoHeights[size]}
        priority={size === "header" || size === "dock"}
      />
    </Link>
  );
}
