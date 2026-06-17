import { promises as fs } from 'fs';
import path from 'path';

export interface IProject {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  body: string;
  externalUrl?: string;
  externalLabel?: string;
  hasPricing?: boolean;
}

const DATA_FILE = path.join(process.cwd(), 'src/data/projects.json');

export async function getProjects(): Promise<IProject[]> {
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  const data = JSON.parse(raw) as IProject[];
  return data.map((p) => ({
    ...p,
    externalUrl: p.externalUrl || undefined,
    externalLabel: p.externalLabel || undefined,
  }));
}

export async function getProjectBySlug(slug: string): Promise<IProject | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}
