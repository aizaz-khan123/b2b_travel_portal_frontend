import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateAirlineMargin } from "./CreateAirlineMargin";

export const metadata: Metadata = {
    title: "Create Airline Margin",
};

const CreateAirlineMarginPage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create Airline Margin"}
                breadCrumbItems={[
                    { label: "Airline Margins & Commission", path: routes.apps.settings.airline_margins},
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateAirlineMargin />
            </div>
        </div>
    );
};

export default CreateAirlineMarginPage;
