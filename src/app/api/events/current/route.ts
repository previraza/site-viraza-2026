import { NextResponse } from 'next/server';
import { getCurrentEvent } from '@/lib/events/events';

export const runtime = 'nodejs';

export async function GET() {
  const event = getCurrentEvent();
  return NextResponse.json(event);
}
