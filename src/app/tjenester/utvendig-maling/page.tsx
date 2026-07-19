import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Utvendig maling Tromsø — STRØK 17',
  description:
    'Profesjonell utvendig maling i Tromsø. Fasader, listverk og vindskier med riktig forarbeid for nordnorsk klima. Be om tilbud fra STRØK 17.',
  keywords: [
    'utvendig maling Tromsø',
    'male hus Tromsø',
    'fasademaling Tromsø',
    'maler utvendig Tromsø',
    'utvendig maling pris Tromsø',
    'maler Tromsø',
  ],
  alternates: { canonical: '/tjenester/utvendig-maling' },
  openGraph: {
    title: 'Utvendig maling Tromsø — STRØK 17',
    description:
      'Fasader, listverk og vindskier med riktig forarbeid for nordnorsk klima. Profesjonell utvendig maling i Tromsø.',
    type: 'website',
    locale: 'nb_NO',
  },
};

const included = [
  'Vurdering av overflate og eksisterende belegg',
  'Rensing, avfetting og nødvendig sliping',
  'Utbedring av råte, sprekker og skader',
  'Masking og beskyttelse av vinduer og detaljer',
  'Grunning der underlaget krever det',
  'Maling av fasade, listverk og vindskier',
  'Fuging og tetting der nødvendig',
];

const faqs = [
  {
    q: 'Når er det riktig tidspunkt for utvendig maling i Tromsø?',
    a: 'Utvendig maling krever tørt vær og temperaturer over ca. 5–8 grader. I Tromsø er sommerhalvåret det naturlige vinduet. Vi planlegger oppdraget etter værforhold og tilgjengelighet.',
  },
  {
    q: 'Hva koster utvendig maling av et hus i Tromsø?',
    a: 'Prisen avhenger av hustype, areal, overflatestand og omfang av forarbeid. Send bilder og en beskrivelse, så gir vi en konkret vurdering.',
  },
  {
    q: 'Trenger fasaden alltid sliping og grunning?',
    a: 'Ikke alltid, men det avhenger av tilstanden på eksisterende belegg. Vi vurderer underlaget grundig og anbefaler kun det som faktisk trengs for et holdbart resultat.',
  },
  {
    q: 'Kan dere male trehus, panel og listverk?',
    a: 'Ja. Vi har erfaring med ulike typer kledning og overflater, inkludert listverk, vindskier og detaljer som krever nøyaktighet.',
  },
];

export default function UtvendigMalingPage() {
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
                <li className="text-foreground">Utvendig maling</li>
              </ol>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Tjeneste
              </span>
              <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
                Utvendig maling i Tromsø
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base font-light">
                Fasader, listverk, vindskier og detaljer — utvendig maling i nordnorsk klima
                stiller krav til riktig forarbeid og produktvalg. STRØK 17 vurderer underlaget
                grundig og utfører arbeidet for et resultat som holder over tid.
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
                  { icon: 'WrenchScrewdriverIcon', label: 'Riktig forarbeid', desc: 'Rensing, sliping og utbedring av skader før maling.' },
                  { icon: 'BuildingOfficeIcon', label: 'Fasade og detaljer', desc: 'Kledning, listverk, vindskier og vindusdetaljer.' },
                  { icon: 'CloudIcon', label: 'Nordnorsk klima', desc: 'Produktvalg og metode tilpasset lokale forhold.' },
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
                Grundig utvendig behandling
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Utvendig maling i Tromsø er ikke bare å rulle på ny farge. Nordnorsk vær
                setter krav til at underlaget er rent, tørt og riktig behandlet. Råte,
                sprekker og løs maling må utbedres — ellers holder ikke resultatet.
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
                  Send bilder av fasaden og en kort beskrivelse av tilstanden, så tar vi en
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
                Utvendig maling som holder
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Utvendig maling i Nord-Norge utsettes for krevende forhold — fukt, frost og
                temperatursvingninger setter krav til at arbeidet gjøres riktig fra starten.
                Feil produktvalg eller manglende forarbeid gir kortvarige resultater.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                STRØK 17 har praktisk erfaring med utvendig overflatebehandling og vurderer
                alltid underlag, eksisterende belegg og klimaforhold før arbeidet starter.
                Målet er et resultat som faktisk holder over tid.
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
