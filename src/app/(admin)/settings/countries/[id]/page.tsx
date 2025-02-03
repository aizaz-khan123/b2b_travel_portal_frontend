import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { EditCountry } from "./EditCountry";

export const metadata: Metadata = {
    title: "Edit Country",
};

const EditCountryPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <PageTitle
                title={"Edit Country"}
                breadCrumbItems={[
                    { label: "Countries", path: routes.apps.settings.countries },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditCountry countryId={params.id} />
            </div>
        </div>
    );
};

export default EditCountryPage;
