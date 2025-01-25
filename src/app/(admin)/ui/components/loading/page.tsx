import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import LoadingExample from "./LoadingExample";

export const metadata: Metadata = {
    title: "Loading",
};

const LoadingPage = () => {
    return (
        <div>
            <PageTitle
                title={"Loading"}
                breadCrumbItems={[{ label: "Components" }, { label: "Loading", active: true }]}
            />
            <div className="mt-6">
                <LoadingExample />
            </div>
        </div>
    );
};

export default LoadingPage;
