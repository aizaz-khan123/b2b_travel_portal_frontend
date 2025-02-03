import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { EditAirport } from "./EditAirport";

export const metadata: Metadata = {
    title: "Edit Airport",
};

const EditAirlinePage = async ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <PageTitle
                title={"Edit Airport"}
                breadCrumbItems={[
                    { label: "Airports", path: routes.apps.settings.airports },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditAirport airportId={params.id} />
            </div>
        </div>
    );
};

export default EditAirlinePage;
