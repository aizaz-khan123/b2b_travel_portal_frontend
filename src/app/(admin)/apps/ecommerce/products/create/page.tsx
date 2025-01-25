import { Metadata } from "next";
import React from "react";

import { getProductCategories } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceProductCategory } from "@/types/apps/ecommerce";

import { CreateEcommerceProduct } from "./CreateProduct";
import { CreateEcommerceProductProvider } from "./use-create-product";

export const metadata: Metadata = {
    title: "Create Product",
};

const CreateProductPage = async () => {
    let productCategories: IEcommerceProductCategory[] = [];

    const rProductCategory = await getProductCategories();

    if (rProductCategory.status === "success") {
        productCategories = rProductCategory.data;
    }

    return (
        <div>
            <PageTitle
                title={"Create Product"}
                breadCrumbItems={[
                    { label: "Products", path: routes.apps.ecommerce.products.index },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateEcommerceProductProvider productCategories={productCategories}>
                    <CreateEcommerceProduct />
                </CreateEcommerceProductProvider>
            </div>
        </div>
    );
};

export default CreateProductPage;
