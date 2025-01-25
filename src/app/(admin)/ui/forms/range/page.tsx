import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import RangeExample from "./RangeExample";

export const metadata: Metadata = {
    title: "Range - Forms",
};

const RangePage = () => {
    return (
        <div>
            <PageTitle title={"Range"} breadCrumbItems={[{ label: "Forms" }, { label: "Range", active: true }]} />
            <div className="mt-6">
                <RangeExample />
            </div>
        </div>
    );
};

export default RangePage;
