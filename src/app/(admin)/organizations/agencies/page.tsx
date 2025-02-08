import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { AgencyTable } from "./AgencyTable";

export const metadata: Metadata = {
    title: "Agencies",
};

const Suppliers = async () => {
    return (
        <div>
            <PageTitle
                title={"Agencies"}
                breadCrumbItems={[{ label: "Organizations" }, { label: "Agencies", active: true }]}
            />
            <div className="mt-5">
                <AgencyTable />
            </div>
        </div>
    );
};

export default Suppliers;
