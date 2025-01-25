import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ButtonExample from "./ButtonExample";

export const metadata: Metadata = {
    title: "Button",
};

const ButtonPage = () => {
    return (
        <div>
            <PageTitle
                title={"Button"}
                breadCrumbItems={[{ label: "Components" }, { label: "Button", active: true }]}
            />
            <div className="mt-6">
                <ButtonExample />
            </div>
        </div>
    );
};

export default ButtonPage;
