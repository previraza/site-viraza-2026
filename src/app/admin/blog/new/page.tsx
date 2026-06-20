'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';

export default function NewBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('james');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const slug = slugify(title, { lower: true, strict: true });
    const frontmatter = {
      title,
      description,
      author,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      date: new Date().toISOString().split('T')[0],
    };

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, frontmatter, content }),
    });

    if (res.ok) {
      router.push('/admin/blog');
      router.refresh();
    } else {
      const data = await res.json();
      alert(data.error || 'Erreur');
      setSaving(false);
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Nouvel article</h1>
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
            <label className="mb-1 block text-sm text-gray-50">Tags (séparés par virgule)</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full rounded-md border border-gray-70 bg-gray-90 px-3 py-2 text-white"
              placeholder="product, engineering"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-50">
            Contenu (MDX)
          </label>
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
          {saving ? 'Enregistrement...' : 'Publier'}
        </button>
      </form>
    </div>
  );
}
