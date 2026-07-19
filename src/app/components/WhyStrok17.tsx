import React from 'react';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/components/ScrollReveal';

const details = [
'Vurdering av underlag og eksisterende overflate',
'Utbedring av sprekker, hull og skader',
'Remsing av skjøter og hjørnelister',
'Sliping og grunning av riktig type',
'Presis masking av gulv, lister og detaljer',
'Riktig produkt for riktig underlag og bruksområde'];


export default function WhyStrok17() {
  return (
    <section
      className="py-24 lg:py-32 bg-secondary"
      id="om"
      aria-label="Om STRØK 17">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <ScrollReveal className="lg:col-span-5">
            <div className="img-reveal revealed aspect-[4/5] overflow-hidden relative">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_135f57c50-1783688256072.png"
                alt="Maler arbeider nøye med sparkling og forarbeid på vegg, mørk bakgrunn, konsentrert håndverk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw" />
              
              {/* Accent corner */}
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-primary" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-6">
                Håndverk
              </span>
              <h2 className="text-display font-bold text-foreground tracking-tight mb-6">
                Det du ikke ser, avgjør ofte resultatet.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 font-light">
                Et godt malerresultat handler ikke bare om selve malingen. Underlaget må vurderes, skader må utbedres, overganger må bli jevne og detaljene må tas før første strøk.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10 font-light">
                STRØK 17 legger stor vekt på arbeidet som skjer før malingen kommer på veggen. Det er der forskjellen mellom et godt og et dårlig resultat ofte avgjøres.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mb-10">
                <p className="text-foreground text-sm font-semibold uppercase tracking-widest mb-6">
                  Forarbeid som standard
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details?.map((detail) =>
                  <div key={detail} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      {detail}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground text-sm font-light leading-relaxed italic">
                  "STRØK 17 er bygget rundt en enkel tanke: godt malerarbeid starter lenge før første strøk. Med rundt fem års praktisk erfaring fra malerfaget, inkludert læretid hos Peab Bogstrand, ligger fokuset på grundig forarbeid, ryddig gjennomføring og et sluttresultat kunden faktisk kan være fornøyd med."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>);

}