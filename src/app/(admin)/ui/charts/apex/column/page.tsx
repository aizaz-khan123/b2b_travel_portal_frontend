import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ColumnChartExample from "./ColumnChartExample";

export const metadata: Metadata = {
    title: "Apex Column Charts",
};
const ChartPage = () => {
    return (
        <div>
            <PageTitle
                title={"Column Charts"}
                breadCrumbItems={[{ label: "Apex Charts" }, { label: "Column", active: true }]}
            />
            <div className="mt-6">
                <ColumnChartExample />
            </div>
        </div>
    );
};

export default ChartPage;
