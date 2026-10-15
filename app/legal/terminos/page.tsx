import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { legalCopy } from "@/content/legal";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = legalCopy[await getLocale()].terms.meta;
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage() {
  const termsPage = legalCopy[await getLocale()].terms.page;
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
