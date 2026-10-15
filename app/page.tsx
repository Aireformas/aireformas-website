import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { BespokeSection } from "@/components/home/BespokeSection";
import { ComfortSection } from "@/components/home/ComfortSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FourPillars } from "@/components/home/FourPillars";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { LightArchitecture } from "@/components/home/LightArchitecture";
import { MaterialsGrid } from "@/components/home/MaterialsGrid";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ProjectTimeline } from "@/components/home/ProjectTimeline";
import { homeCopy } from "@/content/home";
import { site } from "@/content/site";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const homeMeta = homeCopy[await getLocale()].meta;
  return {
    title: homeMeta.title,
    description: homeMeta.description,
    openGraph: {
      title: `${homeMeta.title} | ${site.name}`,
      description: homeMeta.description,
    },
  };
}

export default async function HomePage() {
  const contactSection = homeCopy[await getLocale()].contact;
  return (
    <>
      <Hero />
      <LightArchitecture />
      <PhilosophySection />
      <FeaturedProjects />
      <FourPillars />
      <ProjectTimeline />
      <MaterialsGrid />
      <ComfortSection />
      <BespokeSection />
      <HowWeWork />
      <ContactCTA
        label={contactSection.label}
        title={contactSection.title}
        description={contactSection.description}
        variant="landing"
      />
    </>
  );
}
