import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Send inn forespørsel',
    description: 'Fortell kort om jobben og legg gjerne ved bilder. Jo mer informasjon, jo raskere kan vi gi deg et godt svar.',
  },
  {
    number: '02',
    title: 'Avklaring',
    description: 'Vi vurderer omfang, underlag, ønsket resultat og praktiske detaljer. Spørsmål avklares direkte.',
  },
  {
    number: '03',
    title: 'Tilbud og plan',
    description: 'Du får en tydelig avklaring på arbeid, prisgrunnlag og tidspunkt. Ingen skjulte kostnader.',
  },
  {
    number: '04',
    title: 'Utførelse',
    description: 'Arbeidet gjennomføres med fokus på forarbeid, ryddighet og sluttresultat. Du holdes orientert underveis.',
  },
];

export default function ProcessSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-background"
      id="prosess"
      aria-label="Slik fungerer det"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
              Prosess
            </span>
            <h2 className="text-display font-bold text-foreground tracking-tight max-w-xl">
              Slik fungerer det
            </h2>
          </div>
        </ScrollReveal>

        <div className="section-line revealed mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps?.map((step, i) => (
            <ScrollReveal key={step?.number} delay={i * 100}>
              <div className="bg-background p-8 lg:p-10 h-full">
                <div className="text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                  {step?.number}
                </div>
                <h3 className="text-foreground text-lg font-semibold mb-4 tracking-tight">
                  {step?.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {step?.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}