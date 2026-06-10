import NextLink from 'next/link';
import { MENUS } from '@/constants/menus';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

interface ChangelogHeroProps {
  className?: string;
  title: string;
  description: string;
  pageNumber?: number;
}

function ChangelogHero({ title, description, className, pageNumber }: ChangelogHeroProps) {
  const facebookLink = MENUS.footer.social.find((social) => social.icon === 'facebook');
  const linkedinLink = MENUS.footer.social.find((social) => social.icon === 'linkedin');

  return (
    <section className={cn('hero pt-10 pb-12 md:pt-16 md:pb-14 lg:pb-20 xl:pt-24', className)}>
      <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
        <div className="xl:pr-40">
          <h1 className="font-display text-4xl leading-[1.125] text-balance text-foreground sm:text-5xl md:text-[2.625rem] lg:text-[3.25rem] xl:text-[4rem]">
            {title}
            {pageNumber && <span className="sr-only">Page {pageNumber}</span>}
          </h1>
          <p className="mt-5 text-lg leading-normal tracking-tight text-muted-foreground">
            {description}
          </p>
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2.5 text-sm leading-none tracking-tight text-muted-foreground">
          <span>Suivez-nous sur</span>
          <NextLink
            className="inline-flex items-center gap-2 text-gray-80 transition-colors duration-200 hover:text-foreground"
            href={facebookLink?.href ?? '/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.facebook className="size-3.5" />
            <span>Facebook</span>
          </NextLink>
          <span>et</span>
          <NextLink
            className="inline-flex items-center gap-2 text-gray-80 transition-colors duration-200 hover:text-foreground"
            href={linkedinLink?.href ?? '/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.linkedin className="size-3.5" />
            <span>LinkedIn</span>
          </NextLink>
        </p>
      </div>
    </section>
  );
}

export default ChangelogHero;
