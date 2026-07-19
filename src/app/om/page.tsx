import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Om STRØK 17 — Maler i Tromsø med praktisk bakgrunn',
  description:
    'STRØK 17 er bygget rundt grundig forarbeid og faglig ærlighet. Rundt fem års praktisk erfaring fra malerfaget, inkludert læretid hos Peab Bogstrand. Lokalt i Tromsø.',
  keywords: [
    'maler Tromsø',
    'malerfirma Tromsø',
    'om STRØK 17',
    'maler erfaring Tromsø',
    'lokal maler Tromsø',
    'Peab Bogstrand lærling',
  ],
  alternates: { canonical: '/om' },
  openGraph: {
    title: 'Om STRØK 17 — Maler i Tromsø',
    description:
      'Rundt fem års praktisk erfaring fra malerfaget. Fokus på grundig forarbeid, ryddig gjennomføring og et sluttresultat som holder.',
    type: 'website',
    locale: 'nb_NO',
  },
};

const values = [
  {
    icon: 'WrenchScrewdriverIcon' as const,
    label: 'Forarbeid først',
    desc: 'Sparkling, sliping, remsing og klargjøring er ikke noe som hoppes over. Det er der resultatet avgjøres.',
  },
  {
    icon: 'MapPinIcon' as const,
    label: 'Lokalt forankret',
    desc: 'Tromsø er hjemmebanen. Kjennskap til lokale forhold, rask respons og personlig oppfølging.',
  },
  {
    icon: 'ChatBubbleLeftRightIcon' as const,
    label: 'Tydelig kommunikasjon',
    desc: 'Du vet hva som skal gjøres, hva det koster og når det skjer — uten unødvendige overraskelser.',
  },
  {
    icon: 'CheckCircleIcon' as const,
    label: 'Ryddig gjennomføring',
    desc: 'Masking, beskyttelse og etterarbeid er en del av jobben — ikke noe som overlates til tilfeldighetene.',
  },
];

const skills = [
  'Innvendig maling — vegger, tak, lister og dører',
  'Utvendig maling — fasader, listverk og detaljer',
  'Helsparkling og overflateklargjøring',
  'Sparkling, remsing og sliping',
  'Hjørnelister og overganger',
  'Fuging og tetting',
  'Tak og krevende flater',
  'Oppussing og rehabilitering av slitte overflater',
  'Sprøytemaling på egnede prosjekter',
  'Forarbeid på skadde eller ujevne underlag',
];

