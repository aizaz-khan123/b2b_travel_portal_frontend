import "@/assets/css/main.css";

import { type Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { type ReactNode } from "react";

import AppProvider from "@/app/AppProvider";

export const metadata: Metadata = {
    title: {
        template: "Nexus - %s ",
        default: "",
    },
    description: "It's an admin & client dashboard. DaisyUI React Admin",
    icons: {
        icon: [
            {
                url: "/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const primary = "oklch(var(--p))";

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </head>
            <body>
                <NextTopLoader height={1} showSpinner={false} color={primary} />
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
