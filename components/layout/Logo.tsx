import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const logoHeights = {
  dock: "h-7 w-auto max-w-[9.5rem] sm:h-8 sm:max-w-[10.5rem]",
  header: "h-10 w-auto sm:h-11 md:h-12",
  footer: "h-12 w-auto md:h-14",
} as const;

type LogoSize = keyof typeof logoHeights;

type LogoProps = {
  className?: string;
  size?: LogoSize;
  onNavigate?: () => void;
};

export function Logo({
  className,
  size = "header",
  onNavigate,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center rounded-md", className)}
      onClick={onNavigate}
      aria-label={`${site.name} — inicio`}
    >
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        width={site.logo.width}
        height={site.logo.height}
        unoptimized
        className={logoHeights[size]}
        priority={size === "header" || size === "dock"}
      />
    </Link>
  );
}
