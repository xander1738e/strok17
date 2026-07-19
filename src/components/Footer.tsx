import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" aria-label="Bunntekst">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Arc Browser Split Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={28} />
              <span className="font-sans font-bold text-foreground tracking-widest uppercase text-sm" style={{ fontWeight: 700, letterSpacing: '0.18em' }}>
                STRØK 17
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Profesjonelt malerarbeid i Tromsø og omegn. Grundig forarbeid, rene linjer.
            </p>
            <p className="text-muted-foreground text-xs mt-4">
              Org.nr: {siteConfig?.orgNumber}
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:justify-end">
            <div className="flex flex-col gap-3">
              <Link href="/" className="nav-link text-muted-foreground hover:text-foreground transition-colors text-sm">Hjem</Link>
              <Link href="/#tjenester" className="nav-link text-muted-foreground hover:text-foreground transition-colors text-sm">Tjenester</Link>
              <Link href="/portfolio" className="nav-link text-muted-foreground hover:text-foreground transition-colors text-sm">Prosjekter</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/#om" className="nav-link text-muted-foreground hover:text-foreground transition-colors text-sm">Om</Link>
              <Link href="/#kontakt" className="nav-link text-muted-foreground hover:text-foreground transition-colors text-sm">Kontakt</Link>
              <Link href="/quote-request" className="nav-link text-muted-foreground hover:text-foreground transition-colors text-sm">Be om tilbud</Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 STRØK 17 · Tromsø og omegn
          </p>
          <div className="flex items-center gap-6">
            <Link href="/personvern" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              Personvern
            </Link>
            <span className="text-border text-xs">·</span>
            <a
              href={`mailto:${siteConfig?.email}`}
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              {siteConfig?.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}