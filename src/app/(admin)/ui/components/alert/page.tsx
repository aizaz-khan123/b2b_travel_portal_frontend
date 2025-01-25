import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import AlertExample from "./AlertExample";

export const metadata: Metadata = {
    title: "Alert",
};

const AlertPage = () => {
    return (
        <div>
            <PageTitle title={"Alert"} breadCrumbItems={[{ label: "Components" }, { label: "Alert", active: true }]} />
            <div className="mt-6">
                <AlertExample />
            </div>
        </div>
    );
};

export default AlertPage;
