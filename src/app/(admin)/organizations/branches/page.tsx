import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { BranchTable } from "./BranchTable";

export const metadata: Metadata = {
    title: "Branches",
};

const Branches = async () => {
    return (
        <div>
            <PageTitle
                title={"Branches"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Branches", active: true }]}
            />
            <div className="mt-5">
                <BranchTable />
            </div>
        </div>
    );
};

export default Branches;
