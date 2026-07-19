'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/components/ScrollReveal';
import { getProjectsByCategory, type Project } from '@/lib/projects';

const filters = [
  { key: 'alle', label: 'Alle' },
  { key: 'innvendig', label: 'Innvendig' },
  { key: 'utvendig', label: 'Utvendig' },
  { key: 'sparkling', label: 'Sparkling' },
  { key: 'rehabilitering', label: 'Rehabilitering' },
];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = getProjectsByCategory(activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filtrer prosjekter">
        {filters.map((filter) => (
          <button
            key={filter.key}
            role="tab"
            aria-selected={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      {/* BENTO AUDIT for filtered grid (alle — 5 cards):
          Row 1: [col-1: Card1 cs-1 rs-1] [col-2: Card2 cs-1 rs-1] [col-3: Card3 cs-1 rs-1]
          Row 2: [col-1: Card4 cs-1 rs-1] [col-2: Card5 cs-2 rs-1]
          Placed 5/5 ✓
          Each card uses standard col-span-1, last card uses col-span-2 if last in odd row.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <ScrollReveal
            key={project.slug}
            delay={i * 60}
            className={
              filtered.length % 3 !== 0 && i === filtered.length - 1 && filtered.length % 3 === 1
                ? 'lg:col-span-3'
                : filtered.length % 3 === 2 && i === filtered.length - 2
                ? 'lg:col-span-1' :''
            }
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="project-card w-full text-left block overflow-hidden group bg-card border border-border hover:border-primary transition-colors duration-400"
              aria-label={`Vis detaljer for ${project.title}`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <AppImage
                  src={project.heroImage}
                  alt={project.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
                    {project.serviceType}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-foreground font-semibold text-base tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    {project.location}
                  </span>
                  {project.duration && (
                    <span className="text-muted-foreground text-xs">
                      {project.duration}
                    </span>
                  )}
                </div>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-foreground text-sm">Ingen prosjekter i denne kategorien ennå.</p>
        </div>
      )}

      {/* Project detail modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={`Prosjektdetaljer: ${selectedProject.title}`}
        >
          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-60 w-12 h-12 bg-card border border-border flex items-center justify-center hover:border-primary transition-colors duration-300"
              aria-label="Lukk prosjektdetaljer"
            >
              <Icon name="XMarkIcon" size={20} className="text-foreground" />
            </button>

            {/* Back button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-8 hover:text-foreground transition-colors duration-300 mt-4"
            >
              <Icon name="ArrowLeftIcon" size={16} />
              Tilbake til prosjekter
            </button>

            {/* Project header */}
            <div className="mb-8">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">
                {selectedProject.serviceType} · {selectedProject.location}
              </span>
              <h2 className="text-section font-bold text-foreground tracking-tight mb-4">
                {selectedProject.title}
              </h2>
              {selectedProject.duration && (
                <p className="text-muted-foreground text-sm">
                  Varighet: {selectedProject.duration}
                </p>
              )}
            </div>

            {/* Before/After slider */}
            <div className="mb-12">
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-semibold">
                Før og etter — dra for å sammenligne
              </p>
              <BeforeAfterSlider
                beforeSrc={selectedProject.beforeImage}
                afterSrc={selectedProject.afterImage}
                beforeAlt={selectedProject.beforeImageAlt}
                afterAlt={selectedProject.afterImageAlt}
                className="aspect-video w-full"
              />
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Challenge */}
              <div>
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-widest mb-4">
                  Utfordring
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Result */}
              <div>
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-widest mb-4">
                  Resultat
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>

              {/* Work completed */}
              <div>
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-widest mb-4">
                  Utført arbeid
                </h3>
                <ul className="space-y-2">
                  {selectedProject.workCompleted.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-widest mb-4">
                  Materialer og produkter
                </h3>
                <ul className="space-y-2">
                  {selectedProject.materials.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            {selectedProject.gallery.length > 0 && (
              <div className="mb-12">
                <h3 className="text-foreground text-sm font-semibold uppercase tracking-widest mb-6">
                  Galleri
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="aspect-[4/3] relative overflow-hidden bg-card">
                      <AppImage
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {img.caption && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                          <p className="text-white text-xs">{img.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="border-t border-border pt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-request"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 min-h-[52px]"
              >
                Be om tilbud på lignende arbeid
              </Link>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary transition-colors duration-300 min-h-[52px]"
              >
                Se flere prosjekter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-20 pt-12 border-t border-border text-center">
        <p className="text-muted-foreground text-sm font-light mb-6">
          Flere prosjekter legges til fortløpende.
        </p>
        <Link
          href="/quote-request"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
        >
          Be om tilbud
          <Icon name="ArrowRightIcon" size={16} />
        </Link>
      </div>
    </>
  );
}