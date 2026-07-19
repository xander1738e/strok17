'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-end pb-20 lg:pb-32 overflow-hidden"
      id="hjem"
      aria-label="Helteseksjon">
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1f4eb7436-1783596966982.png"
          alt="Profesjonell maler utfører presist arbeid på vegg, Tromsø — mørkt industrielt rom med fokus på håndverk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        {/* Bottom fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Tromsø og omegn
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-hero font-bold text-white leading-none tracking-tight mb-8 transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}>
            
            Ordentlig håndverk.
            <br />
            <span className="text-foreground/80">Fra første sparkel</span>
            <br />
            <span className="text-primary">til siste strøk.</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-white/70 text-lg font-light leading-relaxed max-w-lg mb-10 transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}>
            
            Profesjonelt malerarbeid i Tromsø — med grundig forarbeid, ryddige løsninger og et sluttresultat du kan stå for.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '450ms' }}>
            
            <Link
              href="/quote-request"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 min-h-[52px]">
              
              Be om tilbud
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-semibold uppercase tracking-widest hover:border-white/60 hover:bg-white/10 transition-all duration-300 min-h-[52px] backdrop-blur-sm">
              
              Se prosjekter
            </Link>
          </div>

          {/* Trust line */}
          <div
            className={`flex flex-wrap items-center gap-x-6 gap-y-2 transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '600ms' }}>
            
            {['Lokalt i Tromsø', 'Ca. 5 års erfaring', 'Innvendig og utvendig']?.map((item, i) =>
            <span key={i} className="text-white/50 text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                {i > 0 && <span className="text-white/20">·</span>}
                {item}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>);

}