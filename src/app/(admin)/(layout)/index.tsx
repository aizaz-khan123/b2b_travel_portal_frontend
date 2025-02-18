"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useLayoutContext } from "@/contexts/layout";

import { adminMenuItems } from "./menu";
import { Leftbar } from "./slots/Leftbar";
import { Topbar } from "./slots/Topbar";
import { useSelector } from 'react-redux';

const AdminLayout = ({ children }: { children: any }) => {

    const user = useSelector(((user:any) => user?.persistedReducer?.authSlice?.userDetail));
    const USER_ROLES = user?.role;
    const USER_PERMISSIONS = user?.permissions;
    const PATHNAME = usePathname();

    console.log(PATHNAME);
    const { hideLeftbar, hideMobileLeftbar } = useLayoutContext();

    useEffect(() => {
        hideMobileLeftbar();
    }, [PATHNAME]);

    return (
        <>
            {
                <div className="size-full">
                    <div className="flex overflow-hidden">
                        <Leftbar menuItems={adminMenuItems} userRole={USER_ROLES} userPermissions={USER_PERMISSIONS}/>
                        <div className="main-wrapper overflow-auto">
                            <div className="flex h-full flex-col">
                                {PATHNAME != '/flights/search/result' && <Topbar />}
                                <div className="content-wrapper">{children}</div>
                            </div>
                        </div>
                    </div>
                    <div className="leftbar-backdrop" onClick={() => hideLeftbar()}></div>
                </div>
            }
        </>
    );
};
export default AdminLayout;
