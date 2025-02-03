import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateAirline } from "./CreateAirline";

export const metadata: Metadata = {
    title: "Create Airline",
};

const CreateAirlinePage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create Airline"}
                breadCrumbItems={[
                    { label: "Airlines", path: routes.apps.settings.airlines },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateAirline />
            </div>
        </div>
    );
};

export default CreateAirlinePage;
