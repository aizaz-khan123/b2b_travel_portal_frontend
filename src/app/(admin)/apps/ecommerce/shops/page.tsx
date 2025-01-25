import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getEcommerceShops } from "@/actions/apps/ecommerce/shop";
import { PageTitle } from "@/components/PageTitle";
import { IEcommerceShop } from "@/types/apps/ecommerce";

import { EcommerceShopTable } from "./ShopTable";
import { EcommerceShopsProvider } from "./use-shops";

export const metadata: Metadata = {
    title: "Shops - Ecommerce",
};

const EcommerceShops = async () => {
    let shops: IEcommerceShop[] = [];
    const rShops = await getEcommerceShops();

    if (rShops.status === "success") {
        shops = rShops.data;
    } else {
        notFound();
    }
    return (
        <div>
            <PageTitle title={"Shops"} breadCrumbItems={[{ label: "Ecommerce" }, { label: "Shops", active: true }]} />

            <div className="mt-5">
                <EcommerceShopsProvider shops={shops}>
                    <EcommerceShopTable />
                </EcommerceShopsProvider>
            </div>
        </div>
    );
};

export default EcommerceShops;
