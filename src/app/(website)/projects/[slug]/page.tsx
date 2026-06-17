import Link from 'next/link';
import { notFound } from 'next/navigation';

import { homeContentData } from '@/constants/home';
import { getProjectBySlug, getProjects } from '@/constants/projects';
import { getMetadata } from '@/lib/get-metadata';
import { Label } from '@/components/ui/label';
import Cta from '@/components/pages/home/cta';
import PricingHero from '@/components/pages/pricing/hero-pricing/hero--pricing';
import UsageCalculator from '@/components/pages/pricing/usage-calculator';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return getMetadata({
    title: project.title,
    description: project.description,
    pathname: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const { deployPricingPlans } = await import('@/constants/pricing');

  return (
    <main className="relative w-full overflow-x-clip bg-background text-white">
      <div className="container py-20 md:py-30">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-60 transition-colors hover:text-white"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux projets
        </Link>

        <div className="mt-8">
          <Label>{project.title}</Label>
          <h1 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[3.5rem] lg:text-[4rem]">
            {project.title}
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-gray-60">{project.subtitle}</p>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-[0.9375rem] leading-relaxed text-gray-90 sm:text-base">
            {project.body}
          </p>
          {project.externalUrl && (
            <div className="mt-8">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gray-60 hover:bg-gray-20"
              >
                {project.externalLabel || 'Visiter le site'}
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {project.hasPricing && (
          <div className="mt-20">
            {project.slug === 'allocation-server' ? (
              <UsageCalculator />
            ) : (
              <>
                <h2 className="marked-title font-display text-3xl leading-[1.125] whitespace-pre-line text-foreground sm:text-4xl lg:text-[40px]">
                  <mark>Nos formules</mark>
                </h2>
                <PricingHero plans={deployPricingPlans} />
              </>
            )}
          </div>
        )}
      </div>
      <Cta {...homeContentData.cta} />
    </main>
  );
}
