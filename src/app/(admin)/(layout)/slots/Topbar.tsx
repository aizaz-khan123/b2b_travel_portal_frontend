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
import { userLogout } from "@/redux/authSlice";
import { useState } from "react";

const Topbar = () => {
  const { hideLeftbar, state } = useLayoutContext();
  const [logout] = useLogoutMutation();
  const navigate = useRouter();
  const dispatch = useDispatch();
  const toaster = useToast();
  const [open, setOpen] = useState(false);

  const onLogout = async () => {
    logout({})
      .unwrap()
      .then(async (payload) => {
        toaster.success(payload.message);
        await Promise.allSettled([
          updateAuthCookie({ user: undefined }),
          dispatch(userLogout()),
        ]);
        navigate.push(routes.auth.login);
      })
      .catch(async (error) => {
        toaster.success("Logout successfully...");
        await updateAuthCookie({ user: undefined });
        dispatch(userLogout());
        navigate.push(routes.auth.login);
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
          onClick={() => hideLeftbar(!state.leftbar.hide)}
        >
          <Icon icon={menuIcon} className="inline-block" fontSize={20} />
        </Button>
        <SearchButton />
      </NavbarStart>
      <NavbarCenter></NavbarCenter>
      <NavbarEnd className="gap-1.5">
        {/* <ThemeToggleButton shape="circle" color="ghost" size="sm" /> */}

        <div className="w-84">
      <div className="relative inline-block">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 border border-[#3E5EFF] text-[#3E5EFF] rounded-md bg-blue-50 hover:bg-blue-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#3E5EFF]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 4v6h-6"></path>
            <path d="M1 20v-6h6"></path>
            <path d="M3.51 9a9 9 0 0 1 14.85-3L23 10"></path>
            <path d="M20.49 15a9 9 0 0 1-14.85 3L1 14"></path>
          </svg>
          <span className="font-bold text-md">PKR 2,333,854.51</span>
        </button>

        <div
          className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
            open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 3
            </li>
          </ul>
        </div>
      </div>
    </div>
       

        {/* <NotificationButton /> */}
        <Dropdown vertical="bottom" end>
          <DropdownToggle
            className="btn btn-ghost rounded-btn px-1.5 hover:bg-base-content/20"
            button={false}
          >
            <div className="flex items-center gap-2">
              <Avatar
                src={avatar1.src}
                size={30}
                alt="Avatar"
                innerClassName={maskClassesFn({ variant: "squircle" })}
              ></Avatar>
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
