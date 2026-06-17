import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProjectBySlug, getProjects } from '@/constants/projects';
import { getMetadata } from '@/lib/get-metadata';
import { Label } from '@/components/ui/label';

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

  return (
    <main className="relative w-full overflow-x-clip bg-background text-white">
      <div className="container py-30 md:py-45">
        <div className="pt-8 md:pt-12 xl:pt-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-60 transition-colors hover:text-white"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>
          <Label>{project.title}</Label>
        </div>
        <div className="mt-8 max-w-3xl">
          <h1 className="text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[3.5rem] lg:text-[4rem]">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-gray-60">{project.subtitle}</p>
        </div>
        <div className="mt-12 max-w-3xl">
          <p className="text-[0.9375rem] leading-relaxed text-gray-90 sm:text-base">
            {project.body}
          </p>
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gray-60 hover:bg-gray-20"
            >
              {project.externalLabel || 'Visiter le site'}
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
