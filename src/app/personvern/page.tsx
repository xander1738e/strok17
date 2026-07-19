import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Personvern — STRØK 17',
  description: 'Personvernerklæring for STRØK 17. Informasjon om hvordan vi behandler personopplysninger.',
  alternates: { canonical: '/personvern' },
};

export default function PersonvernPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
              Juridisk
            </span>
            <h1 className="text-display font-bold text-foreground tracking-tight mb-4">
              Personvernerklæring
            </h1>
            <p className="text-muted-foreground text-sm">
              Sist oppdatert: Juli 2026
            </p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">1. Behandlingsansvarlig</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                STRØK 17, org.nr. {siteConfig.orgNumber}, er behandlingsansvarlig for personopplysninger som samles inn via dette nettstedet.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mt-3">
                Kontakt: {siteConfig.email}
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">2. Hvilke opplysninger samler vi inn</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-3">
                Når du sender inn en tilbudsforespørsel via nettstedet, samler vi inn:
              </p>
              <ul className="space-y-2">
                {[
                  'Navn',
                  'Telefonnummer',
                  'E-postadresse',
                  'Adresse eller område',
                  'Prosjektbeskrivelse og detaljer',
                  'Bilder du velger å laste opp',
                  'Foretrukket kontaktmetode',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">3. Formål med behandlingen</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Opplysningene brukes utelukkende til å behandle og svare på din forespørsel om malerarbeid. Vi bruker ikke opplysningene til markedsføring uten eksplisitt samtykke.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">4. Rettslig grunnlag</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Behandlingen er basert på ditt samtykke (GDPR art. 6 nr. 1 bokstav a) og for å gjennomføre tiltak på din anmodning før en eventuell avtale inngås (GDPR art. 6 nr. 1 bokstav b).
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">5. Lagring og sletting</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Opplysninger knyttet til forespørsler som ikke resulterer i oppdrag, slettes etter rimelig tid. Opplysninger knyttet til gjennomførte oppdrag lagres i henhold til regnskapslovgivningen.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">6. Dine rettigheter</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-3">
                Du har rett til:
              </p>
              <ul className="space-y-2">
                {[
                  'Innsyn i hvilke opplysninger vi har om deg',
                  'Retting av uriktige opplysninger',
                  'Sletting av opplysninger ("retten til å bli glemt")',
                  'Begrensning av behandling',
                  'Å trekke tilbake samtykke',
                  'Å klage til Datatilsynet',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                Ta kontakt på {siteConfig.email} for å benytte disse rettighetene.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">7. Informasjonskapsler (cookies)</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Dette nettstedet bruker kun teknisk nødvendige informasjonskapsler for å sikre grunnleggende funksjonalitet. Vi bruker ikke sporings- eller markedsføringscookies uten ditt eksplisitte samtykke.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-lg font-semibold mb-3">8. Kontakt</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Spørsmål om personvern kan rettes til {siteConfig.email}.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mt-3">
                Du kan også kontakte Datatilsynet: <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">datatilsynet.no</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}