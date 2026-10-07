import { comfortSection } from "@/content/home";
import { EditorialComfortSection } from "@/components/shared/EditorialComfortSection";

export function ComfortSection() {
  return (
    <EditorialComfortSection
      label={comfortSection.label}
      temperature={comfortSection.temperature}
      title={comfortSection.title}
      subline={comfortSection.subline}
      tags={comfortSection.tags}
      image={comfortSection.image}
      link={comfortSection.link}
    />
  );
}
