'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Hjem', href: '/' },
  { label: 'Tjenester', href: '/tjenester' },
  { label: 'Prosjekter', href: '/portfolio' },
  { label: 'Om', href: '/om' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border' :'bg-transparent'
        }`}
        aria-label="Hovednavigasjon"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 z-50"
            onClick={closeMenu}
            aria-label="STRØK 17 — Gå til forsiden"
          >
            <AppLogo size={32} />
            <span
              className="font-sans font-700 text-foreground tracking-widest uppercase text-sm hidden sm:block"
              style={{ fontWeight: 700, letterSpacing: '0.18em' }}
            >
              STRØK 17
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="nav-link accent-underline"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/quote-request"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
            >
              Be om tilbud
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden z-50 p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <Icon name="XMarkIcon" size={24} />
            ) : (
              <Icon name="Bars3Icon" size={24} />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-lg transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col justify-center items-start h-full px-8 pt-20 pb-32">
          <nav className="flex flex-col gap-6 w-full" aria-label="Mobilnavigasjon">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={closeMenu}
                className="text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300 tracking-tight"
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col gap-4 w-full">
            <Link
              href="/quote-request"
              onClick={closeMenu}
              className="w-full py-4 bg-primary text-primary-foreground text-center text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Be om tilbud
            </Link>
            <a
              href="tel:[PHONE_NUMBER]"
              onClick={closeMenu}
              className="w-full py-4 border border-border text-center text-sm font-semibold uppercase tracking-widest text-foreground hover:border-primary transition-colors"
            >
              Ring meg
            </a>
          </div>

          <div className="mt-8 text-muted-foreground text-sm">
            Tromsø og omegn
          </div>
        </div>
      </div>
    </>
  );
}