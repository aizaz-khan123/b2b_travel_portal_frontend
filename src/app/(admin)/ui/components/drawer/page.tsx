import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import DrawerExample from "./DrawerExample";

export const metadata: Metadata = {
    title: "Drawer",
};

const DrawerPage = () => {
    return (
        <div>
            <PageTitle
                title={"Drawer"}
                breadCrumbItems={[{ label: "Components" }, { label: "Drawer", active: true }]}
            />
            <div className="mt-6">
                <DrawerExample />
            </div>
        </div>
    );
};

export default DrawerPage;
