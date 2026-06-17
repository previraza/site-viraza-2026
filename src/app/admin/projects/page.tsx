import Link from 'next/link';

import { readProjects } from '@/lib/projects-store';
import { DeleteButton } from '@/app/admin/projects/delete-button';

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
  const projects = await readProjects();

  return (
    <div>
      <div className="flex items-center justify-between py-8">
        <h1 className="text-2xl font-medium">Projets</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-lg border border-gray-30 px-4 py-2 text-sm text-white transition-colors hover:border-gray-60 hover:bg-gray-20"
        >
          + Nouveau projet
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-20">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-20 bg-gray-8">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-60">Slug</th>
              <th className="px-4 py-3 font-medium text-gray-60">Titre</th>
              <th className="px-4 py-3 font-medium text-gray-60">Sous-titre</th>
              <th className="px-4 py-3 font-medium text-gray-60">Lien externe</th>
              <th className="px-4 py-3 font-medium text-gray-60">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className="border-b border-gray-20 last:border-0 hover:bg-gray-5">
                <td className="px-4 py-3 font-mono text-xs text-gray-60">{project.slug}</td>
                <td className="px-4 py-3 text-white">{project.title}</td>
                <td className="px-4 py-3 text-gray-90">{project.subtitle}</td>
                <td className="px-4 py-3 text-gray-60">
                  {project.externalUrl ? (
                    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-2 hover:underline">
                      {project.externalUrl}
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/projects/${project.slug}/edit`}
                      className="text-sm text-blue-2 hover:underline"
                    >
                      Modifier
                    </Link>
                    <DeleteButton slug={project.slug} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
