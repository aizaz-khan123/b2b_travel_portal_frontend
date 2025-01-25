"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { Leftbar } from "@/app/(admin)/(layout)/slots/Leftbar";
import { useLayoutContext } from "@/contexts/layout";

import { Topbar } from "./Topbar";
import "./docs.css";
import { docMenuItems } from "./menu";

const DocLayout = ({ children }: { children: any }) => {
    const pathname = usePathname();

    const {
        state: { leftbar },
        hideLeftbar,
        hideMobileLeftbar,
    } = useLayoutContext();

    useEffect(() => {
        hideMobileLeftbar();
    }, [pathname]);

    return (
        <div className="size-full">
            <div className="flex overflow-hidden">
                <Leftbar menuItems={docMenuItems} />
                <div className="main-wrapper overflow-auto">
                    <div className="flex h-full flex-col">
                        <Topbar />
                        <div className="content-wrapper">{children}</div>
                    </div>
                </div>
            </div>
            <div className="leftbar-backdrop" onClick={() => hideLeftbar()}></div>
        </div>
    );
};

export { DocLayout };
