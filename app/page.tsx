import type { Metadata } from "next";
import { HomePageView } from "@/components/SitePages";
import { getDictionary } from "@/lib/site";

const dictionary = getDictionary("zh");

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description
};

export default function HomePage() {
  return <HomePageView locale="zh" />;
}
