import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { getEcommerceSellers, getEcommerceShop } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceSeller, IEcommerceShop } from "@/types/apps/ecommerce";

import { EditEcommerceShop } from "./EditShop";
import { EditEcommerceShopProvider } from "./use-edit-shop";

export const metadata: Metadata = {
    title: "Edit Shop",
};

const EditShopPage = async ({ params }: { params: { id: string } }) => {
    let shop: IEcommerceShop | null = null,
        sellers: IEcommerceSeller[] = [];

    const [rShop, rSellers] = await Promise.allSettled([
        getEcommerceShop(Number.parseInt(params.id)),
        getEcommerceSellers(),
    ]);

    if (rShop.status === "fulfilled" && rShop.value.status === "success") {
        shop = rShop.value.data;
    } else {
        return notFound();
    }

    if (rSellers.status === "fulfilled" && rSellers.value.status === "success") {
        sellers = rSellers.value.data;
    }

    return (
        <div>
            <PageTitle
                title={"Edit Shop"}
                breadCrumbItems={[
                    { label: "Shops", path: routes.apps.ecommerce.shops.index },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                {shop && (
                    <EditEcommerceShopProvider sellers={sellers} shop={shop}>
                        <EditEcommerceShop />
                    </EditEcommerceShopProvider>
                )}
            </div>
        </div>
    );
};

export default EditShopPage;
