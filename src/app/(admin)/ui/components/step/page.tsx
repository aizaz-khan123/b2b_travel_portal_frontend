import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import StepExample from "./StepExample";

export const metadata: Metadata = {
    title: "Step",
};

const StepPage = () => {
    return (
        <div>
            <PageTitle title={"Step"} breadCrumbItems={[{ label: "Components" }, { label: "Step", active: true }]} />
            <div className="mt-6">
                <StepExample />
            </div>
        </div>
    );
};

export default StepPage;
