import { howWeWorkSection, howWeWorkSteps } from "@/content/home";
import { EditorialProcessSection } from "@/components/shared/EditorialProcessSection";

export function HowWeWork() {
  return (
    <EditorialProcessSection
      label={howWeWorkSection.label}
      title={howWeWorkSection.title}
      lead={howWeWorkSection.lead}
      steps={howWeWorkSteps}
    />
  );
}
