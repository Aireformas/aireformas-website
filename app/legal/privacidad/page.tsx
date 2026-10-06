import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { privacyPage, privacyPageMeta } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPageMeta.title,
  description: privacyPageMeta.description,
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      label={privacyPage.label}
      title={privacyPage.title}
      intro={privacyPage.intro}
      sections={privacyPage.sections}
      currentPath="/legal/privacidad"
    />
  );
}
