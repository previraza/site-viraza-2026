import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllEvents, getEventBySlug } from '@/lib/events/events';
import { getMetadata } from '@/lib/get-metadata';
import { Link } from '@/components/ui/link';

export async function generateStaticParams() {
  return getAllEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return getMetadata({ title: event.title });
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const startDate = new Date(event.date);

  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <Link href="/evenements" className="mb-8 inline-flex text-sm text-gray-40 hover:text-foreground">
        &larr; Retour aux événements
      </Link>
      <article className="prose-custom">
        <time className="text-sm text-gray-40">
          {startDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{event.title}</h1>
        <p className="mt-4 text-lg text-gray-40">{event.description}</p>
        {event.body && (
          <div className="mt-8 whitespace-pre-line text-base leading-relaxed">
            {event.body}
          </div>
        )}
      </article>
    </main>
  );
}
