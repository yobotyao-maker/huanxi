import type { Metadata } from "next";
import { DownloadPageView } from "@/components/SitePages";
import { getDictionary } from "@/lib/site";

const dictionary = getDictionary("zh");

export const metadata: Metadata = {
  title: dictionary.download.title,
  description: dictionary.download.intro
};

export default function DownloadPage() {
  return <DownloadPageView locale="zh" />;
}
