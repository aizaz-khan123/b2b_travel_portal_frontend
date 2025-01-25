import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import AccordionExample from "./AccordionExample";

export const metadata: Metadata = {
    title: "Accordion",
};
const AccordionPage = () => {
    return (
        <div>
            <PageTitle
                title={"Accordion"}
                breadCrumbItems={[{ label: "Components" }, { label: "Accordion", active: true }]}
            />
            <div className="mt-6">
                <AccordionExample />
            </div>
        </div>
    );
};

export default AccordionPage;
