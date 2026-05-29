import type { Metadata } from "next";
import { HomePageView } from "@/components/SitePages";
import { getDictionary, normalizeLocale } from "@/lib/site";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(normalizeLocale(locale));
  return {
    title: {
      absolute: dictionary.meta.title
    },
    description: dictionary.meta.description
  };
}

export default async function LocalizedHomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  return <HomePageView locale={normalizeLocale(locale)} />;
}
