import type { NextRequest } from "next/server";
import { NextMiddleware, NextResponse } from "next/server";

import { getAuthCookie } from "@/lib/cookie/auth";
import { routes } from "@/lib/routes";

export const middleware: NextMiddleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/public/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|ico|webp|ttf|woff|woff2|eot)$/)
  ) {
    return NextResponse.next();
  }

  const loggedInUser = await getAuthCookie();

  if (!loggedInUser?.user) {
    if (request.nextUrl.pathname == '/') {
      return NextResponse.next();
    }
    return NextResponse.redirect(
        new URL(`${routes.auth.login}?redirectTo=${request.nextUrl.pathname}`, request.url),
    );
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
