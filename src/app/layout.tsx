import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'STRØK 17 — Profesjonelt malerarbeid i Tromsø',
  description: 'STRØK 17 utfører innvendig og utvendig maling, helsparkling og overflatearbeid i Tromsø. Grundig forarbeid, rene linjer og et resultat som holder.',
  keywords: ['maler Tromsø', 'malerfirma Tromsø', 'innvendig maling Tromsø', 'utvendig maling Tromsø', 'helsparkling Tromsø', 'sparkling Tromsø', 'sprøytemaling Tromsø'],
  openGraph: {
    title: 'STRØK 17 — Profesjonelt malerarbeid i Tromsø',
    description: 'Grundig forarbeid. Rene linjer. Et resultat som holder.',
    type: 'website',
    locale: 'nb_NO',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STRØK 17 — Profesjonelt malerarbeid i Tromsø',
    description: 'Grundig forarbeid. Rene linjer. Et resultat som holder.',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={dmSans.variable}>
      <body className={dmSans.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fstrok177093back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}