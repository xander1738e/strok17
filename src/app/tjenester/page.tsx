import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Malertjenester i Tromsø — STRØK 17',
  description:
    'Oversikt over alle malertjenester fra STRØK 17 i Tromsø: innvendig maling, utvendig maling, helsparkling, sprøytemaling, oppussing og mindre oppdrag. Be om tilbud.',
  keywords: [
    'malertjenester Tromsø',
    'maler Tromsø',
    'malerfirma Tromsø',
    'innvendig maling Tromsø',
    'utvendig maling Tromsø',
    'helsparkling Tromsø',
    'sprøytemaling Tromsø',
    'oppussing Tromsø',
  ],
  alternates: { canonical: '/tjenester' },
  openGraph: {
    title: 'Malertjenester i Tromsø — STRØK 17',
    description:
      'Profesjonelt malerarbeid i Tromsø. Innvendig, utvendig, helsparkling, sprøytemaling og mer — med grundig forarbeid og rene overganger.',
    type: 'website',
    locale: 'nb_NO',
  },
};

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  icon: string;
  href: string;
  hasDetailPage: boolean;
  tags: string[];
}

const services: Service[] = [
  {
    id: 'innvendig-maling',
    title: 'Innvendig maling',
    shortTitle: 'Innvendig',
    description:
      'Vegger, tak, lister, dører og andre innvendige flater. Korrekt forarbeid, presise overganger og jevnt sluttresultat.',
    detail:
      'Et godt innvendig malerresultat starter med grundig vurdering av underlaget. Sprekker utbedres, flater slipes og maskes — før første strøk legges.',
    icon: 'HomeIcon',
    href: '/tjenester/innvendig-maling',
    hasDetailPage: true,
    tags: ['Vegger', 'Tak', 'Lister', 'Dører'],
  },
  {
    id: 'utvendig-maling',
    title: 'Utvendig maling',
    shortTitle: 'Utvendig',
    description:
      'Fasader, listverk, vindskier og detaljer med riktig forarbeid for nordnorsk klima.',
    detail:
      'Utvendig maling i Nord-Norge krever riktig produktvalg og grundig forarbeid. Underlaget renses, råteskader utbedres og overflaten behandles for å tåle klimaet.',
    icon: 'BuildingOfficeIcon',
    href: '/tjenester/utvendig-maling',
    hasDetailPage: true,
    tags: ['Fasader', 'Listverk', 'Vindskier', 'Detaljer'],
  },
  {
    id: 'helsparkling',
    title: 'Helsparkling og overflatearbeid',
    shortTitle: 'Helsparkling',
    description:
      'Sparkling, remsing, sliping og klargjøring for jevne, ferdige flater. Grunnlaget for et godt malerresultat.',
    detail:
      'Helsparkling gir en helt jevn flate uten synlige skjøter eller ujevnheter. Arbeidet krever tålmodighet, riktig teknikk og god kjennskap til materialer.',
    icon: 'PaintBrushIcon',
    href: '/tjenester/helsparkling',
    hasDetailPage: true,
    tags: ['Sparkling', 'Remsing', 'Sliping', 'Klargjøring'],
  },
  {
    id: 'oppussing',
    title: 'Oppussing og rehabilitering',
    shortTitle: 'Oppussing',
    description:
      'Forbedring av slitte, skadde eller ujevne overflater. Fra skader og råte til ferdig behandlet flate.',
    detail:
      'Eldre overflater trenger ofte mer enn bare ny maling. Vi vurderer tilstanden, utbedrer skader og forbereder underlaget slik at resultatet faktisk holder over tid.',
    icon: 'WrenchScrewdriverIcon',
    href: '/quote-request',
    hasDetailPage: false,
    tags: ['Rehabilitering', 'Skadeutbedring', 'Overflatebehandling'],
  },
  {
    id: 'sproytemaling',
    title: 'Sprøytemaling',
    shortTitle: 'Sprøyte',
    description:
      'Effektiv og jevn påføring på egnede prosjekter og flater der sprøyte gir best resultat.',
    detail:
      'Sprøytemaling gir et jevnt, profesjonelt resultat på store flater og komplekse detaljer. Riktig masking og forberedelse er avgjørende for et rent sluttresultat.',
    icon: 'SparklesIcon',
    href: '/tjenester/sproytemaling',
    hasDetailPage: true,
    tags: ['Sprøyte', 'Store flater', 'Jevnt resultat'],
  },
  {
    id: 'mindre-oppdrag',
    title: 'Mindre maleroppdrag',
    shortTitle: 'Mindre jobber',
    description:
      'Også mindre jobber vurderes etter kapasitet og omfang. Ta kontakt for en rask avklaring.',
    detail:
      'Ikke alle jobber er store prosjekter — og det er greit. Enkeltrom, detaljer, touch-up eller reparasjoner vurderes etter tilgjengelig kapasitet.',
    icon: 'CheckCircleIcon',
    href: '/quote-request',
    hasDetailPage: false,
    tags: ['Enkeltrom', 'Touch-up', 'Reparasjoner'],
  },
];

const trustPoints = [
  { icon: 'ClockIcon', label: '~5 års erfaring', desc: 'Praktisk bakgrunn fra malerfaget og reelle prosjekter.' },
  { icon: 'MapPinIcon', label: 'Lokalt i Tromsø', desc: 'Kjennskap til lokale forhold og rask respons.' },
  { icon: 'CheckCircleIcon', label: 'Grundig forarbeid', desc: 'Underlaget vurderes og utbedres før første strøk.' },
  { icon: 'ChatBubbleLeftRightIcon', label: 'Tydelig kommunikasjon', desc: 'Klar avklaring på omfang, pris og tidspunkt.' },
];

