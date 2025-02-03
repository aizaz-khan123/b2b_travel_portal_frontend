import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { NewsTable } from "./NewsTable";

export const metadata: Metadata = {
    title: "News & Alerts",
};

const News = async () => {
    return (
        <div>
            <PageTitle
                title={"News & Alerts"}
                breadCrumbItems={[{ label: "Settings" }, { label: "News & Alerts", active: true }]}
            />
            <div className="mt-5">
                <NewsTable />
            </div>
        </div>
    );
};

export default News;
