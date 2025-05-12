import { NextResponse } from "next/server";
import { auth } from "./app/api/auth/[...nextauth]/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isAuthPage = 
    nextUrl.pathname.startsWith('/auth/signin') || 
    nextUrl.pathname.startsWith('/auth/signup');

  // Redirect authenticated users away from auth pages
  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL('/collections', nextUrl));
  }

  // Protect specific paths
  const protectedPaths = [
    '/collections/new',
    '/profile',
  ];

  const isProtectedPath = protectedPaths.some(path => 
    nextUrl.pathname.startsWith(path)
  );

  // Protect specific collection operations (new, edit)
  const isProtectedCollectionPath = 
    nextUrl.pathname.match(/\/collections\/[^/]+\/new/) ||
    nextUrl.pathname.match(/\/collections\/[^/]+\/edit/);

  if (!isLoggedIn && (isProtectedPath || isProtectedCollectionPath)) {
    const redirectUrl = new URL('/auth/signin', nextUrl);
    redirectUrl.searchParams.set('callbackUrl', nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
})

// Optionally configure paths that don't require authentication
export const config = {
  matcher: [
    '/collections/:path*',
    '/profile/:path*',
    '/auth/:path*'
  ]
} 