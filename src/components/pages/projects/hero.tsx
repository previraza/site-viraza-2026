import Image from 'next/image';
import Link from 'next/link';

interface IProjectsHeroProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ProjectsHero({
  title,
  description,
  ctaLabel,
  ctaHref,
}: IProjectsHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-gray-20 bg-panel py-24 md:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[3.5rem] lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-60">{description}</p>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gray-60 hover:bg-gray-20"
            >
              {ctaLabel}
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
