import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getEcommerceSellers } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { IEcommerceSeller } from "@/types/apps/ecommerce";

import { EcommerceSellerTable } from "./SellerTable";
import { EcommerceSellersProvider } from "./use-sellers";

export const metadata: Metadata = {
    title: "Sellers - Ecommerce",
};

const EcommerceSellers = async () => {
    let sellers: IEcommerceSeller[] = [];
    const responseSellers = await getEcommerceSellers();

    if (responseSellers.status === "success") {
        sellers = responseSellers.data;
    } else {
        notFound();
    }

    return (
        <div>
            <PageTitle
                title={"Sellers"}
                breadCrumbItems={[{ label: "Ecommerce" }, { label: "Sellers", active: true }]}
            />

            <div className="mt-5">
                <EcommerceSellersProvider sellers={sellers}>
                    <EcommerceSellerTable />
                </EcommerceSellersProvider>
            </div>
        </div>
    );
};

export default EcommerceSellers;
