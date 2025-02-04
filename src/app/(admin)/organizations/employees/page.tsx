import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { SupplierTable } from "./SupplierTable";

export const metadata: Metadata = {
    title: "Suppliers",
};

const Suppliers = async () => {
    return (
        <div>
            <PageTitle
                title={"Suppliers"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Suppliers", active: true }]}
            />
            <div className="mt-5">
                <SupplierTable />
            </div>
        </div>
    );
};

export default Suppliers;
