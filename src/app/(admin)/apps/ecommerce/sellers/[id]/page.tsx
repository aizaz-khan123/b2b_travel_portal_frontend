import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { getEcommerceSeller } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceSeller } from "@/types/apps/ecommerce";

import { EditEcommerceSeller } from "./EditSeller";
import { EditEcommerceSellerProvider } from "./use-edit-seller";

export const metadata: Metadata = {
    title: "Edit Seller",
};

const EditSellerPage = async ({ params }: { params: { id: string } }) => {
    let seller: IEcommerceSeller | null = null;
    const rSellers = await getEcommerceSeller(Number.parseInt(params.id));

    if (rSellers.status === "success") {
        seller = rSellers.data;
    } else {
        notFound();
    }
    return (
        <div>
            <PageTitle
                title={"Edit Seller"}
                breadCrumbItems={[
                    { label: "Sellers", path: routes.apps.ecommerce.sellers.index },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditEcommerceSellerProvider seller={seller}>
                    <EditEcommerceSeller />
                </EditEcommerceSellerProvider>
            </div>
        </div>
    );
};

export default EditSellerPage;
