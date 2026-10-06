import { featuredProjects } from "@/content/home";
import { ImageGallery } from "@/components/shared/ImageGallery";

export function FeaturedProjects() {
  return (
    <ImageGallery
      label="PROYECTOS"
      title="Trabajos destacados"
      items={featuredProjects}
      variant="light"
    />
  );
}
