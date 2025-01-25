import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { RadioTab, Tabs } from "@/components/daisyui";

import { NextJSChangelog } from "./NextJSChangelog";
import { ReactChangelog } from "./ReactChangelog";

export const metadata: Metadata = {
    title: "Changelog",
};

const ChangelogPage = () => {
    return (
        <>
            <PageTitle
                title={"Changelog"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Support", active: true }]}
            />

            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSChangelog />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <ReactChangelog />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLChangelog />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default ChangelogPage;
