import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { CatalogosPageContent } from "@/components/catalogos/CatalogosPageContent";
import { catalogosCopy } from "@/content/catalogos";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = catalogosCopy[await getLocale()].meta;
  return pageMetadata("/catalogos", meta);
}

export default async function CatalogosPage() {
  const locale = await getLocale();
  const copy = catalogosCopy[locale];

  return (
    <>
      <CatalogosPageContent />
      <ContactCTA
        label={copy.cta.label}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
