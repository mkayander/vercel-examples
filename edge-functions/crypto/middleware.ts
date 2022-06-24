import { NextResponse, NextRequest } from 'next/server'

// ------------------
// Using Crypto with Edge Middleware
// ------------------

export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  const token = crypto.randomUUID()
  const url = new URL(req.url)

  url.pathname = '/api/crypto'
  url.searchParams.set('token', token)

  return NextResponse.redirect(url)
}
