import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ChartExample from "./AreaChartExample";

export const metadata: Metadata = {
    title: "Apex Area Charts",
};
const ChartPage = () => {
    return (
        <div>
            <PageTitle
                title={"Area Charts"}
                breadCrumbItems={[{ label: "Apex Charts" }, { label: "Area", active: true }]}
            />

            <div className="mt-6">
                <ChartExample />
            </div>
        </div>
    );
};

export default ChartPage;
