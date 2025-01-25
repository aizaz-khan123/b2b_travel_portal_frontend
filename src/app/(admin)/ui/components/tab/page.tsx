import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import TabExample from "./TabExample";

export const metadata: Metadata = {
    title: "Tab",
};

const TabPage = () => {
    return (
        <div>
            <PageTitle title={"Tab"} breadCrumbItems={[{ label: "Components" }, { label: "Tab", active: true }]} />
            <div className="mt-6">
                <TabExample />
            </div>
        </div>
    );
};

export default TabPage;
