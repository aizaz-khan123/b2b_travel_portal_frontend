import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ToggleExample from "./ToggleExample";

export const metadata: Metadata = {
    title: "Toggle - Forms",
};
const TogglePage = () => {
    return (
        <div>
            <PageTitle title={"Toggle"} breadCrumbItems={[{ label: "Forms" }, { label: "Toggle", active: true }]} />
            <div className="mt-6">
                <ToggleExample />
            </div>
        </div>
    );
};

export default TogglePage;
