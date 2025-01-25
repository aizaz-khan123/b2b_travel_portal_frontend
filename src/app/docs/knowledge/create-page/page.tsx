import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { RadioTab, Tabs } from "@/components/daisyui";

import { NextJSCreatePage } from "./NextJSCreatePage";
import { ReactCreatePage } from "./ReactCreatePage";

export const metadata: Metadata = {
    title: "Create Page",
};

const CreatePageCustomizationPage = () => {
    return (
        <>
            <PageTitle
                title={"Create Page"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Knowledge", active: true }]}
            />
            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSCreatePage />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <ReactCreatePage />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLCreatePage />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default CreatePageCustomizationPage;
