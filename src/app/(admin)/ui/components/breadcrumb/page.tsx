import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import BreadcrumbExample from "./BreadcrumbExample";

export const metadata: Metadata = {
    title: "Breadcrumb",
};

const BreadcrumbPage = () => {
    return (
        <div>
            <PageTitle
                title={"Breadcrumb"}
                breadCrumbItems={[{ label: "Components" }, { label: "Breadcrumb", active: true }]}
            />
            <div className="mt-6">
                <BreadcrumbExample />
            </div>
        </div>
    );
};

export default BreadcrumbPage;
