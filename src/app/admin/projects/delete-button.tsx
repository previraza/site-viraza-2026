'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function DeleteButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm('Supprimer ce projet ?')) return;
    setLoading(true);
    const res = await fetch(`/api/projects/${slug}`, { method: 'DELETE' });
    if (res.ok) {
      router.refresh();
    } else {
      alert('Erreur lors de la suppression.');
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-red-dot hover:underline disabled:opacity-50"
    >
      {loading ? 'Suppression...' : 'Supprimer'}
    </button>
  );
}
