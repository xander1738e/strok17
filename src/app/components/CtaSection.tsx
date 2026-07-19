import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function CtaSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-background border-t border-border"
      id="kontakt"
      aria-label="Ta kontakt"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-6">
          Kom i gang
        </span>
        <h2 className="text-display font-bold text-foreground tracking-tight mb-6">
          Har du et prosjekt i tankene?
        </h2>
        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Send noen bilder og en kort beskrivelse av jobben, så tar vi en første vurdering. Ingen forpliktelser.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/quote-request"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 min-h-[52px]"
          >
            Be om tilbud
          </Link>
          <a
            href={siteConfig?.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 min-h-[52px]"
          >
            Ring meg
          </a>
        </div>

        <p className="text-muted-foreground text-xs">
          Tromsø og omegn · {siteConfig?.email}
        </p>
      </div>
    </section>
  );
}