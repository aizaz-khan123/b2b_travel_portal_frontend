import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import PieChartExample from "./PieChartExample";

export const metadata: Metadata = {
    title: "Apex Pie Charts",
};
const ChartPage = () => {
    return (
        <div>
            <PageTitle
                title={"Pie Charts"}
                breadCrumbItems={[{ label: "Apex Charts" }, { label: "Pie", active: true }]}
            />
            <div className="mt-6">
                <PieChartExample />
            </div>
        </div>
    );
};

export default ChartPage;
