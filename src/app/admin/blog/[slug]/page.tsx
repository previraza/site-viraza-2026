'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

interface IBlogItem {
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

export default function EditBlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [item, setItem] = useState<IBlogItem | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((r) => r.json())
      .then((data: IBlogItem) => {
        setItem(data);
        setTitle((data.frontmatter.title as string) || '');
        setDescription((data.frontmatter.description as string) || '');
        setAuthor((data.frontmatter.author as string) || '');
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
      description,
      author,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    const res = await fetch(`/api/blog/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ frontmatter, content }),
    });

    if (res.ok) {
      router.push('/admin/blog');
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
        <div>
          <label className="mb-1 block text-sm text-gray-50">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border border-gray-70 bg-gray-90 px-3 py-2 text-white"
            rows={2}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-sm text-gray-50">Auteur</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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
