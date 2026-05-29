import type { Metadata } from "next";
import { EditionPageView } from "@/components/SitePages";
import { getDictionary, normalizeLocale } from "@/lib/site";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(normalizeLocale(locale));
  return {
    title: {
      absolute: `${dictionary.edition.title} | ${dictionary.brand}`
    },
    description: dictionary.edition.contact
  };
}

export default async function LocalizedEditionPage({ params }: LocalePageProps) {
  const { locale } = await params;
  return <EditionPageView locale={normalizeLocale(locale)} />;
}
