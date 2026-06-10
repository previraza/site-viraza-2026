'use client';

import { useEffect, useState } from 'react';
import { homeHeaderLinks } from '@/constants/home';

import { useTrack } from '@/hooks/use-tracking';
import { Link } from '@/components/ui/link';

export default function HeaderActions() {
  const track = useTrack();
  const [onLightSection, setOnLightSection] = useState(false);
  const [facebookLink] = homeHeaderLinks.social;
  const [contactLink, rendezvousLink] = homeHeaderLinks.auth;

  useEffect(() => {
    const lightSections = document.querySelectorAll<HTMLElement>('[data-header-theme="light"]');
    if (lightSections.length === 0) return;

    const headerHeight = 56;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyIntersecting = entries.some((entry) => entry.isIntersecting);
        setOnLightSection(anyIntersecting);
      },
      {
        rootMargin: `-${headerHeight}px 0px -${window.innerHeight - headerHeight - 1}px 0px`,
        threshold: 0,
      },
    );

    lightSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Actions" className="hidden items-center gap-16 lg:flex">
      <div className="flex items-center gap-1">
        <Link href={facebookLink.href} size="small" target="_blank" rel="noopener noreferrer">
          {facebookLink.label}
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <Link
          href={contactLink.href}
          variant={onLightSection ? 'primaryBlack' : 'secondary'}
          size="small"
          className="bg-background transition-colors duration-300"
          onClick={() => track('contact', { location: 'navigation' })}
        >
          {contactLink.label}
        </Link>
        <Link
          href={rendezvousLink.href}
          size="small"
          onClick={() => track('rendezvous', { location: 'navigation' })}
        >
          {rendezvousLink.label}
        </Link>
      </div>
    </nav>
  );
}
