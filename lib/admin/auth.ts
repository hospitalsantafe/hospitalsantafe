import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export interface SessionData {
  isLoggedIn: boolean;
}

// Build a session password that's always ≥32 chars
const basePassword = process.env.ADMIN_PASSWORD ?? 'hsf-dev-change-me';
const SESSION_PASSWORD = (basePassword + '-hospital-santa-fe-session-key-2024').substring(0, Math.max(32, basePassword.length + 36));

export const sessionOptions = {
  password: SESSION_PASSWORD,
  cookieName: 'hsf-admin',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 8, // 8 hours
    sameSite: 'lax' as const,
  },
};

export async function getSession() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  return session;
}
