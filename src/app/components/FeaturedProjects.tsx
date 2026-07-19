import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/components/ScrollReveal';
import { getFeaturedProjects } from '@/lib/projects';

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section
      className="py-24 lg:py-32 bg-secondary"
      id="prosjekter"
      aria-label="Utvalgte prosjekter"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-4">
                Prosjekter
              </span>
              <h2 className="text-display font-bold text-foreground tracking-tight">
                Tidligere arbeid
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-300 group"
            >
              Se alle prosjekter
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Bento grid — 3 columns */}
        {/* BENTO AUDIT:
            Array has 3 cards: [Project1 cs-2, Project2 cs-1 rs-2, Project3 cs-1]
            Row 1: [col-1–2: Project1 cs-2 rs-1] [col-3: Project2 cs-1 rs-2]
            Row 2: [col-1: Project3 cs-1 rs-1] [col-2: empty → Project3 col-span-2] [col-3: OCCUPIED by Project2]
            Fix: Project3 cs-2
            Placed 3/3 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: col-span-2 */}
          {projects?.[0] && (
            <ScrollReveal className="md:col-span-2">
              <Link
                href={`/portfolio`}
                className="project-card block aspect-video relative overflow-hidden group"
                aria-label={`Se prosjekt: ${projects?.[0]?.title}`}
              >
                <AppImage
                  src={projects?.[0]?.heroImage}
                  alt={projects?.[0]?.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="overlay" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">
                    {projects?.[0]?.serviceType}
                  </span>
                  <h3 className="text-white font-bold text-xl tracking-tight mb-1">
                    {projects?.[0]?.title}
                  </h3>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    {projects?.[0]?.location}
                    {projects?.[0]?.duration && ` · ${projects?.[0]?.duration}`}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Card 2: row-span-2 */}
          {projects?.[1] && (
            <ScrollReveal className="md:row-span-2" delay={100}>
              <Link
                href={`/portfolio`}
                className="project-card block h-full min-h-[300px] md:min-h-0 relative overflow-hidden group"
                aria-label={`Se prosjekt: ${projects?.[1]?.title}`}
              >
                <AppImage
                  src={projects?.[1]?.heroImage}
                  alt={projects?.[1]?.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="overlay" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">
                    {projects?.[1]?.serviceType}
                  </span>
                  <h3 className="text-white font-bold text-xl tracking-tight mb-1">
                    {projects?.[1]?.title}
                  </h3>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    {projects?.[1]?.location}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Card 3: col-span-2 */}
          {projects?.[2] && (
            <ScrollReveal className="md:col-span-2" delay={200}>
              <Link
                href={`/portfolio`}
                className="project-card block aspect-video relative overflow-hidden group"
                aria-label={`Se prosjekt: ${projects?.[2]?.title}`}
              >
                <AppImage
                  src={projects?.[2]?.heroImage}
                  alt={projects?.[2]?.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="overlay" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-2">
                    {projects?.[2]?.serviceType}
                  </span>
                  <h3 className="text-white font-bold text-xl tracking-tight mb-1">
                    {projects?.[2]?.title}
                  </h3>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    {projects?.[2]?.location}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}