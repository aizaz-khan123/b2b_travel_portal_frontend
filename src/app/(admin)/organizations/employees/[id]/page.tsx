import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { EditSupplier } from "./EditSupplier";

export const metadata: Metadata = {
    title: "Edit Supplier",
};

const EditSupplierPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <PageTitle
                title={"Edit Supplier"}
                breadCrumbItems={[
                    { label: "Suppliers", path: routes.apps.settings.suppliers },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditSupplier supplierId={params.id} />
            </div>
        </div>
    );
};

export default EditSupplierPage;
