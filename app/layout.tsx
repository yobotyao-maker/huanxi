import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HtmlLang } from "@/components/HtmlLang";
import { getDictionary } from "@/lib/site";
import "./globals.css";

const dictionary = getDictionary("zh");

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baoyuncloud.com"),
  title: {
    default: dictionary.meta.title,
    template: `%s | ${dictionary.brand}`
  },
  description: dictionary.meta.description,
  keywords: [
    "宝云云计算",
    "Baoyun Cloud",
    "クラウド",
    "云服务器",
    "企业上云",
    "云迁移",
    "托管运维",
    "专属云"
  ],
  icons: {
    icon: "/brand/baoyun-logo.svg"
  },
  openGraph: {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    images: ["/brand/cloud-hero.png"],
    type: "website",
    locale: "zh_CN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <HtmlLang />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
