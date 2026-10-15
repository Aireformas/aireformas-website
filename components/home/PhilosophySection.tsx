import { homeCopy } from "@/content/home";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";
import { getLocale } from "@/lib/locale.server";

export async function PhilosophySection() {
  const philosophySection = homeCopy[await getLocale()].philosophy;

  return (
    <PhilosophyBandSection
      label={philosophySection.label}
      title={philosophySection.title}
      paragraphs={philosophySection.paragraphs}
      image={philosophySection.image}
    />
  );
}