export default function TjenesterPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <nav aria-label="Brødsmulesti" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Hjem
                  </Link>
                </li>
                <li aria-hidden="true">
                  <Icon name="ChevronRightIcon" size={12} />
                </li>
                <li className="text-foreground">Tjenester</li>
              </ol>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Tjenester
              </span>
              <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
                Malerarbeid fra bunn til topp
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base font-light max-w-lg">
                STRØK 17 utfører innvendig og utvendig maling, helsparkling og overflatearbeid
                i Tromsø og omegn. Alle oppdrag vurderes individuelt — med fokus på grundig
                forarbeid og et sluttresultat som faktisk holder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote-request"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
                >
                  Be om tilbud
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary transition-colors duration-300"
                >
                  <Icon name="PhoneIcon" size={16} />
                  Ring meg
                </a>
              </div>
            </ScrollReveal>

            {/* Trust grid */}
            <ScrollReveal delay={120}>
              <div className="grid grid-cols-2 gap-px bg-border">
                {trustPoints.map((point) => (
                  <div key={point.label} className="bg-card p-6">
                    <Icon
                      name={point.icon as Parameters<typeof Icon>[0]['name']}
                      size={22}
                      className="text-primary mb-3"
                    />
                    <p className="text-foreground text-sm font-semibold mb-1">{point.label}</p>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 lg:py-32" aria-label="Alle tjenester">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
                Alle tjenester
              </span>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <h2 className="text-section font-bold text-foreground tracking-tight max-w-xl">
                  Hva kan vi hjelpe deg med?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:text-right font-light">
                  God maling begynner med godt forarbeid. Send bilder og en kort beskrivelse,
                  så tar vi en første vurdering.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="section-line revealed mb-16" />

          {/* Service cards — bento-style with varied sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 70}>
                <Link
                  href={service.href}
                  className="service-card group block p-8 lg:p-10 h-full relative"
                  aria-label={`Les mer om ${service.title}`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon
                      name={service.icon as Parameters<typeof Icon>[0]['name']}
                      size={28}
                      className="text-primary"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground text-lg font-semibold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mb-5">
                    {service.description}
                  </p>

                  {/* Detail copy */}
                  <p className="text-muted-foreground text-xs leading-relaxed font-light mb-6 opacity-70">
                    {service.detail}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground border border-border px-2.5 py-1 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
                    <span>{service.hasDetailPage ? 'Les mer' : 'Be om tilbud'}</span>
                    <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO bridge — service areas */}
      <section className="py-20 lg:py-28 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Betjeningsområde
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Lokalt forankret i Tromsø
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                STRØK 17 er basert i Tromsø og utfører oppdrag i hele kommunen og nærliggende
                områder. Kjennskap til lokale forhold — klima, byggestil og materialer — er en
                naturlig del av arbeidet.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Oppdrag utenfor Tromsø vurderes etter omfang og kapasitet. Ta kontakt for en
                rask avklaring.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                {siteConfig.serviceAreas.map((area) => (
                  <div key={area} className="bg-card px-5 py-4 flex items-center gap-3">
                    <span className="text-primary text-xs shrink-0">—</span>
                    <span className="text-foreground text-sm font-light">{area}</span>
                  </div>
                ))}
                <div className="bg-card px-5 py-4 flex items-center gap-3 col-span-2 sm:col-span-1">
                  <span className="text-primary text-xs shrink-0">—</span>
                  <span className="text-muted-foreground text-sm font-light italic">
                    + etter avtale
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trade knowledge */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Faglig bakgrunn
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Det du ikke ser, avgjør ofte resultatet
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Et godt malerresultat handler ikke bare om selve malingen. Underlaget må
                vurderes, skader må utbedres, overganger må bli jevne og detaljene må tas
                før første strøk.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Med rundt fem års praktisk erfaring fra malerfaget, inkludert læretid hos
                Peab Bogstrand, er grundig forarbeid en naturlig del av hvert oppdrag — ikke
                noe som hoppes over for å spare tid.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-px bg-border">
                {[
                  { step: '01', label: 'Vurdering av underlag', desc: 'Overflaten inspiseres for skader, fukt, dårlig heft og ujevnheter.' },
                  { step: '02', label: 'Utbedring og reparasjon', desc: 'Sprekker, hull og skader utbedres med riktige materialer.' },
                  { step: '03', label: 'Sliping og klargjøring', desc: 'Flaten slipes jevn og rengjøres for optimal heft.' },
                  { step: '04', label: 'Masking og beskyttelse', desc: 'Lister, gulv og tilstøtende flater maskes nøye.' },
                  { step: '05', label: 'Påføring og etterarbeid', desc: 'Maling påføres jevnt. Masking fjernes og området ryddes.' },
                ].map((item) => (
                  <div key={item.step} className="bg-background flex gap-6 p-5 lg:p-6">
                    <span className="text-primary text-xs font-semibold tabular-nums shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-foreground text-sm font-semibold mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-display font-bold text-foreground tracking-tight mb-4">
              Har du et prosjekt i tankene?
            </h2>
            <p className="text-muted-foreground font-light mb-8 max-w-md mx-auto">
              Send noen bilder og en kort beskrivelse av jobben, så tar vi en første
              vurdering uten forpliktelse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote-request"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
              >
                Be om tilbud
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary transition-colors duration-300"
              >
                <Icon name="PhoneIcon" size={16} />
                Ring meg
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
