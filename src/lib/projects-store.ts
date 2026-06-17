import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/projects.json');

export interface IProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  body: string;
  externalUrl: string;
  externalLabel: string;
}

export async function readProjects(): Promise<IProjectData[]> {
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(raw) as IProjectData[];
}

export async function writeProjects(projects: IProjectData[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2), 'utf-8');
}

export async function getProject(slug: string): Promise<IProjectData | undefined> {
  const projects = await readProjects();
  return projects.find((p) => p.slug === slug);
}

export async function createProject(data: IProjectData): Promise<void> {
  const projects = await readProjects();
  if (projects.some((p) => p.slug === data.slug)) {
    throw new Error(`A project with slug "${data.slug}" already exists.`);
  }
  projects.push(data);
  await writeProjects(projects);
}

export async function updateProject(slug: string, data: IProjectData): Promise<void> {
  const projects = await readProjects();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) throw new Error(`Project "${slug}" not found.`);
  projects[idx] = data;
  await writeProjects(projects);
}

export async function deleteProject(slug: string): Promise<void> {
  const projects = await readProjects();
  const filtered = projects.filter((p) => p.slug !== slug);
  if (filtered.length === projects.length) {
    throw new Error(`Project "${slug}" not found.`);
  }
  await writeProjects(filtered);
}
