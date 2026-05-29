import type { Metadata } from "next";
import { AboutPageView } from "@/components/SitePages";
import { getDictionary, normalizeLocale } from "@/lib/site";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(normalizeLocale(locale));
  return {
    title: {
      absolute: `${dictionary.about.title} | ${dictionary.brand}`
    },
    description: dictionary.about.intro
  };
}

export default async function LocalizedAboutPage({ params }: LocalePageProps) {
  const { locale } = await params;
  return <AboutPageView locale={normalizeLocale(locale)} />;
}
