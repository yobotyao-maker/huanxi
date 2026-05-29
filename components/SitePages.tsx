import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, ShieldCheck } from "lucide-react";
import { CloudScreen } from "@/components/CloudScreen";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HomeCarousel } from "@/components/HomeCarousel";
import { MetricStrip } from "@/components/MetricStrip";
import {
  company,
  editionCards,
  getDictionary,
  stats,
  type Locale,
  withLocalePath
} from "@/lib/site";

type PageProps = {
  locale: Locale;
};

function LocalLink({
  locale,
  href,
  className,
  children
}: {
  locale: Locale;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={className} href={href.startsWith("/downloads/") ? href : withLocalePath(locale, href)}>
      {children}
    </Link>
  );
}

export function HomePageView({ locale }: PageProps) {
  const dictionary = getDictionary(locale);
  const home = dictionary.home;

  return (
    <div className="home">
      <section className="one">
        <div className="one-bg" aria-hidden="true" />
        <div className="one-content">
          <div className="version-pill">
            <ShieldCheck size={18} />
            <span>{home.hero.badge}</span>
          </div>
          <h1>{home.hero.title}</h1>
          <p>{home.hero.subtitle}</p>
          <div className="one-actions">
            <LocalLink locale={locale} href="/download/" className="primary-button">
              {home.hero.primary}
              <Download size={18} />
            </LocalLink>
            <LocalLink locale={locale} href="/about/#contact-sales" className="outline-button">
              {home.hero.secondary}
              <ArrowRight size={18} />
            </LocalLink>
          </div>
          <MetricStrip items={stats[locale]} />
        </div>
      </section>

      <section className="two">
        <div className="container">
          <div className="title-stack">
            <h2>{home.ui.title}</h2>
            <span>{home.ui.accent}</span>
          </div>
          <HomeCarousel slides={home.ui.slides} />
        </div>
      </section>

      <section className="three">
        <div className="three-bg" aria-hidden="true" />
        <div className="three-text">
          <h2>{home.cloudOps.title}</h2>
          <span>{home.cloudOps.accent}</span>
        </div>
      </section>

      <section className="four">
        <div className="container">
          <div className="title-stack">
            <h2>{home.atmosphere.title}</h2>
            <span>{home.atmosphere.accent}</span>
          </div>
          <div className="ops-grid">
            <CloudScreen />
            <div className="ops-cards">
              {home.cloudOps.cards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="five">
        <div className="container">
          <div className="title-stack">
            <h2>{home.tools.title}</h2>
            <span>{home.tools.accent}</span>
          </div>
          <FeatureGrid items={home.tools.items} variant="compact" />
        </div>
      </section>

      <section className="six">
        <div className="container">
          <div className="title-stack">
            <h2>{home.ecosystem.title}</h2>
            <span>{home.ecosystem.accent}</span>
          </div>
          <div className="ecosystem-grid">
            {home.ecosystem.products.map((product) => {
              const Icon = product.icon;
              return (
                <article className="ecosystem-card" key={product.title}>
                  <Icon size={42} />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </article>
              );
            })}
          </div>
          <div className="b2b-panel">
            <div>
              <h2>{home.b2b.title}</h2>
              <p>{home.b2b.accent}</p>
            </div>
            <ul>
              {home.b2b.points.map((point) => (
                <li key={point}>
                  <Check size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="seven" id="contact-sales">
        <div className="container">
          <h2>{home.contact.title}</h2>
          <div className="seven-about">
            <article>
              <Image src="/brand/qrcode-business.svg" alt={home.contact.business} width={256} height={256} />
              <h3>{home.contact.business}</h3>
            </article>
            <article>
              <Image src="/brand/qrcode-updates.svg" alt={home.contact.updates} width={256} height={256} />
              <h3>{home.contact.updates}</h3>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export function DownloadPageView({ locale }: PageProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.download;

  return (
    <section className="download-page">
      <div className="container">
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="download-apps">
          {page.cards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="app-box" key={card.title}>
                <div className="app-details">
                  <span className="app-icon">
                    <Icon aria-hidden="true" size={36} />
                  </span>
                  <div>
                    <h2>{card.title}</h2>
                    <p>{card.version}</p>
                  </div>
                </div>
                <p className="app-description">{card.description}</p>
                <LocalLink locale={locale} href={card.href} className="download-button">
                  <Download size={24} />
                  <span>{page.button}</span>
                </LocalLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutPageView({ locale }: PageProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.about;

  return (
    <section className="about-page" id="contact-sales">
      <div className="container">
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="about-grid">
          <article>
            <h2>{page.businessTitle}</h2>
            <Image src="/brand/qrcode-business.svg" alt={page.businessTitle} width={256} height={256} />
            <p>{page.businessText}</p>
          </article>
          <article>
            <h2>{page.updatesTitle}</h2>
            <Image src="/brand/qrcode-updates.svg" alt={page.updatesTitle} width={256} height={256} />
            <p>{page.updatesText}</p>
          </article>
        </div>
        <div className="contact-strip">
          <span>{company.phone}</span>
          <span>{company.email}</span>
          <span>{company.address[locale]}</span>
        </div>
      </div>
    </section>
  );
}

export function EditionPageView({ locale }: PageProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.edition;
  const plans = [
    { name: page.standard, badge: page.standardBadge, icon: editionCards[0].icon },
    { name: page.professional, badge: page.professionalBadge, icon: editionCards[1].icon }
  ];

  return (
    <section className="edition-page">
      <div className="container">
        <h1 className="sr-only">{page.title}</h1>
        <div className="edition-plans">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article key={plan.name}>
                <Icon size={30} />
                <h2>{plan.name}</h2>
                <span>{plan.badge}</span>
              </article>
            );
          })}
        </div>
        <div className="scheme-table">
          <table>
            <caption>{page.title}</caption>
            <thead>
              <tr>
                <th>{page.feature}</th>
                <th>
                  {page.standard}
                  <span>{page.standardBadge}</span>
                </th>
                <th>
                  {page.professional}
                  <span>{page.professionalBadge}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {page.rows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <LocalLink locale={locale} href="/about/#contact-sales" className="scheme-contact">
          {page.contact}
          <ArrowRight size={18} />
        </LocalLink>
      </div>
    </section>
  );
}
