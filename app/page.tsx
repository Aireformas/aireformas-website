import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustStrip } from "@/components/home/TrustStrip";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { contactSection, homeMeta } from "@/content/home";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  openGraph: {
    title: homeMeta.title,
    description: homeMeta.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <HowWeWork />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactCTA
        label={contactSection.label}
        title={contactSection.title}
        description={contactSection.description}
        variant="light"
      />
    </>
  );
}
