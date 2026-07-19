import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Helsparkling Tromsø — STRØK 17',
  description:
    'Profesjonell helsparkling i Tromsø. Sparkling, remsing, sliping og klargjøring for jevne, ferdige flater. Be om tilbud fra STRØK 17.',
  keywords: [
    'helsparkling Tromsø',
    'sparkling Tromsø',
    'overflatearbeid Tromsø',
    'sparkling vegger Tromsø',
    'helsparkling pris Tromsø',
    'maler Tromsø',
  ],
  alternates: { canonical: '/tjenester/helsparkling' },
  openGraph: {
    title: 'Helsparkling Tromsø — STRØK 17',
    description:
      'Sparkling, remsing, sliping og klargjøring for jevne, ferdige flater. Profesjonell helsparkling i Tromsø.',
    type: 'website',
    locale: 'nb_NO',
  },
};

const included = [
  'Vurdering av overflate og eksisterende underlag',
  'Påføring av sparkelmasse i nødvendige lag',
  'Remsing av skjøter og hjørner',
  'Montering av hjørnelister der det trengs',
  'Sliping mellom lag og til ferdig overflate',
  'Fuging og tetting av sprekker',
  'Klargjøring for maling eller annen overflatebehandling',
];

const faqs = [
  {
    q: 'Hva er helsparkling?',
    a: 'Helsparkling betyr at hele flaten — vegg eller tak — sparkles jevnt for å oppnå en helt glatt og jevn overflate. Det brukes der underlaget er ujevnt, skadet eller der man ønsker et høykvalitets sluttresultat.',
  },
  {
    q: 'Hva koster helsparkling i Tromsø?',
    a: 'Prisen avhenger av areal, antall lag og tilstanden på underlaget. Send bilder og en beskrivelse, så gir vi en konkret vurdering uten forpliktelse.',
  },
  {
    q: 'Hvor mange lag sparkel trengs?',
    a: 'Det avhenger av underlagets tilstand og ønsket resultat. Vanligvis påføres to til tre lag med sliping mellom hvert lag. Vi vurderer dette individuelt for hvert oppdrag.',
  },
  {
    q: 'Kan dere utføre helsparkling og maling i samme oppdrag?',
    a: 'Ja. Vi utfører gjerne hele prosessen fra sparkling og klargjøring til ferdig maling. Det gir bedre flyt og et mer helhetlig resultat.',
  },
];

export default function HelsparklingPage() {
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
                <li className="text-foreground">Helsparkling</li>
              </ol>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Tjeneste
              </span>
              <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
                Helsparkling i Tromsø
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base font-light">
                Sparkling, remsing, sliping og klargjøring for jevne, ferdige flater. Helsparkling
                er grunnlaget for et godt malerresultat — og STRØK 17 har praktisk erfaring med
                overflatearbeid fra reelle renoverings- og nybyggprosjekter.
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
                  { icon: 'PaintBrushIcon', label: 'Jevne flater', desc: 'Sparkling og sliping til glatt, ferdig overflate.' },
                  { icon: 'WrenchScrewdriverIcon', label: 'Remsing og hjørner', desc: 'Skjøter, hjørnelister og detaljer utført riktig.' },
                  { icon: 'CheckCircleIcon', label: 'Klar for maling', desc: 'Overflaten klargjøres for best mulig malerresultat.' },
                  { icon: 'MapPinIcon', label: 'Lokalt i Tromsø', desc: 'Kjennskap til lokale forhold og rask respons.' },
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
                Fra ujevn flate til ferdig underlag
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Helsparkling er krevende arbeid som krever tålmodighet, riktig teknikk og
                forståelse for materialer. Sparkelmassen påføres i lag, slipes mellom hvert
                lag og bygges opp til en jevn, glatt overflate klar for maling.
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
                  Send bilder av flatene og en kort beskrivelse av tilstanden, så tar vi en
                  første vurdering. Ingen forpliktelse.
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
                Overflatearbeid som grunnlag for alt annet
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Helsparkling er en av de mer krevende delene av malerarbeidet. Det krever
                forståelse for materialer, riktig blandingsforhold, riktig påføring og
                tålmodighet gjennom flere lag. Gjort feil gir det synlige problemer i
                sluttresultatet — uansett hvor god malingen er.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                STRØK 17 har praktisk erfaring med helsparkling fra reelle renoverings- og
                nybyggprosjekter, inkludert remsing av skjøter, montering av hjørnelister
                og klargjøring av flater for videre behandling.
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
