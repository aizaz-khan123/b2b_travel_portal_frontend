import type { Metadata } from "next";

import { getFileManagerData } from "@/actions/apps/file-manager";
import { IFileManagerData } from "@/types/apps/file-manager";

import { FileManagerApp } from "./FileManagerApp";
import { FileManagerProvider } from "./use-file-manager";

export const metadata: Metadata = {
    title: "File Manager",
};

const FileApp = async () => {
    const response = await getFileManagerData();
    let data: IFileManagerData | null = null;
    if (response.status === "success") {
        data = response.data;
    }
    return (
        <>
            {data && (
                <FileManagerProvider data={data}>
                    <FileManagerApp />
                </FileManagerProvider>
            )}
        </>
    );
};

export default FileApp;
