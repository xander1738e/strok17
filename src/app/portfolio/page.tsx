import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioClient from './components/PortfolioClient';

export const metadata: Metadata = {
  title: 'Prosjekter — STRØK 17 · Malerarbeid i Tromsø',
  description: 'Se utvalgte prosjekter fra STRØK 17 — innvendig maling, helsparkling, utvendig maling og rehabilitering i Tromsø og omegn.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page header */}
          <div className="mb-16 max-w-2xl">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
              Prosjekter
            </span>
            <h1 className="text-display font-bold text-foreground tracking-tight mb-4">
              Tidligere arbeid
            </h1>
            <p className="text-muted-foreground text-base font-light leading-relaxed">
              Et utvalg prosjekter fra Tromsø og omegn. Hvert prosjekt er forskjellig — underlaget, omfanget og ønsket resultat styrer tilnærmingen.
            </p>
          </div>

          <PortfolioClient />
        </div>
      </section>
      <Footer />
    </main>
  );
}