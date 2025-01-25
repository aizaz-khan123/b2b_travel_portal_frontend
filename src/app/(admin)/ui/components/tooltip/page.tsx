import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import TooltipExample from "./TooltipExample";

export const metadata: Metadata = {
    title: "Tooltip",
};

const TooltipPage = () => {
    return (
        <div>
            <PageTitle
                title={"Tooltip"}
                breadCrumbItems={[{ label: "Components" }, { label: "Tooltip", active: true }]}
            />
            <div className="mt-6">
                <TooltipExample />
            </div>
        </div>
    );
};

export default TooltipPage;
