import type { MetadataRoute } from "next"

const BASE_URL = "https://www.brazilianfunk.co"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/solicitar-acesso`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: new Date("2026-08-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
