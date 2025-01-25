import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { getEcommerceFullOrder } from "@/actions/apps/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { IEcommerceFullOrder } from "@/types/apps/ecommerce";

import { OrderDetail } from "./OrderDetail";

export const metadata: Metadata = {
    title: "Order Detail - Ecommerce",
};

const EcommerceOrderPage = async () => {
    let order: IEcommerceFullOrder | null = null;
    const rOrder = await getEcommerceFullOrder();

    if (rOrder.status === "success") {
        order = rOrder.data;
    } else {
        notFound();
    }

    return (
        <>
            <PageTitle
                title={"Order Detail"}
                breadCrumbItems={[
                    { label: "Orders", path: routes.apps.ecommerce.orders.index },
                    { label: "Detail", active: true },
                ]}
            />
            <div className="mt-5">
                <OrderDetail order={order} />
            </div>
        </>
    );
};

export default EcommerceOrderPage;
