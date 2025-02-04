import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { MarginTable } from "./MarginTable";

export const metadata: Metadata = {
    title: "Airline Margins & Commission",
};

const MarginPage = async () => {
    return (
        <div>
            <PageTitle
                title={"Airline Margins & Commission"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Airline Margins & Commission", active: true }]}
            />
            <div className="mt-5">
                <MarginTable />
            </div>
        </div>
    );
};

export default MarginPage;