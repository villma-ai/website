import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const showTeaser = process.env.NEXT_PUBLIC_SHOW_TEASER === 'true';
  const { pathname } = request.nextUrl;

  // Allow teaser and privacy pages, static files, and API routes
  if (
    !showTeaser ||
    pathname.startsWith('/teaser') ||
    pathname.startsWith('/privacy') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap') ||
    pathname.match(/\.[a-zA-Z0-9]+$/) // static files
  ) {
    return NextResponse.next();
  }

  // Redirect all other requests to /teaser
  const url = request.nextUrl.clone();
  url.pathname = '/teaser';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon|robots|sitemap|teaser|privacy).*)'],
}; 