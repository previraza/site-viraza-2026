import { NextResponse } from 'next/server';

import { deleteProject, getProject, updateProject } from '@/lib/projects-store';

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
  }
  return NextResponse.json(project);
}

export async function PUT(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { title, subtitle, description, body: projectBody, externalUrl, externalLabel } = body;

    if (!title) {
      return NextResponse.json({ error: 'title is required.' }, { status: 400 });
    }

    await updateProject(slug, {
      slug,
      title,
      subtitle: subtitle || '',
      description: description || '',
      body: projectBody || '',
      externalUrl: externalUrl || '',
      externalLabel: externalLabel || '',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    await deleteProject(slug);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
