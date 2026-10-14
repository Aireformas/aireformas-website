import { cn } from "@/lib/cn";

export type SectionSurfaceTone =
  | "paper"
  | "warm"
  | "taupeLight"
  | "taupeDark"
  | "navy";

type SurfaceConfig = {
  section: string;
  labelVariant: "light" | "dark";
  muted: string;
  faint: string;
  border: string;
  onBrand: boolean;
};

const surfaces: Record<SectionSurfaceTone, SurfaceConfig> = {
  paper: {
    section: "bg-cream-base text-ink-primary",
    labelVariant: "light",
    muted: "text-on-surface-variant",
    faint: "text-warm-label",
    border: "border-outline/25",
    onBrand: false,
  },
  warm: {
    section: "bg-sand-container text-ink-primary",
    labelVariant: "light",
    muted: "text-on-surface-variant",
    faint: "text-warm-label",
    border: "border-outline/25",
    onBrand: false,
  },
  taupeLight: {
    section: "bg-sand-panel text-ink-primary",
    labelVariant: "light",
    muted: "text-on-surface-variant",
    faint: "text-warm-label",
    border: "border-outline/25",
    onBrand: false,
  },
  taupeDark: {
    section: "bg-deep-brown text-surface",
    labelVariant: "dark",
    muted: "text-surface/80",
    faint: "text-surface/60",
    border: "border-white/15",
    onBrand: true,
  },
  navy: {
    section: "bg-slate-deep text-surface",
    labelVariant: "dark",
    muted: "text-surface/80",
    faint: "text-surface/60",
    border: "border-white/15",
    onBrand: true,
  },
};

export function getSectionSurface(tone: SectionSurfaceTone): SurfaceConfig {
  return surfaces[tone];
}

export function sectionShellClass(
  tone: SectionSurfaceTone,
  options?: { compact?: boolean; borderTop?: boolean },
): string {
  const surface = surfaces[tone];
  return cn(
    options?.compact ? "py-space-xl" : "py-space-2xl",
    "px-margin-mobile md:px-margin",
    options?.borderTop &&
      (surface.onBrand ? "border-t border-white/10" : "border-t border-outline/10"),
    surface.section,
  );
}
