import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import RadioExample from "./RadioExample";

export const metadata: Metadata = {
    title: "Radio - Forms",
};

const RadioPage = () => {
    return (
        <div>
            <PageTitle title={"Radio"} breadCrumbItems={[{ label: "Forms" }, { label: "Radio", active: true }]} />
            <div className="mt-6">
                <RadioExample />
            </div>
        </div>
    );
};

export default RadioPage;
