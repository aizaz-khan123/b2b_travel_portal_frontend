import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { RadioTab, Tabs } from "@/components/daisyui";

import { NextJSFolderStructure } from "./NextJSFolderStructure";
import { ReactFolderStructure } from "./ReactFolderStructure";

export const metadata: Metadata = {
    title: "File Structure Knowledge",
};

const FolderStructurePage = () => {
    return (
        <>
            <PageTitle
                title={"Folder Structure"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Knowledge", active: true }]}
            />
            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSFolderStructure />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <ReactFolderStructure />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLFolderStructure />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default FolderStructurePage;
