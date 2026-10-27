import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ProyectosMethodology } from "@/components/proyectos/ProyectosMethodology";
import { ProyectosPageContent } from "@/components/proyectos/ProyectosPageContent";
import { proyectosCopy } from "@/content/proyectos";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = proyectosCopy[await getLocale()].meta;
  return pageMetadata("/proyectos", meta);
}

export default async function ProyectosPage() {
  const proyectosCta = proyectosCopy[await getLocale()].cta;
  return (
    <>
      <ProyectosPageContent />
      <ProyectosMethodology />
      <ContactCTA
        label={proyectosCta.label}
        title={proyectosCta.title}
        description={proyectosCta.description}
        variant="landing"
      />
    </>
  );
}
