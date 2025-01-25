import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import BarChartExample from "./BarChartExample";

export const metadata: Metadata = {
    title: "Apex Bar Charts",
};
const ChartPage = () => {
    return (
        <div>
            <PageTitle
                title={"Bar Charts"}
                breadCrumbItems={[{ label: "Apex Charts" }, { label: "Bar", active: true }]}
            />
            <div className="mt-6">
                <BarChartExample />
            </div>
        </div>
    );
};

export default ChartPage;
