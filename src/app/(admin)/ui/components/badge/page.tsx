import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import BadgeExample from "./BadgeExample";

export const metadata: Metadata = {
    title: "Badge",
};

const BadgePage = () => {
    return (
        <div>
            <PageTitle title={"Badge"} breadCrumbItems={[{ label: "Components" }, { label: "Badge", active: true }]} />
            <div className="mt-6">
                <BadgeExample />
            </div>
        </div>
    );
};

export default BadgePage;
