import React from 'react';

const trustPoints = [
  {
    value: 'Ca. 5 år',
    label: 'Praktisk erfaring',
    description: 'Fra læretid til selvstendig arbeid',
  },
  {
    value: 'Grundig',
    label: 'Forarbeid',
    description: 'Sparkling, sliping og riktig underlagsbehandling',
  },
  {
    value: 'Tydelig',
    label: 'Kommunikasjon',
    description: 'Klare avklaringer og realistiske tilbud',
  },
  {
    value: 'Lokalt',
    label: 'Tromsø og omegn',
    description: 'Tromsdalen, Kvaløya, Hamna, Kroken og omegn',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="py-16 border-y border-border bg-secondary"
      aria-label="Nøkkelpunkter"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {trustPoints?.map((point) => (
            <div
              key={point?.label}
              className="bg-secondary px-6 py-8 lg:py-10"
            >
              <div className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">
                {point?.value}
              </div>
              <div className="text-foreground text-base font-semibold mb-2">
                {point?.label}
              </div>
              <div className="text-muted-foreground text-sm font-light leading-snug">
                {point?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}