import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { AirlineTable } from "./AirlineTable";

export const metadata: Metadata = {
    title: "Airlines",
};

const Airlines = async () => {
    return (
        <div>
            <PageTitle
                title={"Airlines"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Airlines", active: true }]}
            />
            <div className="mt-5">
                <AirlineTable />
            </div>
        </div>
    );
};

export default Airlines;
