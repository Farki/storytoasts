import { NextRequest, NextResponse } from "next/server";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";

const privatePaths = Object.values(PRIVATE_ROUTES).map(String);
const publicPaths = Object.values(PUBLIC_ROUTES).map(String);

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const path = nextUrl.pathname;
  const session = cookies.get("authjs.session-token");
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    nextUrl.pathname = PUBLIC_ROUTES.Maintenance;
    return NextResponse.rewrite(nextUrl);
  }

  const isPrivateRoute = privatePaths.includes(path);
  const isPublicRoute = publicPaths.includes(path);

  if (isPrivateRoute && !session) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES.SignIn, nextUrl));
  }

  if (isPublicRoute && session && !path.startsWith(PRIVATE_ROUTES.Dashboard)) {
    return NextResponse.redirect(new URL(PRIVATE_ROUTES.Dashboard, nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
