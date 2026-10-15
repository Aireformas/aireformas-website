import { homeCopy } from "@/content/home";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import { getLocale } from "@/lib/locale.server";

export async function HowWeWork() {
  const howWeWorkSection = homeCopy[await getLocale()].process;

  return (
    <ProcessGridSection
      label={howWeWorkSection.label}
      title={howWeWorkSection.title}
      lead={howWeWorkSection.lead}
      steps={howWeWorkSection.steps}
      borderBottom
    />
  );
}
