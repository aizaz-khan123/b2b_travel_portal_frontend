import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { getEcommerceCustomer } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceCustomer } from "@/types/apps/ecommerce";

import { EditEcommerceCustomer } from "./EditCustomer";
import { EditEcommerceCustomerProvider } from "./use-edit-customer";

export const metadata: Metadata = {
    title: "Edit Customer",
};

const EditCustomerPage = async ({ params }: { params: { id: string } }) => {
    let customer: IEcommerceCustomer | null = null;
    const rCustomer = await getEcommerceCustomer(Number.parseInt(params.id));

    if (rCustomer.status === "success") {
        customer = rCustomer.data;
    } else {
        notFound();
    }

    return (
        <div>
            <PageTitle
                title={"Edit Customer"}
                breadCrumbItems={[
                    { label: "Customers", path: routes.apps.ecommerce.customers.index },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditEcommerceCustomerProvider customer={customer}>
                    <EditEcommerceCustomer />
                </EditEcommerceCustomerProvider>
            </div>
        </div>
    );
};

export default EditCustomerPage;
