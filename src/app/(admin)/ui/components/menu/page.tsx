import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import MenuExample from "./MenuExample";

export const metadata: Metadata = {
    title: "Menu",
};

const MenuPage = () => {
    return (
        <div>
            <PageTitle title={"Menu"} breadCrumbItems={[{ label: "Components" }, { label: "Menu", active: true }]} />
            <div className="mt-6">
                <MenuExample />
            </div>
        </div>
    );
};

export default MenuPage;
