import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateCountry } from "./CreateCountry";

export const metadata: Metadata = {
    title: "Create Country",
};

const CreateAirlinePage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create Country"}
                breadCrumbItems={[
                    { label: "Countries", path: routes.apps.settings.countries },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateCountry />
            </div>
        </div>
    );
};

export default CreateAirlinePage;
