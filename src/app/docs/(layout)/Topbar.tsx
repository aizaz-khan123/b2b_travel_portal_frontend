"use client";

import menuIcon from "@iconify/icons-lucide/menu";

import { SearchButton } from "@/app/(admin)/(layout)/components/SearchButton";
import { Icon } from "@/components/Icon";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Button, Navbar, NavbarCenter, NavbarEnd, NavbarStart } from "@/components/daisyui";
import { useLayoutContext } from "@/contexts/layout";

const Topbar = () => {
    const { hideLeftbar, state } = useLayoutContext();

    return (
        <Navbar className="topbar-wrapper z-10 border border-base-200 px-3">
            <NavbarStart className="gap-3">
                <Button shape="square" size={"sm"} color="ghost" onClick={() => hideLeftbar(!state.leftbar.hide)}>
                    <Icon icon={menuIcon} className="inline-block text-xl" />
                </Button>
                <SearchButton />
            </NavbarStart>
            <NavbarCenter></NavbarCenter>
            <NavbarEnd className="gap-1.5">
                <ThemeToggleButton shape="circle" color="ghost" size="sm" />
            </NavbarEnd>
        </Navbar>
    );
};

export { Topbar };
