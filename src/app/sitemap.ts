import type { MetadataRoute } from "next";
import { articles, ferryPages, hrefOf } from "@/lib/content";
import { site } from "@/lib/site";

const STATIC_ROUTES = [
  { path: "", priority: 1.0 },
  { path: "/aktoploika", priority: 0.9 },
  { path: "/aeroporika", priority: 0.9 },
  { path: "/ekdromes", priority: 0.9 },
  { path: "/krouazieres", priority: 0.9 },
  { path: "/proorismoi", priority: 0.8 },
  { path: "/gamilia-taxidia", priority: 0.8 },
  { path: "/xenodoxeia", priority: 0.8 },
  { path: "/metafores", priority: 0.8 },
  { path: "/ypiresies", priority: 0.7 },
  { path: "/xrisima", priority: 0.7 },
  { path: "/gia-emas", priority: 0.7 },
  { path: "/epikoinonia", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...STATIC_ROUTES.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r.priority,
    })),
    ...ferryPages.map((p) => ({
      url: `${site.url}/aktoploika/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}${hrefOf(a)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
