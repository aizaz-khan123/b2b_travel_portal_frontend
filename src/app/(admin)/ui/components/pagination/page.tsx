import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import PaginationExample from "./PaginationExample";

export const metadata: Metadata = {
    title: "Pagination",
};

const PaginationPage = () => {
    return (
        <div>
            <PageTitle
                title={"Pagination"}
                breadCrumbItems={[{ label: "Components" }, { label: "Pagination", active: true }]}
            />
            <div className="mt-6">
                <PaginationExample />
            </div>
        </div>
    );
};

export default PaginationPage;
