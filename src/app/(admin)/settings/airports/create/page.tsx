import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateAirport } from "./CreateAirport";

export const metadata: Metadata = {
    title: "Create Airport",
};

const CreateAirlinePage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create Airport"}
                breadCrumbItems={[
                    { label: "Airports", path: routes.apps.settings.airlines },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateAirport />
            </div>
        </div>
    );
};

export default CreateAirlinePage;
