import { homeCopy } from "@/content/home";
import { ThermalComfortSection } from "@/components/shared/ThermalComfortSection";
import { getLocale } from "@/lib/locale.server";

export async function ComfortSection() {
  const comfortSection = homeCopy[await getLocale()].comfort;

  return (
    <ThermalComfortSection
      id="climate"
      label={comfortSection.label}
      claim={comfortSection.claim}
      claimNote={comfortSection.claimNote}
      title={comfortSection.title}
      subline={comfortSection.subline}
      tags={comfortSection.tags}
      image={comfortSection.image}
      link={comfortSection.link}
    />
  );
}
