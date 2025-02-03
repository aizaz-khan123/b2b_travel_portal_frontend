import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateSupplier } from "./CreateSupplier";

export const metadata: Metadata = {
    title: "Create Supplier",
};

const CreateSupplierPage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create Supplier"}
                breadCrumbItems={[
                    { label: "Suppliers", path: routes.apps.settings.suppliers },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateSupplier />
            </div>
        </div>
    );
};

export default CreateSupplierPage;
