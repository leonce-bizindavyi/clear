import { NextResponse } from 'next/server'
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const url = new URL(request.url);
  console.log(url)
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}