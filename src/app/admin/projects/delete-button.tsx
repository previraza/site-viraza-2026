'use client';

import { useRouter } from 'next/navigation';

export function DeleteButton({ slug }: { slug: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm('Supprimer ce projet ?')) return;

    const res = await fetch(`/api/projects/${slug}`, { method: 'DELETE' });

    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      alert(data.error || 'Erreur lors de la suppression');
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-md bg-red-600 px-3 py-1.5 text-xs text-white transition-colors hover:bg-red-700"
    >
      Supprimer
    </button>
  );
}
