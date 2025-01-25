"use client";

import { LayoutContextProvider } from "@/contexts/layout";

import AdminLayout from "./(layout)";

const Layout = ({ children }: { children: any }) => {
    return (
        <LayoutContextProvider>
            <AdminLayout>{children}</AdminLayout>
        </LayoutContextProvider>
    );
};

export default Layout;
