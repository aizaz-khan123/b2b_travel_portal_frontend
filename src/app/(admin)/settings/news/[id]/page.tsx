import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { EditNews } from "./EditNews";

export const metadata: Metadata = {
    title: "Edit Country",
};

const EditNewsPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <PageTitle
                title={"Edit News"}
                breadCrumbItems={[
                    { label: "Countries", path: routes.apps.settings.countries },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditNews newsId={params.id} />
            </div>
        </div>
    );
};

export default EditNewsPage;
