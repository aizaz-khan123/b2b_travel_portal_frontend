import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import FileExample from "./FileExample";

export const metadata: Metadata = {
    title: "File Input - Forms",
};

const FileInputPage = () => {
    return (
        <div>
            <PageTitle
                title={"File Input"}
                breadCrumbItems={[{ label: "Forms" }, { label: "File Input", active: true }]}
            />
            <div className="mt-6">
                <FileExample />
            </div>
        </div>
    );
};

export default FileInputPage;
