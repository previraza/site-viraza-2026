'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface IChangelogItem {
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

export default function EditChangelogPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [item, setItem] = useState<IChangelogItem | null>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/changelog/${slug}`)
      .then((r) => r.json())
      .then((data: IChangelogItem) => {
        setItem(data);
        setTitle((data.frontmatter.title as string) || '');
        setDate((data.frontmatter.date as string) || '');
        setTags(((data.frontmatter.tags as string[]) || []).join(', '));
        setContent(data.content);
      });
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const frontmatter = {
      ...item?.frontmatter,
      title,
      date,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    const res = await fetch(`/api/changelog/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ frontmatter, content }),
    });

    if (res.ok) {
      router.push('/admin/changelog');
      router.refresh();
    } else {
      alert('Erreur lors de la sauvegarde');
      setSaving(false);
    }
  }

  if (!item) return <p className="text-gray-50">Chargement...</p>;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Modifier &mdash; {slug}</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-50">Titre</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-70 bg-gray-90 px-3 py-2 text-white"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-sm text-gray-50">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-gray-70 bg-gray-90 px-3 py-2 text-white"
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-sm text-gray-50">Tags</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full rounded-md border border-gray-70 bg-gray-90 px-3 py-2 text-white"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-50">Contenu (MDX)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-md border border-gray-70 bg-gray-90 px-3 py-2 font-mono text-sm text-white"
            rows={15}
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
        >
          {saving ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </form>
    </div>
  );
}
