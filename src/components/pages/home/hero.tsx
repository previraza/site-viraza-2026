import NextLink from 'next/link';

import { isExternalLink } from '@/lib/utils';
import { Link } from '@/components/ui/link';

interface IHeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  poster: { src: string; width: number; height: number };
}

export default function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
}: IHeroProps) {
  return (
    <section className="relative z-0 -mt-13.5 w-full overflow-hidden">
      <div className="relative flex min-h-[calc(100svh-3.5rem)] w-full items-center">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 via-background to-background" />
          <div className="absolute top-0 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/5 blur-[120px]" aria-hidden />
        </div>

        <div className="relative z-10 container py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-label text-sm tracking-widest text-emerald">
              SERVICES SÉCURISÉS & INFORMATIQUE
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.125] font-normal whitespace-pre-wrap text-white sm:text-5xl md:text-[2.625rem] lg:text-[3.25rem] xl:text-[4rem]">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <NextLink
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-emerald-2 hover:shadow-lg hover:shadow-emerald/25"
              >
                {primaryCta.label}
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NextLink>
              <Link
                href={secondaryCta.href}
                variant="secondary"
                className="inline-flex items-center gap-2"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
