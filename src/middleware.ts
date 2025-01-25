import type { NextRequest } from "next/server";
import { NextMiddleware, NextResponse } from "next/server";

import { getAuthCookie } from "@/lib/cookie/auth";
import { routes } from "@/lib/routes";

export const middleware: NextMiddleware = async (request: NextRequest) => {
    const loggedInUser = await getAuthCookie();
    if (!loggedInUser?.user) {
        return NextResponse.redirect(
            new URL(`${routes.auth.login}?redirectTo=${request.nextUrl.pathname}`, request.url),
        );
    }
};

export const config = {
    matcher: ["/dashboards/:path*", "/apps/:path*", "/ui/:path*"],
};
