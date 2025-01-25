import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getEcommerceOrders, getProductCategories } from "@/actions/apps/ecommerce";
import { EcommerceOrdersProvider } from "@/app/(admin)/apps/ecommerce/orders/use-orders";
import { PageTitle } from "@/components/PageTitle";
import { IEcommerceOrder, IEcommerceProductCategory } from "@/types/apps/ecommerce";

import { OrderTable } from "./OrderTable";

export const metadata: Metadata = {
    title: "Orders - Ecommerce",
};

const EcommerceOrdersPage = async () => {
    let orders: IEcommerceOrder[] = [];
    let productCategories: IEcommerceProductCategory[] = [];

    const [rOrder, rProductCategory] = await Promise.allSettled([getEcommerceOrders(), getProductCategories()]);

    if (rOrder.status === "fulfilled") {
        if (rOrder.value.status === "success") {
            orders = rOrder.value.data;
        } else {
            notFound();
        }
    }

    if (rProductCategory.status === "fulfilled" && rProductCategory.value.status === "success") {
        productCategories = rProductCategory.value.data;
    }
    return (
        <div>
            <PageTitle title={"Orders"} breadCrumbItems={[{ label: "Ecommerce" }, { label: "Orders", active: true }]} />
            <div className="mt-5">
                <EcommerceOrdersProvider orders={orders} productCategories={productCategories}>
                    <OrderTable />
                </EcommerceOrdersProvider>
            </div>
        </div>
    );
};

export default EcommerceOrdersPage;
