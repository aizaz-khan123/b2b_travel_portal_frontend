import { Metadata } from "next";
import React from "react";

import { getEcommerceSellers } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceSeller } from "@/types/apps/ecommerce";

import { CreateEcommerceShop } from "./CreateShop";
import { CreateEcommerceShopProvider } from "./use-create-shop";

export const metadata: Metadata = {
    title: "Create Shop",
};

const CreateShopPage = async () => {
    let sellers: IEcommerceSeller[] = [];
    const responseSellers = await getEcommerceSellers();

    if (responseSellers.status === "success") {
        sellers = responseSellers.data;
    }

    return (
        <div>
            <PageTitle
                title={"Create Shop"}
                breadCrumbItems={[
                    { label: "Shops", path: routes.apps.ecommerce.shops.index },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-5">
                <CreateEcommerceShopProvider sellers={sellers}>
                    <CreateEcommerceShop />
                </CreateEcommerceShopProvider>
            </div>
        </div>
    );
};

export default CreateShopPage;
