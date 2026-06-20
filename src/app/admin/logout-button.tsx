'use client';

import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-md border border-gray-70 px-3 py-1.5 text-xs text-gray-50 transition-colors hover:border-red-500 hover:text-red-400"
    >
      Déconnexion
    </button>
  );
}
