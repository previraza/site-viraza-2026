export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-background text-white">
      <div className="container py-20">
        <a href="/admin/projects" className="text-sm text-gray-60 hover:text-white">
          &larr; Admin
        </a>
        {children}
      </div>
    </main>
  );
}
