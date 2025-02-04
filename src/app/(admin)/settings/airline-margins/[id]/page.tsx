import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { EditAirlineMargin } from "./EditAirlineMargin";

export const metadata: Metadata = {
    title: "Edit Airline Margin & Commission",
};

const EditAirlineMarginPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <PageTitle
                title={"Edit Airline Margin & Commission"}
                breadCrumbItems={[
                    { label: "Airline Margin & Commission", path: routes.apps.settings.airline_margins },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditAirlineMargin airlineMarginId={params.id} />
            </div>
        </div>
    );
};

export default EditAirlineMarginPage;
