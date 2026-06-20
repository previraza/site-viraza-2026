'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface IChangelogItem {
  slug: string;
  frontmatter: { title?: string; date?: string; tags?: string[] };
}

export default function AdminChangelogPage() {
  const [items, setItems] = useState<IChangelogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/changelog')
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(slug: string) {
    if (!confirm('Supprimer cette entrée ?')) return;
    const res = await fetch(`/api/changelog/${slug}`, { method: 'DELETE' });
    if (res.ok) {
      setItems((prev) => prev.filter((i) => i.slug !== slug));
      router.refresh();
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Changelog</h1>
        <Link
          href="/admin/changelog/new"
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Nouvelle entrée
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-50">Chargement...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-50">Aucune entrée pour l&rsquo;instant.</p>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-between rounded-md border border-gray-70 bg-gray-90 px-4 py-3"
            >
              <div>
                <Link
                  href={`/admin/changelog/${item.slug}`}
                  className="font-medium text-white hover:underline"
                >
                  {item.frontmatter.title || item.slug}
                </Link>
                <p className="text-xs text-gray-50">{item.frontmatter.date ?? ''}</p>
              </div>
              <button
                onClick={() => handleDelete(item.slug)}
                className="rounded-md bg-red-600 px-3 py-1.5 text-xs text-white hover:bg-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
