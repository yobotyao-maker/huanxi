import { localeCodes } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
