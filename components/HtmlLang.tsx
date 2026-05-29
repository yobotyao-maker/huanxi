"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromPathname, locales } from "@/lib/site";

export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    const htmlLang = locales.find((item) => item.code === locale)?.htmlLang ?? "zh-CN";
    document.documentElement.lang = htmlLang;
  }, [pathname]);

  return null;
}
