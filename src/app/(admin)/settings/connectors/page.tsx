import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { PIAConnector } from "./PIAConnector";
import { SABREConnector } from "./SABREConnector";

export const metadata: Metadata = {
    title: "Connectors",
};

const Connectors = async () => {
    return (
        <div>
            <PageTitle
                title={"Connectors"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Connectors", active: true }]}
            />
            <div className="mt-5">
                <PIAConnector/>
                <SABREConnector/>
            </div>
        </div>
    );
};

export default Connectors;
