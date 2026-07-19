import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <div className="text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            404
          </div>
          <h1 className="text-display font-bold text-foreground tracking-tight mb-6">
            Siden finnes ikke
          </h1>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-12">
            Siden du leter etter eksisterer ikke eller har blitt flyttet. Gå tilbake til forsiden eller bruk navigasjonen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
            >
              Til forsiden
            </Link>
            <Link
              href="/quote-request"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary transition-colors duration-300"
            >
              Be om tilbud
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}