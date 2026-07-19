import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Innvendig maling Tromsø — STRØK 17',
  description:
    'Profesjonell innvendig maling i Tromsø. Vegger, tak, lister og dører med grundig forarbeid og rene overganger. Be om tilbud fra STRØK 17.',
  keywords: [
    'innvendig maling Tromsø',
    'male leilighet Tromsø',
    'male vegger Tromsø',
    'maler innvendig Tromsø',
    'innvendig maling pris Tromsø',
    'maler Tromsø',
  ],
  alternates: { canonical: '/tjenester/innvendig-maling' },
  openGraph: {
    title: 'Innvendig maling Tromsø — STRØK 17',
    description:
      'Vegger, tak, lister og dører med grundig forarbeid og rene overganger. Profesjonell innvendig maling i Tromsø.',
    type: 'website',
    locale: 'nb_NO',
  },
};

const included = [
  'Vurdering av underlag og overflate',
  'Sparkling og utbedring av skader',
  'Sliping og klargjøring',
  'Masking av lister, gulv og vinduer',
  'Maling av vegger og tak',
  'Lister, dører og vindusdetaljer',
  'Rydding og etterarbeid',
];

const faqs = [
  {
    q: 'Hva koster innvendig maling i Tromsø?',
    a: 'Prisen avhenger av areal, overflatestand og omfang av forarbeid. Send bilder og en kort beskrivelse, så gir vi en konkret vurdering uten forpliktelse.',
  },
  {
    q: 'Hvor lang tid tar et innvendig malerprosjekt?',
    a: 'Et vanlig rom tar gjerne én til to dager inkludert forarbeid. Større prosjekter planlegges individuelt basert på omfang og tilgang.',
  },
  {
    q: 'Trenger jeg å forberede noe selv?',
    a: 'Det hjelper å tømme rommet for møbler og løse gjenstander. Vi tar oss av masking, beskyttelse av gulv og alt det tekniske.',
  },
  {
    q: 'Hvilke produkter bruker dere?',
    a: 'Vi bruker kvalitetsprodukter tilpasset underlaget og ønsket resultat. Produktvalg avklares gjerne i forkant av oppdraget.',
  },
];

export default function InnvendigMalingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <nav aria-label="Brødsmulesti" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground transition-colors">Hjem</Link></li>
                <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
                <li><Link href="/tjenester" className="hover:text-foreground transition-colors">Tjenester</Link></li>
                <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
                <li className="text-foreground">Innvendig maling</li>
              </ol>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Tjeneste
              </span>
              <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
                Innvendig maling i Tromsø
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base font-light">
                Vegger, tak, lister, dører og andre innvendige flater — utført med fokus på
                grundig forarbeid, presise overganger og et jevnt sluttresultat. STRØK 17
                tar seg av hele prosessen fra vurdering av underlag til ferdig strøk.
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

            {/* Trust points */}
            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                {[
                  { icon: 'CheckCircleIcon', label: 'Grundig forarbeid', desc: 'Sparkling, sliping og klargjøring før første strøk.' },
                  { icon: 'HomeIcon', label: 'Alle innvendige flater', desc: 'Vegger, tak, lister, dører og vindusdetaljer.' },
                  { icon: 'MapPinIcon', label: 'Lokalt i Tromsø', desc: 'Kjennskap til lokale forhold og rask respons.' },
                  { icon: 'StarIcon', label: '~5 års erfaring', desc: 'Praktisk bakgrunn fra malerfaget og reelle prosjekter.' },
                ].map((item) => (
                  <div key={item.label} className="bg-card p-6">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-primary mb-3" />
                    <p className="text-foreground text-sm font-semibold mb-1">{item.label}</p>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Hva inngår
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Fra vurdering til ferdig flate
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Et godt innvendig malerresultat starter lenge før malingen åpnes. Underlaget
                må vurderes, skader utbedres og overganger jevnes ut. STRØK 17 legger stor
                vekt på arbeidet som skjer før første strøk — det er der resultatet avgjøres.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-card border border-border p-8 lg:p-10">
                <h3 className="text-foreground text-lg font-semibold mb-2 tracking-tight">
                  Klar for et tilbud?
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                  Send noen bilder og en kort beskrivelse av jobben, så tar vi en første
                  vurdering. Ingen forpliktelse.
                </p>
                <Link
                  href="/quote-request"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 w-full justify-center"
                >
                  Be om tilbud
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
                <p className="text-muted-foreground text-xs mt-4 text-center">
                  Betjener Tromsø, Tromsdalen, Kvaløya og omegn
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trade knowledge */}
      <section className="py-20 lg:py-28 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Faglig bakgrunn
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Det du ikke ser, avgjør ofte resultatet
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Innvendig maling handler ikke bare om å velge farge og rulle på veggen. Underlaget
                avgjør alt. Sprekker, ujevnheter og dårlig heft fra tidligere strøk gir synlige
                problemer i sluttresultatet — uansett hvor god malingen er.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Med rundt fem års praktisk erfaring fra malerfaget, inkludert læretid hos Peab
                Bogstrand, er forarbeid en naturlig del av hvert oppdrag — ikke noe som hoppes
                over for å spare tid.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
              Spørsmål og svar
            </span>
            <h2 className="text-section font-bold text-foreground tracking-tight mb-12">
              Vanlige spørsmål
            </h2>
          </ScrollReveal>
          <div className="space-y-px bg-border">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-background p-6 lg:p-8">
                  <h3 className="text-foreground text-sm font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
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
              Send bilder og en kort beskrivelse, så tar vi en første vurdering uten forpliktelse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote-request"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
              >
                Be om tilbud
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary transition-colors duration-300"
              >
                Se tidligere arbeid
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
