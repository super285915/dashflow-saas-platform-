import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Specify routes that require authentication
const protectedRoutes = ['/dashboard', '/settings']
const authRoutes = ['/auth/login', '/auth/signup', '/auth/reset-password']
const DEFAULT_LOGIN_REDIRECT = '/dashboard'

// Middleware configuration
export const config = {
  matcher: [
    '/dashboard',
    '/settings',
    '/auth/login',
    '/auth/signup',
    '/auth/reset-password'
  ]
}

export default withAuth(
  function middleware(req) {
    const { nextUrl } = req
    const isLoggedIn = !!req.nextauth.token
    
    // Auth routes handling (login, signup pages)
    const isAuthRoute = authRoutes.some(route => nextUrl.pathname.startsWith(route))
    if (isAuthRoute) {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
      }
      return NextResponse.next()
    }

    // Protected routes are handled automatically by withAuth
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl
        // Return true if it's not a protected route or if the user has a token
        return !protectedRoutes.some(route => pathname.startsWith(route)) || !!token
      }
    }
  }
)
