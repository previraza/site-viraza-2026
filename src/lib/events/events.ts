import { readFileSync } from 'fs';
import { join } from 'path';

export interface IEvent {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  description: string;
  body?: string;
}

let _events: IEvent[] | null = null;

function loadEvents(): IEvent[] {
  if (_events) return _events;
  const filePath = join(process.cwd(), 'src/data/events.json');
  const raw = readFileSync(filePath, 'utf-8');
  _events = JSON.parse(raw) as IEvent[];
  return _events;
}

export function getAllEvents(): IEvent[] {
  return loadEvents().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getEventBySlug(slug: string): IEvent | null {
  return loadEvents().find((e) => e.slug === slug) ?? null;
}

export function getCurrentEvent(): IEvent | null {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return (
    loadEvents().find((event) => {
      const start = new Date(event.date);
      const end = event.endDate ? new Date(event.endDate) : start;
      const eventMonth = start.getMonth();
      const eventYear = start.getFullYear();

      const startsThisMonth = eventMonth === currentMonth && eventYear === currentYear;
      const endsThisMonth = end.getMonth() === currentMonth && end.getFullYear() === currentYear;
      const isOngoing = start <= now && end >= now;

      return startsThisMonth || endsThisMonth || isOngoing;
    }) ?? null
  );
}
