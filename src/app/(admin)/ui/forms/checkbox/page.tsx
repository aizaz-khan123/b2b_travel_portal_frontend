import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import CheckboxExample from "./CheckboxExample";

export const metadata: Metadata = {
    title: "Checkbox - Forms",
};

const CheckboxPage = () => {
    return (
        <div>
            <PageTitle title={"Checkbox"} breadCrumbItems={[{ label: "Forms" }, { label: "Checkbox", active: true }]} />
            <div className="mt-6">
                <CheckboxExample />
            </div>
        </div>
    );
};

export default CheckboxPage;
