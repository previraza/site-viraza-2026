import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { verifySession } from '@/lib/auth';

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

type ContentDir = 'blog' | 'changelog';

export interface IContentItem {
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

export async function listContent(dir: ContentDir): Promise<IContentItem[]> {
  const dirPath = path.join(CONTENT_DIR, dir);
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const items: IContentItem[] = [];

  for (const entry of entries) {
    if (!entry.name.endsWith('.mdx')) continue;
    const slug = entry.name.replace(/\.mdx$/, '');
    const filePath = path.join(dirPath, entry.name);
    const raw = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(raw);
    items.push({ slug, frontmatter: data as Record<string, unknown>, content: raw });
  }

  items.sort((a, b) => {
    const da = a.frontmatter.date || a.frontmatter.date;
    const db = b.frontmatter.date || b.frontmatter.date;
    return String(db).localeCompare(String(da));
  });

  return items;
}

export async function getContent(dir: ContentDir, slug: string): Promise<IContentItem | null> {
  const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(raw);
    return { slug, frontmatter: data as Record<string, unknown>, content };
  } catch {
    return null;
  }
}

export async function saveContent(
  dir: ContentDir,
  slug: string,
  frontmatter: Record<string, unknown>,
  content: string,
): Promise<void> {
  const authed = await verifySession();
  if (!authed) throw new Error('Non authentifié');

  const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  const raw = matter.stringify(content, frontmatter);
  await fs.writeFile(filePath, raw, 'utf-8');
}

export async function deleteContent(dir: ContentDir, slug: string): Promise<void> {
  const authed = await verifySession();
  if (!authed) throw new Error('Non authentifié');

  const filePath = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  await fs.unlink(filePath);
}
