import { Metadata } from 'next';
import { getAllEvents } from '@/lib/events/events';
import { getMetadata } from '@/lib/get-metadata';
import { Link } from '@/components/ui/link';

export const metadata: Metadata = getMetadata({ title: 'Événements' });

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Événements</h1>
      <p className="mt-2 text-lg text-gray-40">
        Découvrez nos prochains événements et webinaires.
      </p>
      <div className="mt-12 grid gap-8">
        {events.length === 0 && (
          <p className="text-gray-40">Aucun événement à venir pour le moment.</p>
        )}
        {events.map((event) => {
          const startDate = new Date(event.date);
          return (
            <Link
              key={event.slug}
              href={`/evenements/${event.slug}`}
              className="group block rounded-lg border p-6 transition-colors hover:border-foreground/30"
            >
              <time className="text-sm text-gray-40">
                {startDate.toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="mt-2 text-xl font-semibold tracking-tight group-hover:underline">
                {event.title}
              </h2>
              <p className="mt-2 text-gray-40">{event.description}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
