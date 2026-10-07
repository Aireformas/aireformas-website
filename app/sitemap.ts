import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: MetadataRoute.Sitemap = [
  { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
  { url: `${site.url}/proyectos`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${site.url}/interiorismo`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${site.url}/reformas`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${site.url}/mobiliario`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${site.url}/climate`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${site.url}/estudio`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${site.url}/contacto`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${site.url}/legal/privacidad`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${site.url}/legal/terminos`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${site.url}/legal/cookies`, changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
