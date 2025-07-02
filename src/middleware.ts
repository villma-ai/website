import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow teaser and privacy pages, static files, and API routes
  if (
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

  // Fetch the showTeaser setting from the API route
  let showTeaser = false;
  try {
    const res = await fetch(`${request.nextUrl.origin}/api/teaser-gate`, { next: { revalidate: 0 } });
    if (res.ok) {
      const data = await res.json();
      showTeaser = data.showTeaser === true;
    }
  } catch {
    // If the API fails, default to not showing the teaser
    showTeaser = false;
  }

  if (!showTeaser) {
    return NextResponse.next();
  }

  // Redirect all other requests to /teaser
  const url = request.nextUrl.clone();
  url.pathname = '/teaser';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon|robots|sitemap|teaser|privacy).*)']
};
