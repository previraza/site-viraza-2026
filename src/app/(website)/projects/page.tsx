import Link from 'next/link';

import { getProjects } from '@/constants/projects';
import { getMetadata } from '@/lib/get-metadata';
import { Label } from '@/components/ui/label';
import ProjectsHero from '@/components/pages/projects/hero';

export const metadata = getMetadata({
  title: 'Projets',
  description: "Découvrez l'ensemble de nos projets et solutions digitales.",
  pathname: '/projects',
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="relative w-full overflow-x-clip bg-background text-white">
      <ProjectsHero
        title="Nos projets"
        description="Découvrez l'ensemble des solutions que nous développons pour accompagner la transformation digitale des entreprises et institutions."
        ctaLabel="Discutons de votre projet"
        ctaHref="https://viraza.net/contact"
      />
      <div className="container py-20 md:py-30">
        <Label>Réalisations</Label>
        <div className="mt-8 grid gap-px bg-gray-20 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col border border-gray-20 bg-background p-8 transition-colors hover:bg-gray-5 sm:p-10"
            >
              <div className="flex-1">
                <h2 className="text-xl font-medium text-white">{project.title}</h2>
                <p className="mt-1 text-sm text-gray-60">{project.subtitle}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-gray-90">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-blue-2 transition-colors group-hover:text-white">
                En savoir plus
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
