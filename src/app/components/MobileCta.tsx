'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`mobile-cta-bar lg:hidden transition-transform duration-400 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex gap-3">
        <Link
          href="/quote-request"
          className="flex-1 py-3.5 bg-primary text-primary-foreground text-center text-xs font-semibold uppercase tracking-widest min-h-[44px] flex items-center justify-center"
        >
          Be om tilbud
        </Link>
        <a
          href={siteConfig?.phoneHref}
          className="px-5 py-3.5 border border-border text-foreground text-xs font-semibold uppercase tracking-widest min-h-[44px] flex items-center justify-center"
          aria-label="Ring oss"
        >
          Ring
        </a>
      </div>
    </div>
  );
}