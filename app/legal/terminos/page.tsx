import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { termsPage, termsPageMeta } from "@/content/legal";

export const metadata: Metadata = {
  title: termsPageMeta.title,
  description: termsPageMeta.description,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalDocumentPage
      label={termsPage.label}
      title={termsPage.title}
      intro={termsPage.intro}
      sections={termsPage.sections}
      currentPath="/legal/terminos"
    />
  );
}
