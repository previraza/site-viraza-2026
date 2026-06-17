import { NextResponse } from 'next/server';

import { createProject, readProjects } from '@/lib/projects-store';

export async function GET() {
  const projects = await readProjects();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, title, subtitle, description, body: projectBody, externalUrl, externalLabel } = body;

    if (!slug || !title) {
      return NextResponse.json({ error: 'slug and title are required.' }, { status: 400 });
    }

    await createProject({
      slug,
      title,
      subtitle: subtitle || '',
      description: description || '',
      body: projectBody || '',
      externalUrl: externalUrl || '',
      externalLabel: externalLabel || '',
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
