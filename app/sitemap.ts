import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { industryPages, locationPages } from "@/lib/seo-content";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/connecticut-vending-machines", changeFrequency: "weekly", priority: 0.98 },
  { path: "/for-businesses", changeFrequency: "monthly", priority: 0.95 },
  { path: "/our-machines", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products", changeFrequency: "monthly", priority: 0.8 },
  { path: "/request", changeFrequency: "monthly", priority: 0.75 },
  { path: "/about", changeFrequency: "yearly", priority: 0.65 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/locations", changeFrequency: "monthly", priority: 0.85 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.85 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationRoutes = locationPages.map((location) => ({
    url: absoluteUrl(`/locations/${location.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const industryRoutes = industryPages.map((industry) => ({
    url: absoluteUrl(`/industries/${industry.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  return [...staticRoutes, ...locationRoutes, ...industryRoutes];
}
