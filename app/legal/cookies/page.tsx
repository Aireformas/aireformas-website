import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { cookiesCopy } from "@/content/cookies";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = cookiesCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: true, follow: true },
  };
}

export default async function CookiesPolicyPage() {
  const cookiesPage = cookiesCopy[await getLocale()].page;
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
