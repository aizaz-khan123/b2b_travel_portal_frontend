"use client";

import avatar1 from "@/assets/images/avatars/1.png";

import bellIcon from "@iconify/icons-lucide/bell";
import logoutIcon from "@iconify/icons-lucide/log-out";
import menuIcon from "@iconify/icons-lucide/menu";
import userIcon from "@iconify/icons-lucide/user";

import { useRouter } from "next/navigation";

import { Icon } from "@/components/Icon";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Navbar,
    NavbarCenter,
    NavbarEnd,
    NavbarStart,
    maskClassesFn,
} from "@/components/daisyui";
import { useLayoutContext } from "@/contexts/layout";
import { routes } from "@/lib/routes";

import { NotificationButton } from "../components/NotificationButton";
import { SearchButton } from "../components/SearchButton";
import { useLogoutMutation } from "@/services/api";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { updateAuthCookie } from "@/lib/cookie/auth";

const Topbar = () => {
    const { hideLeftbar, state } = useLayoutContext();
    const [ logout ] = useLogoutMutation();
    const navigate = useRouter();
    const dispatch = useDispatch();
    const toaster = useToast();

    const onLogout = async () => {
        logout()
            .unwrap()
            .then(async(payload) => {
                toaster.success("Logout successfully...");
                await updateAuthCookie({ user: undefined });
                dispatch(userLogout(null));
                navigate.push(routes.auth.login)
            })
            .catch(async(error) => {
                toaster.success("Logout successfully...");
                await updateAuthCookie({ user: undefined });
                dispatch(userLogout(null));
                navigate.push(routes.auth.login)
            });
    };

    return (
        <Navbar className="topbar-wrapper z-10 border-b border-base-200 px-3">
            <NavbarStart className="gap-3">
                <Button
                    shape="square"
                    color="ghost"
                    size="sm"
                    aria-label="Leftmenu toggle"
                    onClick={() => hideLeftbar(!state.leftbar.hide)}>
                    <Icon icon={menuIcon} className="inline-block" fontSize={20} />
                </Button>
                <SearchButton />
            </NavbarStart>
            <NavbarCenter></NavbarCenter>
            <NavbarEnd className="gap-1.5">
                <ThemeToggleButton shape="circle" color="ghost" size="sm" />

                <NotificationButton />
                <Dropdown vertical="bottom" end>
                    <DropdownToggle
                        className="btn btn-ghost rounded-btn px-1.5 hover:bg-base-content/20"
                        button={false}>
                        <div className="flex items-center gap-2">
                            <Avatar
                                src={avatar1.src}
                                size={30}
                                alt="Avatar"
                                innerClassName={maskClassesFn({ variant: "squircle" })}></Avatar>
                            <div className="flex flex-col items-start">
                                <p className="text-sm/none">Deep</p>
                                <p className="mt-1 text-xs/none text-primary">Edit</p>
                            </div>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu className="mt-4 w-52">
                        <DropdownItem anchor={false}>
                            <div>
                                <Icon icon={userIcon} fontSize={16} /> My Profile
                            </div>
                        </DropdownItem>
                        <DropdownItem anchor={false}>
                            <div>
                                <Icon icon={bellIcon} fontSize={16} /> Notification
                            </div>
                        </DropdownItem>
                        <hr className="-mx-2 my-1 border-base-content/10" />
                        <DropdownItem anchor={false}>
                            <div className="text-error" onClick={onLogout}>
                                <Icon icon={logoutIcon} fontSize={16} />
                                Logout
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarEnd>
        </Navbar>
    );
};

export { Topbar };
