import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    id: 'innvendig-maling',
    title: 'Innvendig maling',
    description: 'Vegger, tak, lister, dører og andre innvendige flater. Korrekt forarbeid, presise overganger og jevnt sluttresultat.',
    icon: 'HomeIcon',
    href: '/tjenester/innvendig-maling',
  },
  {
    id: 'utvendig-maling',
    title: 'Utvendig maling',
    description: 'Fasader, listverk, vindskier og detaljer med riktig forarbeid for nordnorsk klima.',
    icon: 'BuildingOfficeIcon',
    href: '/tjenester/utvendig-maling',
  },
  {
    id: 'helsparkling',
    title: 'Helsparkling og overflatearbeid',
    description: 'Sparkling, remsing, sliping og klargjøring for jevne, ferdige flater. Grunnlaget for et godt malerresultat.',
    icon: 'PaintBrushIcon',
    href: '/tjenester/helsparkling',
  },
  {
    id: 'rehabilitering',
    title: 'Oppussing og rehabilitering',
    description: 'Forbedring av slitte, skadde eller ujevne overflater. Fra skader og råte til ferdig behandlet flate.',
    icon: 'WrenchScrewdriverIcon',
    href: '/#tjenester',
  },
  {
    id: 'sproytemaling',
    title: 'Sprøytemaling',
    description: 'Effektiv og jevn påføring på egnede prosjekter og flater der sprøyte gir best resultat.',
    icon: 'SparklesIcon',
    href: '/tjenester/sproytemaling',
  },
  {
    id: 'mindre-oppdrag',
    title: 'Mindre maleroppdrag',
    description: 'Også mindre jobber vurderes etter kapasitet og omfang. Ta kontakt for en rask avklaring.',
    icon: 'CheckCircleIcon',
    href: '/quote-request',
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-background"
      id="tjenester"
      aria-label="Tjenester"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
              Tjenester
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-display font-bold text-foreground tracking-tight max-w-xl">
                Malerarbeid fra bunn til topp
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:text-right">
                God maling begynner med godt forarbeid. Alle oppdrag vurderes individuelt basert på underlag, omfang og ønsket resultat.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="section-line revealed mb-16" />

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 80}>
              <Link
                href={service.href}
                className="service-card block p-8 lg:p-10 h-full group"
                aria-label={`Les mer om ${service.title}`}
              >
                <div className="mb-6">
                  <Icon
                    name={service.icon as Parameters<typeof Icon>[0]['name']}
                    size={28}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-foreground text-lg font-semibold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Les mer</span>
                  <Icon name="ArrowRightIcon" size={14} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/quote-request"
            className="inline-flex items-center gap-3 text-foreground text-sm font-semibold uppercase tracking-widest border-b border-border pb-1 hover:border-primary hover:text-primary transition-all duration-300"
          >
            Be om tilbud på ditt prosjekt
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}