import type { NextRequest } from "next/server";
import { NextMiddleware, NextResponse } from "next/server";

import { getAuthCookie } from "@/lib/cookie/auth";
import ProtectedRoutes from "@/lib/routes/ProtectedRoutes";

export const middleware: NextMiddleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  // Skip static assets & API calls
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|ico|webp|ttf|woff|woff2|eot)$/)
  ) {
    return NextResponse.next();
  }

  const loggedInUser = await getAuthCookie();
  const permissions = loggedInUser?.user?.permissions ?? [];

  const route = Object.keys(ProtectedRoutes).find((route) => {
    const regex = new RegExp(`^${route.replace(/:\w+/g, "[^/]+")}$`);
    return regex.test(pathname);
  });

  if (route) {
    const requiredPermissions = ProtectedRoutes[route];
    if (!requiredPermissions.some((perm: any) => permissions.includes(perm))) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard",
    "/flights/:path*",
    "/organizations/:path*",
    "/settings/:path*",
    "/accounts/:path*",
    "/reports/:path*",
    "/notifications",
    "/reservation/:path*",
    "/finance/:path*",
    "/organization/:path*",
  ],
};

// import type { NextRequest } from "next/server";
// import { NextMiddleware, NextResponse } from "next/server";

// import { getAuthCookie } from "@/lib/cookie/auth";
// import { routes } from "@/lib/routes";
// import ProtectedRoutes from "@/lib/routes/ProtectedRoutes";

// export const middleware: NextMiddleware = async (request: NextRequest) => {
//   const { pathname } = request.nextUrl;
//   if (
//     pathname.startsWith("/_next/") ||
//     pathname.startsWith("/api/") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.startsWith("/public/") ||
//     pathname.match(/\.(jpg|jpeg|png|gif|css|js|svg|ico|webp|ttf|woff|woff2|eot)$/)
//   ) {
//     return NextResponse.next();
//   }

//   const loggedInUser = await getAuthCookie();
//   const permissions = loggedInUser?.user?.permissions ?? [];

//   const route = Object.keys(ProtectedRoutes).find((route) => {
//     const regex = new RegExp(`^${route.replace(/:\w+/g, "[^/]+")}$`); // Convert dynamic params to regex
//     return regex.test(pathname);
//   });


//   if (route) {
//     const requiredPermissions = ProtectedRoutes[route];
//     if (!requiredPermissions.some((perm: any) => permissions.includes(perm))) {
//       return NextResponse.redirect(new URL("/unauthorized", request.url));
//     }
//   }
//   //   if (!loggedInUser?.user) {
//   //     if (request.nextUrl.pathname == '/') {
//   //       return NextResponse.next();
//   //     }
//   //     return NextResponse.redirect(
//   //         new URL(`${routes.auth.login}?redirectTo=${request.nextUrl.pathname}`, request.url),
//   //     );
//   //   }
// };

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
