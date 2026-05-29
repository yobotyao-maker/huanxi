import type { MetadataRoute } from "next";
import { locales, withLocalePath } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = "https://www.baoyuncloud.com";
const pages = ["/", "/download/", "/about/", "/edition/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(({ code }) =>
    pages.map((path) => ({
      url: `${baseUrl}${withLocalePath(code, path)}`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8
    }))
  );
}
