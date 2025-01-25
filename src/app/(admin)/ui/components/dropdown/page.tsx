import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import DropdownExample from "./DropdownExample";

export const metadata: Metadata = {
    title: "Dropdown",
};

const DropdownPage = () => {
    return (
        <div>
            <PageTitle
                title={"Dropdown"}
                breadCrumbItems={[{ label: "Components" }, { label: "Dropdown", active: true }]}
            />
            <div className="mt-6">
                <DropdownExample />
            </div>
        </div>
    );
};

export default DropdownPage;
