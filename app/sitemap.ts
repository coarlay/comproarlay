import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/layanan", "/portfolio", "/kelas", "/tentang", "/kontak"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
