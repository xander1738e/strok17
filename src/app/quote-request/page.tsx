import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from './components/QuoteForm';

export const metadata: Metadata = {
  title: 'Be om tilbud — STRØK 17',
  description: 'Send inn en forespørsel til STRØK 17. Beskriv jobben, legg ved bilder og motta tilbud på malerarbeid i Tromsø og omegn.',
  alternates: { canonical: '/quote-request' },
};

export default function QuoteRequestPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
              Tilbud
            </span>
            <h1 className="text-display font-bold text-foreground tracking-tight mb-4">
              Be om tilbud
            </h1>
            <p className="text-muted-foreground text-base font-light leading-relaxed">
              Fyll ut skjemaet under. Jo mer informasjon du gir, jo raskere kan vi gi deg en god vurdering.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}