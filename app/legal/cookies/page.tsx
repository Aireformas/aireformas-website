import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { cookiesPage, cookiesPageMeta } from "@/content/cookies";

export const metadata: Metadata = {
  title: cookiesPageMeta.title,
  description: cookiesPageMeta.description,
  robots: { index: true, follow: true },
};

export default function CookiesPolicyPage() {
  return (
    <LegalDocumentPage
      label={cookiesPage.label}
      title={cookiesPage.title}
      intro={cookiesPage.intro}
      sections={cookiesPage.sections}
      showCookieSettings
      currentPath="/legal/cookies"
    />
  );
}
