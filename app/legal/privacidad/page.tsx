import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { legalCopy } from "@/content/legal";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = legalCopy[await getLocale()].privacy.meta;
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyPage() {
  const privacyPage = legalCopy[await getLocale()].privacy.page;
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
