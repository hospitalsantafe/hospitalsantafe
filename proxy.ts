import { NextResponse, type NextRequest } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, type SessionData } from '@/lib/admin/auth';

export async function proxy(request: NextRequest) {
  // Only protect /admin/dashboard routes
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    const response = NextResponse.next();

    // Use Request/Response overload for edge/middleware context
    const session = await getIronSession<SessionData>(request, response, sessionOptions);

    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
