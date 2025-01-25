import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import InputExample from "./InputExample";

export const metadata: Metadata = {
    title: "Input - Forms",
};
const FormInputPage = () => {
    return (
        <div>
            <PageTitle title={"Input"} breadCrumbItems={[{ label: "Forms" }, { label: "Input", active: true }]} />
            <div className="mt-6">
                <InputExample />
            </div>
        </div>
    );
};

export default FormInputPage;
