import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ProgressExample from "./ProgressExample";

export const metadata: Metadata = {
    title: "Progress",
};

const ProgressPage = () => {
    return (
        <div>
            <PageTitle
                title={"Progress"}
                breadCrumbItems={[{ label: "Components" }, { label: "Progress", active: true }]}
            />
            <div className="mt-6">
                <ProgressExample />
            </div>
        </div>
    );
};

export default ProgressPage;
