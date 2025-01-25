import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import LineChartExample from "./LineChartExample";

export const metadata: Metadata = {
    title: "Apex Line Charts",
};
const ChartPage = () => {
    return (
        <div>
            <PageTitle
                title={"Line Charts"}
                breadCrumbItems={[{ label: "Apex Charts" }, { label: "Line", active: true }]}
            />
            <div className="mt-6">
                <LineChartExample />
            </div>
        </div>
    );
};

export default ChartPage;
