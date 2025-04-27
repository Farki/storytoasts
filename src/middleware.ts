import { NextRequest, NextResponse } from "next/server";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import arcjet, { detectBot, shield, slidingWindow } from "@/lib/arcjet";
import ip from "@arcjet/ip";

const privatePaths = Object.values(PRIVATE_ROUTES).map(String);
const publicPaths = Object.values(PUBLIC_ROUTES).map(String);

const aj = arcjet
  .withRule(
    // Shield detects suspicious behavior, such as SQL injection and cross-site scripting attacks.
    shield({
      mode: "LIVE",
    }),
  )
  .withRule(
    // Rate limit
    slidingWindow({
      mode: "LIVE",
      interval: 10,
      max: 20,
    }),
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
  );

export async function middleware(req: NextRequest) {
  const userIp = process.env.NODE_ENV === "development" ? "127.0.0.1" : ip(req);
  // @ts-ignore
  const decision = await aj.protect(req, { fingerprint: userIp });

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
    } else {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }
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
