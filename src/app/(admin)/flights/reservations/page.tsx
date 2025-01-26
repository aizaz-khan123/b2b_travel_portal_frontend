import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getEcommerceProducts, getProductCategories } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { IEcommerceProduct, IEcommerceProductCategory } from "@/types/apps/ecommerce";

import { EcommerceProductTable } from "./ProductTable";
import { EcommerceProductsProvider } from "./use-products";

export const metadata: Metadata = {
    title: "Booking Reservations",
};

const EcommerceProducts = async () => {
    let products: IEcommerceProduct[] = [];
    let productCategories: IEcommerceProductCategory[] = [];

    const [rProduct, rProductCategory] = await Promise.allSettled([getEcommerceProducts(), getProductCategories()]);

    if (rProduct.status === "fulfilled") {
        if (rProduct.value.status === "success") {
            products = rProduct.value.data;
        } else {
            notFound();
        }
    }

    if (rProductCategory.status === "fulfilled" && rProductCategory.value.status === "success") {
        productCategories = rProductCategory.value.data;
    }

    return (
        <div>
            <PageTitle
                title={"Reservations"}
                breadCrumbItems={[{ label: "Booking" }, { label: "Reservations", active: true }]}
            />

            <div className="mt-5">
                <EcommerceProductsProvider products={products} productCategories={productCategories}>
                    <EcommerceProductTable />
                </EcommerceProductsProvider>
            </div>
        </div>
    );
};

export default EcommerceProducts;
