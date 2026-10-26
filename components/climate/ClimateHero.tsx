import { SplitHero } from "@/components/shared/SplitHero";
import type { ClimateService } from "@/content/climate";
import type { ImageAsset } from "@/lib/types";

type ClimateHeroProps = {
  label: string;
  title: string;
  headline: string;
  description: string;
  support: string;
  image: ImageAsset;
  cta: { label: string; href: string };
  services: readonly ClimateService[];
};

export function ClimateHero({
  label,
  title,
  headline,
  description,
  support,
  image,
  cta,
  services,
}: ClimateHeroProps) {
  return (
    <SplitHero
      label={label}
      title={title}
      headline={headline}
      description={description}
      support={support}
      image={image}
      cta={cta}
      chips={services.map((service) => ({
        id: service.id,
        title: service.title,
        icon: service.icon,
        href: `#${service.id}`,
      }))}
    />
  );
}
