import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { RadioTab, Tabs } from "@/components/daisyui";

import { NextJSDependencies } from "./NextJSDependencies";
import { ReactDependencies } from "./ReactDependencies";

export const metadata: Metadata = {
    title: "Dependencies Knowledge",
};

const DependencyKnowledgePage = () => {
    return (
        <>
            <PageTitle
                title={"Dependencies"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Knowledge", active: true }]}
            />
            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSDependencies />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <ReactDependencies />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLDependencies />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default DependencyKnowledgePage;
