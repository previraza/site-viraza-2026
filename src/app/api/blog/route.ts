import { NextResponse } from 'next/server';
import { listContent, saveContent } from '@/lib/content-store';

export async function GET() {
  const items = await listContent('blog');
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  try {
    const { slug, frontmatter, content } = await request.json();
    await saveContent('blog', slug, frontmatter, content);
    return NextResponse.json({ success: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Erreur inconnue';
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
