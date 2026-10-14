import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ProyectosMethodology } from "@/components/proyectos/ProyectosMethodology";
import { ProyectosPageContent } from "@/components/proyectos/ProyectosPageContent";
import { proyectosCta, proyectosMeta } from "@/content/proyectos";

export const metadata: Metadata = {
  title: proyectosMeta.title,
  description: proyectosMeta.description,
  openGraph: {
    title: proyectosMeta.title,
    description: proyectosMeta.description,
  },
};

export default function ProyectosPage() {
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
