"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Gauge, Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import {
  getDictionary,
  getLocaleFromPathname,
  locales,
  stripLocale,
  switchLocalePath,
  withLocalePath
} from "@/lib/site";

function isActive(pathname: string, href: string) {
  const current = stripLocale(pathname);
  if (href === "/") return current === "/";
  return current.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link
        className="header-logo"
        href={withLocalePath(locale, "/")}
        aria-label={`${dictionary.brand} ${dictionary.nav[0].label}`}
      >
        <Logo label={dictionary.brand} />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {dictionary.nav.map((item) => (
          <Link
            className={isActive(pathname, item.href) ? "active" : ""}
            href={withLocalePath(locale, item.href)}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="ghost-button small-button" href={withLocalePath(locale, "/edition/")}>
          <Gauge size={16} />
          {dictionary.actions.login}
        </Link>
        <Link className="primary-button small-button" href={withLocalePath(locale, "/about/#contact-sales")}>
          {dictionary.actions.register}
          <ArrowRight size={16} />
        </Link>
        <div className="language-switcher" aria-label="Language">
          <Globe2 size={15} />
          {locales.map((item) => (
            <Link
              aria-current={item.code === locale ? "page" : undefined}
              href={switchLocalePath(pathname, item.code)}
              key={item.code}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`mobile-panel ${open ? "show" : ""}`}>
        {dictionary.nav.map((item) => (
          <Link
            className={isActive(pathname, item.href) ? "active" : ""}
            href={withLocalePath(locale, item.href)}
            key={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href={withLocalePath(locale, "/edition/")} onClick={() => setOpen(false)}>
          <Gauge size={20} />
          {dictionary.actions.login}
        </Link>
        <Link href={withLocalePath(locale, "/about/#contact-sales")} onClick={() => setOpen(false)}>
          <ArrowRight size={20} />
          {dictionary.actions.register}
        </Link>
        <div className="mobile-languages">
          {locales.map((item) => (
            <Link
              className={item.code === locale ? "active" : ""}
              href={switchLocalePath(pathname, item.code)}
              key={item.code}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
