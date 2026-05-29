import type { Metadata } from "next";
import { DownloadPageView } from "@/components/SitePages";
import { getDictionary, normalizeLocale } from "@/lib/site";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(normalizeLocale(locale));
  return {
    title: {
      absolute: `${dictionary.download.title} | ${dictionary.brand}`
    },
    description: dictionary.download.intro
  };
}

export default async function LocalizedDownloadPage({ params }: LocalePageProps) {
  const { locale } = await params;
  return <DownloadPageView locale={normalizeLocale(locale)} />;
}
