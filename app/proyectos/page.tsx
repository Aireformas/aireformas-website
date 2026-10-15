import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ProyectosMethodology } from "@/components/proyectos/ProyectosMethodology";
import { ProyectosPageContent } from "@/components/proyectos/ProyectosPageContent";
import { proyectosCopy } from "@/content/proyectos";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = proyectosCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
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
