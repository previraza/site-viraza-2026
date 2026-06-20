import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'node:crypto';

const SESSION_COOKIE = 'admin_session';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

function getSecret(): string {
  return process.env.ADMIN_PASSWORD || 'fallback-dev-only';
}

function sign(payload: string): string {
  const hmac = createHmac('sha256', getSecret());
  hmac.update(payload);
  return hmac.digest('hex');
}

function pack(value: string): string {
  const payload = `${value}.${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

function unpack(token: string): string | null {
  const lastDot = token.lastIndexOf('.');
  if (lastDot === -1) return null;

  const payload = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  const expectedSig = sign(payload);

  if (signature.length !== expectedSig.length) return null;

  try {
    const valid = timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));
    if (!valid) return null;
  } catch {
    return null;
  }

  const secondDot = payload.lastIndexOf('.');
  const createdAt = Number(payload.slice(secondDot + 1));
  if (Date.now() - createdAt > SESSION_DURATION_MS) return null;

  return payload.slice(0, payload.indexOf('.'));
}

export async function createSession(): Promise<void> {
  const value = pack('admin');
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

export async function verifySession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return false;
    return unpack(token) === 'admin';
  } catch {
    return false;
  }
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