export default function OmPage() {
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
                <li className="text-foreground">Om</li>
              </ol>
            </nav>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Om STRØK 17
              </span>
              <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
                Godt malerarbeid starter lenge før første strøk.
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base font-light">
                STRØK 17 er bygget rundt en enkel tanke: resultatet avgjøres av arbeidet som
                skjer før malingen åpnes. Med rundt fem års praktisk erfaring fra malerfaget,
                inkludert læretid hos Peab Bogstrand, ligger fokuset på grundig forarbeid,
                ryddig gjennomføring og et sluttresultat kunden faktisk kan være fornøyd med.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base font-light">
                Virksomheten er lokalt forankret i Tromsø og betjener privatpersoner,
                utleiere og næringsdrivende i byen og omegn.
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

            {/* Quick facts */}
            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                <div className="bg-card p-6">
                  <p className="text-primary text-2xl font-bold tracking-tight mb-1">~5 år</p>
                  <p className="text-foreground text-sm font-semibold mb-1">Praktisk erfaring</p>
                  <p className="text-muted-foreground text-xs font-light leading-relaxed">
                    Fra malerfaget — inkludert læretid og videre arbeid i bransjen.
                  </p>
                </div>
                <div className="bg-card p-6">
                  <p className="text-primary text-2xl font-bold tracking-tight mb-1">Tromsø</p>
                  <p className="text-foreground text-sm font-semibold mb-1">Hjemmebane</p>
                  <p className="text-muted-foreground text-xs font-light leading-relaxed">
                    Lokalt forankret. Betjener Tromsø, Tromsdalen, Kvaløya og omegn.
                  </p>
                </div>
                <div className="bg-card p-6">
                  <p className="text-primary text-2xl font-bold tracking-tight mb-1">Peab</p>
                  <p className="text-foreground text-sm font-semibold mb-1">Læretid hos Peab Bogstrand</p>
                  <p className="text-muted-foreground text-xs font-light leading-relaxed">
                    Rundt tre år som lærling — solid faglig grunnlag fra profesjonelt miljø.
                  </p>
                </div>
                <div className="bg-card p-6">
                  <p className="text-primary text-2xl font-bold tracking-tight mb-1">Inn + ut</p>
                  <p className="text-foreground text-sm font-semibold mb-1">Innvendig og utvendig</p>
                  <p className="text-muted-foreground text-xs font-light leading-relaxed">
                    Erfaring med krevende overflater, rehabilitering og detaljarbeid.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <ScrollReveal className="lg:col-span-7">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Bakgrunn
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Fra lærling til eget foretak
              </h2>
              <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
                <p>
                  Interessen for malerfaget startet tidlig — ikke bare med pensel og rull, men
                  med nysgjerrighet på hva som faktisk skjer under overflaten. Hva gjør at
                  malingen holder? Hva skjer når forarbeidet ikke er godt nok? Det er spørsmål
                  som har formet måten arbeidet gjøres på.
                </p>
                <p>
                  Læretiden hos Peab Bogstrand ga et solid faglig grunnlag. Rundt tre år i et
                  profesjonelt miljø med reelle prosjekter — fra enkle maleroppgaver til mer
                  krevende rehabiliteringsarbeid. Etter læretiden fortsatte arbeidet i bransjen,
                  og den samlede praktiske erfaringen er nå rundt fem år.
                </p>
                <p>
                  STRØK 17 ble etablert for å tilby det samme nivået av faglig grundighet i
                  et mindre og mer fleksibelt format. Uten unødvendige mellomledd. Med direkte
                  kontakt mellom den som bestiller jobben og den som utfører den.
                </p>
                <p>
                  Fokuset er på oppdrag der forarbeidet tas på alvor — sparkling, sliping,
                  remsing, klargjøring — og der sluttresultatet faktisk holder over tid.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="lg:col-span-5">
              <div className="bg-secondary border border-border p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-6">
                    Arbeidsområder
                  </span>
                  <ul className="space-y-3">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-3 text-sm text-muted-foreground font-light"
                      >
                        <span className="text-primary mt-0.5 shrink-0">—</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground text-xs font-light leading-relaxed">
                    Betjener Tromsø, Tromsdalen, Kvaløya, Hamna, Kroken, Stakkevollan og
                    nærliggende områder etter avtale.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values / approach */}
      <section className="py-20 lg:py-28 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
              Tilnærming
            </span>
            <h2 className="text-section font-bold text-foreground tracking-tight mb-4 max-w-xl">
              Det du ikke ser, avgjør ofte resultatet.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-14 max-w-2xl">
              Et godt malerresultat handler ikke bare om selve malingen. Underlaget må
              vurderes, skader utbedres, overganger jevnes ut og detaljene tas før første
              strøk. Det er der kvaliteten bygges — og det er der STRØK 17 legger innsatsen.
            </p>
          </ScrollReveal>

          {/* Asymmetric bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div className="bg-card p-8 h-full flex flex-col gap-4">
                  <Icon name={item.icon} size={24} className="text-primary" />
                  <div>
                    <p className="text-foreground text-sm font-semibold mb-2">{item.label}</p>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade knowledge — the "why preparation matters" section */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Faglig perspektiv
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Forarbeid er ikke en formalitet
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Mange malerproblemer — bobler, sprekker, dårlig heft, synlige skjøter —
                  skyldes ikke dårlig maling. De skyldes at underlaget ikke ble behandlet
                  riktig. Det er en av de vanligste feilene i bransjen, og det er noe STRØK 17
                  jobber aktivt for å unngå.
                </p>
                <p>
                  Forarbeid betyr å vurdere underlaget, utbedre skader, sørge for jevne
                  overganger, bruke riktig grunning og sikre at malingen har noe solid å
                  feste seg til. Det tar tid. Men det er den tiden som gjør at resultatet
                  faktisk holder — ikke bare ser bra ut den første uken.
                </p>
                <p>
                  Det gjelder enten det er en leilighet som skal pusses opp, en fasade som
                  trenger behandling, eller et tak med fuktskader som må utbedres før maling.
                  Tilnærmingen er den samme: vurder underlaget, gjør forarbeidet ordentlig,
                  og utfør malingen med fokus på rene linjer og jevnt resultat.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-px bg-border">
                {[
                  {
                    step: '01',
                    title: 'Vurdering av underlag',
                    desc: 'Hva er tilstanden? Hva trenger utbedring? Hva er riktig behandling for dette underlaget?',
                  },
                  {
                    step: '02',
                    title: 'Utbedring og klargjøring',
                    desc: 'Sparkling, remsing, sliping og grunning — alt som trengs for at malingen skal feste seg og holde.',
                  },
                  {
                    step: '03',
                    title: 'Masking og beskyttelse',
                    desc: 'Gulv, lister, vinduer og tilstøtende flater beskyttes grundig før arbeidet starter.',
                  },
                  {
                    step: '04',
                    title: 'Maling og finish',
                    desc: 'Jevn påføring, rene overganger og riktig antall strøk for det ønskede resultatet.',
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-background p-6 flex gap-5 items-start">
                    <span className="text-primary text-xs font-bold tracking-widest shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-foreground text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-muted-foreground text-xs font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Local connection */}
      <section className="py-20 lg:py-28 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-5">
                Lokalt
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-6">
                Tromsø er hjemmebanen
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  STRØK 17 opererer i Tromsø og nærliggende områder. Det betyr kortere
                  responstid, bedre kjennskap til lokale forhold og mulighet for å se på
                  jobben i forkant uten at det koster noe.
                </p>
                <p>
                  Betjente områder inkluderer Tromsø sentrum, Tromsdalen, Kvaløya, Hamna,
                  Kroken og Stakkevollan. Oppdrag utenfor disse områdene vurderes etter
                  omfang og kapasitet.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 border border-border text-muted-foreground text-xs font-light tracking-wide"
                  >
                    {area}
                  </span>
                ))}
                <span className="px-3 py-1.5 border border-border text-muted-foreground text-xs font-light tracking-wide">
                  + nærliggende etter avtale
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-display font-bold text-foreground tracking-tight mb-4">
              Har du et prosjekt i tankene?
            </h2>
            <p className="text-muted-foreground font-light mb-8 max-w-md mx-auto">
              Send noen bilder og en kort beskrivelse av jobben, så tar vi en første
              vurdering. Ingen forpliktelse.
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
