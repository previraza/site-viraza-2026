import { cn } from '@/lib/utils';
import NextLink from 'next/link';

interface ICtaProps {
  heading: string;
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}

function Cta({ heading, subheading, buttonLabel, buttonHref, className }: ICtaProps) {
  return (
    <section className={cn('relative w-full py-20 md:py-28', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 to-transparent" aria-hidden />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-emerald/20 bg-gradient-to-b from-emerald/10 to-emerald/5 p-12 text-center md:p-16">
          <h2 className="font-display text-3xl leading-[1.125] text-balance text-white sm:text-4xl md:text-[2.5rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {subheading}
          </p>
          <NextLink
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-emerald-2 hover:shadow-lg hover:shadow-emerald/25"
          >
            {buttonLabel}
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NextLink>
        </div>
      </div>
    </section>
  );
}

export default Cta;
