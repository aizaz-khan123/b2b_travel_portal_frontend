import { IconifyIcon } from "@iconify/react";
export interface IMenuItem {
    key: string;
    label: string;
    icon?: IconifyIcon;
    url?: string;
    isTitle?: boolean;
    roles?: any;
    permissions?: any;
    children?: IMenuItem[];
}
