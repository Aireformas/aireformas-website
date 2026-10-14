import { comfortSection } from "@/content/home";
import { ThermalComfortSection } from "@/components/shared/ThermalComfortSection";

export function ComfortSection() {
  return (
    <ThermalComfortSection
      id="climate"
      label="07 / CONFORT TÉRMICO"
      temperature={comfortSection.temperature}
      title={comfortSection.title}
      subline={comfortSection.subline}
      tags={comfortSection.tags}
      image={comfortSection.image}
      link={comfortSection.link}
    />
  );
}
