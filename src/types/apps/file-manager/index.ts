import { IconifyIcon } from "@iconify/react";

import { IColor } from "@/types/theme";

export type IFileManagerCategoryItem = {
    icon: IconifyIcon;
    name: string;
    files: number;
    size: string;
    color: IColor;
    percent: number;
};

export type IFileManagerFile = {
    id: number;
    name: string;
    owner_name: string;
    icon: IconifyIcon;
    size: number;
    lastModifiedAt: Date;
    shared_with: number | "private" | "public";
};

export type IFileManagerFolder = {
    name: string;
    files: number;
    icon: IconifyIcon;
    color: IColor;
};

export type IFileManagerProviderStat = {
    image: string;
    name: string;
    total: number;
    used: number;
    color: IColor;
};

export type IFileManagerUploadProcess = {
    name: string;
    percent: number;
    size: number;
    state: "play" | "pause";
};

export type IFileManagerData = {
    files: IFileManagerFile[];
    folders: IFileManagerFolder[];
    uploadProcesses: IFileManagerUploadProcess[];
    stats: IFileManagerProviderStat[];
    categories: IFileManagerCategoryItem[];
};
