import type { MetadataRoute } from "next";

const SITE = "https://www.wonderkutor.com";

const paths = [
  "",
  "/education",
  "/photos",
  "/videos",
  "/conferences",
  "/family",
  "/politics",
  "/gfa",
  "/vra",
  "/yea",
  "/src-presidency",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
