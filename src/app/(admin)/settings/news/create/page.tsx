import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateNews } from "./CreateNews";

export const metadata: Metadata = {
    title: "Create News",
};

const CreateAirlinePage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create News"}
                breadCrumbItems={[
                    { label: "News & Alerts", path: routes.apps.settings.news },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateNews />
            </div>
        </div>
    );
};

export default CreateAirlinePage;
