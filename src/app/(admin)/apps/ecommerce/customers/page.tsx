import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getEcommerceCustomers } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { IEcommerceCustomer } from "@/types/apps/ecommerce";

import { CustomerTable } from "./CustomerTable";
import { EcommerceCustomersProvider } from "./use-customers";

export const metadata: Metadata = {
    title: "Customers - Ecommerce",
};

const EcommerceCustomers = async () => {
    let customers: IEcommerceCustomer[] = [];
    const rCustomers = await getEcommerceCustomers();

    if (rCustomers.status === "success") {
        customers = rCustomers.data;
    } else {
        notFound();
    }

    return (
        <div>
            <PageTitle
                title={"Customers"}
                breadCrumbItems={[{ label: "Ecommerce" }, { label: "Customers", active: true }]}
            />
            <div className="mt-5">
                <EcommerceCustomersProvider customers={customers}>
                    <CustomerTable />
                </EcommerceCustomersProvider>
            </div>
        </div>
    );
};

export default EcommerceCustomers;
