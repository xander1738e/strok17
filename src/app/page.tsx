import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import ServicesSection from './components/ServicesSection';
import FeaturedProjects from './components/FeaturedProjects';
import ProcessSection from './components/ProcessSection';
import WhyStrok17 from './components/WhyStrok17';
import CtaSection from './components/CtaSection';
import MobileCta from './components/MobileCta';

export const metadata: Metadata = {
  title: 'STRØK 17 — Profesjonelt malerarbeid i Tromsø',
  description: 'STRØK 17 utfører innvendig og utvendig maling, helsparkling og overflatearbeid i Tromsø. Grundig forarbeid, rene linjer og et resultat som holder.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <WhyStrok17 />
      <CtaSection />
      <Footer />
      <MobileCta />
    </main>
  );
}