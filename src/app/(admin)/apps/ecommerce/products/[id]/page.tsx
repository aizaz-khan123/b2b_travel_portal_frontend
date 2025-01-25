import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { getEcommerceProduct, getProductCategories } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceProduct, IEcommerceProductCategory } from "@/types/apps/ecommerce";

import { EditEcommerceProduct } from "./EditProduct";
import { EditEcommerceProductProvider } from "./use-edit-product";

export const metadata: Metadata = {
    title: "Edit Product",
};

const EditProductPage = async ({ params }: { params: { id: string } }) => {
    let product: IEcommerceProduct | null = null,
        productCategories: IEcommerceProductCategory[] = [];

    const [rProduct, rProductCategory] = await Promise.allSettled([
        getEcommerceProduct(Number.parseInt(params.id)),
        getProductCategories(),
    ]);

    if (rProduct.status === "fulfilled" && rProduct.value.status === "success") {
        product = rProduct.value.data;
    } else {
        notFound();
    }

    if (rProductCategory.status === "fulfilled" && rProductCategory.value.status === "success") {
        productCategories = rProductCategory.value.data;
    }

    return (
        <div>
            <PageTitle
                title={"Edit Product"}
                breadCrumbItems={[
                    { label: "Products", path: routes.apps.ecommerce.products.index },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                {product && (
                    <EditEcommerceProductProvider product={product} productCategories={productCategories}>
                        <EditEcommerceProduct />
                    </EditEcommerceProductProvider>
                )}
            </div>
        </div>
    );
};

export default EditProductPage;
