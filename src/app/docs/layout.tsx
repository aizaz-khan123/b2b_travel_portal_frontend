"use client";

import { LayoutContextProvider } from "@/contexts/layout";

import { DocLayout } from "./(layout)";

const Layout = ({ children }: { children: any }) => {
    return (
        <LayoutContextProvider>
            <DocLayout>{children}</DocLayout>
        </LayoutContextProvider>
    );
};

export default Layout;
