"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Menu, MenuDetails, MenuItem, MenuTitle } from "@/components/daisyui";
import { cn, menuHelper } from "@/helpers";
import { routes } from "@/lib/routes";
import { IMenuItem } from "@/types/layout/admin";

const LeftMenuItem = ({ menuItem, activated }: { menuItem: IMenuItem; activated: Set<string> }) => {
    const { icon, isTitle, label, children, url } = menuItem;

    const selected = activated.has(menuItem.key);

    if (isTitle) {
        return <MenuTitle className="font-semibold">{label}</MenuTitle>;
    }

    if (!children) {
        return (
            <MenuItem className="mb-0.5">
                <Link
                    href={url ?? ""}
                    className={cn({
                        active: selected,
                    })}>
                    <div className="flex items-center gap-2">
                        {icon && <Icon icon={icon} fontSize={18} />}
                        {label}
                    </div>
                </Link>
            </MenuItem>
        );
    }

    return (
        <MenuItem className="mb-0.5">
            <MenuDetails
                open={selected}
                label={
                    <div className="flex items-center gap-2">
                        {icon && <Icon icon={icon} fontSize={18} />}
                        {label}
                    </div>
                }>
                {children.map((item, index) => (
                    <LeftMenuItem menuItem={item} key={index} activated={activated} />
                ))}
            </MenuDetails>
        </MenuItem>
    );
};

const Leftbar = ({ menuItems, userRole }: { menuItems: IMenuItem[], userRole: string }) => {
    const pathname = usePathname();
    const scrollRef = useRef<SimpleBarCore | null>(null);

    const filteredMenu = useMemo(() => {
        const filterItems = (items: IMenuItem[]): IMenuItem[] =>
            items
                .filter(item => !item.roles || item.roles.includes(userRole))
                .map(item => ({
                    ...item,
                    children: item.children ? filterItems(item.children) : undefined,
                }));

        return filterItems(menuItems);
    }, [menuItems, userRole]);

    const activatedParents = useMemo(
        () => new Set(menuHelper.getActivatedItemParentKeys(filteredMenu, pathname)),
        [pathname, filteredMenu],
    );

    useEffect(() => {
        setTimeout(() => {
            const contentElement = scrollRef.current?.getContentElement();
            const scrollElement = scrollRef.current?.getScrollElement();
            if (contentElement) {
                const activatedItem = contentElement.querySelector<HTMLElement>(".active");
                const top = activatedItem?.getBoundingClientRect().top;
                if (activatedItem && scrollElement && top && top !== 0) {
                    scrollElement.scrollTo({ top: scrollElement.scrollTop + top - 300, behavior: "smooth" });
                }
            }
        }, 100);
    }, [activatedParents]);

    return (
        <div className={cn("leftmenu-wrapper")}>
            <Link href={routes.home} className="flex h-16 items-center justify-center">
                <Logo />
            </Link>
            <SimpleBar ref={scrollRef} className="h-[calc(100vh)] lg:h-[calc(100vh)]">
                <Menu className="mb-6">
                    {filteredMenu.map((item, index) => (
                        <LeftMenuItem menuItem={item} key={index} activated={activatedParents} />
                    ))}
                </Menu>
            </SimpleBar>
        </div>
    );
};

export { Leftbar };
