import type { Metadata } from "next";
import { EditionPageView } from "@/components/SitePages";
import { getDictionary } from "@/lib/site";

const dictionary = getDictionary("zh");

export const metadata: Metadata = {
  title: dictionary.edition.title,
  description: dictionary.edition.contact
};

export default function EditionPage() {
  return <EditionPageView locale="zh" />;
}
