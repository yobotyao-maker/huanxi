"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Logo } from "@/components/Logo";
import { company, getDictionary, getLocaleFromPathname, withLocalePath } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo label={dictionary.brand} />
          <p>{dictionary.slogan}</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {dictionary.nav.map((item) => (
            <Link href={withLocalePath(locale, item.href)} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={withLocalePath(locale, "/edition/")}>{dictionary.edition.professional}</Link>
        </div>
        <address className="footer-contact">
          <span>
            <PhoneCall size={16} />
            {company.phone}
          </span>
          <span>
            <Mail size={16} />
            {company.email}
          </span>
          <span>
            <MapPin size={16} />
            {company.address[locale]}
          </span>
        </address>
      </div>
      <div className="footer-bottom">
        <span>{dictionary.footer.rights}</span>
        <span>{dictionary.footer.filing}</span>
      </div>
    </footer>
  );
}
