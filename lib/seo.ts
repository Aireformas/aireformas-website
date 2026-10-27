import type { Metadata } from "next";
import { site } from "@/content/site";

type PageCopy = {
  title: string;
  description: string;
};

export function pageMetadata(
  path: string,
  meta: PageCopy,
  extra?: Metadata,
): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const title = canonical === "/" ? `${meta.title} | ${site.name}` : meta.title;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: site.tagline,
  };

  return {
    ...extra,
    title:
      canonical === "/"
        ? { absolute: `${meta.title} | ${site.name}` }
        : meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: meta.description,
      url: canonical,
      ...(canonical === "/" ? {} : { images: [image] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
      images: [image.url],
    },
  };
}
