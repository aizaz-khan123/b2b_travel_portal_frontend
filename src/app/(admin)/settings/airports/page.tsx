import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { AirportTable } from "./AirportTable";

export const metadata: Metadata = {
    title: "Airports",
};

const Airlines = async () => {
    return (
        <div>
            <PageTitle
                title={"Airports"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Airports", active: true }]}
            />
            <div className="mt-5">
                <AirportTable />
            </div>
        </div>
    );
};

export default Airlines;
