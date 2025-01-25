import { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";

import { CreateEcommerceSeller } from "./CreateSeller";
import { CreateEcommerceSellerProvider } from "./use-create-seller";

export const metadata: Metadata = {
    title: "Create Seller",
};

const CreateSellerPage = () => {
    return (
        <div>
            <PageTitle
                title={"Create Seller"}
                breadCrumbItems={[
                    { label: "Sellers", path: routes.apps.ecommerce.sellers.index },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-5">
                <CreateEcommerceSellerProvider>
                    <CreateEcommerceSeller />
                </CreateEcommerceSellerProvider>
            </div>
        </div>
    );
};

export default CreateSellerPage;
