import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { CountryTable } from "./CountryTable";

export const metadata: Metadata = {
    title: "Countries",
};

const Airlines = async () => {
    return (
        <div>
            <PageTitle
                title={"Countries"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Countries", active: true }]}
            />
            <div className="mt-5">
                <CountryTable />
            </div>
        </div>
    );
};

export default Airlines;
