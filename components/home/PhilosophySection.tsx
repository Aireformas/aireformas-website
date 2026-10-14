import { philosophySection } from "@/content/home";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";

export function PhilosophySection() {
  return (
    <PhilosophyBandSection
      label="02 / FILOSOFÍA"
      title={philosophySection.title}
      paragraphs={philosophySection.paragraphs}
      image={philosophySection.image}
    />
  );
}
