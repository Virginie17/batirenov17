import type { MetadataRoute } from "next";

const baseUrl = "https://batirenov17.fr";

const routes = [
  "",
  "/contact",
  "/realisations",
  "/portes-fenetres",
  "/volets-battants",
  "/salle-de-bain",
  "/revetement",
  "/pergola-terrasse",
  "/portail-cloture",
  "/charpente-toiture",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
