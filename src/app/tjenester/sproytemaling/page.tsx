import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Sprøytemaling Tromsø — STRØK 17',
  description:
    'Profesjonell sprøytemaling i Tromsø. Effektiv og jevn påføring på egnede prosjekter og flater. Be om tilbud fra STRØK 17.',
  keywords: [
    'sprøytemaling Tromsø',
    'airless maling Tromsø',
    'sprøytemaling pris Tromsø',
    'maler sprøyte Tromsø',
    'sprøytemaling fasade Tromsø',
    'maler Tromsø',
  ],
  alternates: { canonical: '/tjenester/sproytemaling' },
  openGraph: {
    title: 'Sprøytemaling Tromsø — STRØK 17',
    description:
      'Effektiv og jevn påføring på egnede prosjekter og flater. Profesjonell sprøytemaling i Tromsø.',
    type: 'website',
    locale: 'nb_NO',
  },
};

const included = [
  'Vurdering av om sprøyte er riktig metode for prosjektet',
  'Grundig masking og beskyttelse av tilstøtende flater',
  'Klargjøring og rengjøring av underlag',
  'Sprøytepåføring med riktig utstyr og innstillinger',
  'Kontroll av dekning og jevnhet',
  'Etterarbeid og fjerning av masking',
  'Rydding etter endt arbeid',
];

const faqs = [
  {
    q: 'Når er sprøytemaling riktig metode?',
    a: 'Sprøytemaling egner seg godt på store, åpne flater som fasader, tak, gjerder og listverk i serie. Det gir jevn dekning raskt, men krever grundig masking og riktige forhold. Vi vurderer alltid om sprøyte er riktig metode for det aktuelle prosjektet.',
  },
  {
    q: 'Hva koster sprøytemaling i Tromsø?',
    a: 'Prisen avhenger av prosjektets omfang, tilgjengelighet og nødvendig masking. Send bilder og en beskrivelse, så gir vi en konkret vurdering.',
  },
  {
    q: 'Er sprøytemaling alltid bedre enn rulle og pensel?',
    a: 'Ikke nødvendigvis. Sprøyte gir jevn dekning på store flater, men rulle og pensel er ofte bedre egnet for detaljarbeid, innvendige rom og prosjekter der masking er krevende. Vi anbefaler metoden som gir best resultat for det aktuelle oppdraget.',
  },
  {
    q: 'Kan dere sprøytemale innendørs?',
    a: 'Ja, men det krever grundig masking og god ventilasjon. Vi vurderer alltid om forholdene ligger til rette for innvendig sprøytemaling og informerer om hva som kreves av forberedelse.',
  },
];

export default function SproytemalingPage() {
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
                <li className="text-foreground">Sprøytemaling</li>
              </ol>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Tjeneste
              </span>
              <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
                Sprøytemaling i Tromsø
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base font-light">
                Effektiv og jevn påføring på egnede prosjekter og flater. Sprøytemaling gir
                et jevnt, profesjonelt resultat på store flater — men krever riktig vurdering,
                grundig masking og erfaring med utstyret. STRØK 17 bruker sprøyte der det
                faktisk gir best resultat.
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
                  { icon: 'SparklesIcon', label: 'Jevn dekning', desc: 'Sprøyte gir jevn og effektiv påføring på store flater.' },
                  { icon: 'ShieldCheckIcon', label: 'Grundig masking', desc: 'Tilstøtende flater beskyttes nøye før arbeidet starter.' },
                  { icon: 'CheckCircleIcon', label: 'Riktig metode', desc: 'Vi vurderer alltid om sprøyte er riktig for oppdraget.' },
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
                Sprøytemaling gjort riktig
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Sprøytemaling er ikke bare å peke en pistol mot veggen. Riktig innstilling av
                utstyr, riktig avstand, riktig bevegelse og grundig masking er avgjørende for
                et godt resultat. Feil utførelse gir ujevn dekning, overspray og bortkastet
                materiale.
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
                  Send bilder og en kort beskrivelse av prosjektet, så vurderer vi om
                  sprøytemaling er riktig metode og gir deg et konkret tilbud.
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
                Sprøyte der det gir mening
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Sprøytemaling er et effektivt verktøy i riktige situasjoner — store åpne
                flater, listverk i serie, fasader og tak der rulle og pensel ville tatt
                vesentlig lengre tid. Men det er ikke alltid riktig metode.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                STRØK 17 vurderer alltid hva som gir best resultat for det aktuelle
                prosjektet. Sprøyte brukes der det faktisk er fordelaktig — ikke som
                standardmetode uavhengig av forholdene.
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
