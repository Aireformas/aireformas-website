import { howWeWorkSection, howWeWorkSteps } from "@/content/home";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";

export function HowWeWork() {
  return (
    <ProcessGridSection
      label={howWeWorkSection.label}
      title={howWeWorkSection.title}
      lead={howWeWorkSection.lead}
      steps={howWeWorkSteps}
      borderBottom
    />
  );
}
