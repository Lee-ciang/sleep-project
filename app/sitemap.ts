import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://sleep-project-khaki.vercel.app";

  const guideUrls = guides.map((guide) => ({
    url: `${siteUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${siteUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/best`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...guideUrls,
  ];
}