import type { Metadata } from "next";
import { AboutPageView } from "@/components/SitePages";
import { getDictionary } from "@/lib/site";

const dictionary = getDictionary("zh");

export const metadata: Metadata = {
  title: dictionary.about.title,
  description: dictionary.about.intro
};

export default function AboutPage() {
  return <AboutPageView locale="zh" />;
}
