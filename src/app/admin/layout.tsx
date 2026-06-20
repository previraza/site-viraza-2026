import Link from 'next/link';
import { LogoutButton } from './logout-button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-background text-white">
      <div className="container py-20">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin/projects" className="text-sm text-gray-60 hover:text-white">
              &larr; Admin
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/admin/projects" className="text-gray-60 hover:text-white">
                Projets
              </Link>
              <Link href="/admin/blog" className="text-gray-60 hover:text-white">
                Blog
              </Link>
              <Link href="/admin/changelog" className="text-gray-60 hover:text-white">
                Changelog
              </Link>
              <Link href="/admin/glossary" className="text-gray-60 hover:text-white">
                Glossaire
              </Link>
            </nav>
          </div>
          <LogoutButton />
        </div>
        {children}
      </div>
    </main>
  );
}
