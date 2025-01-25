import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import CountdownExample from "./CountdownExample";

export const metadata: Metadata = {
    title: "Countdown",
};

const CountdownPage = () => {
    return (
        <div>
            <PageTitle
                title={"Countdown"}
                breadCrumbItems={[{ label: "Components" }, { label: "Countdown", active: true }]}
            />
            <div className="mt-6">
                <CountdownExample />
            </div>
        </div>
    );
};

export default CountdownPage;
