import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const siteUrl = site.url.replace(
  /^https:\/\/aireformas\.com/i,
  "https://www.aireformas.com",
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl.replace(/^https:\/\//, ""),
  };
}
