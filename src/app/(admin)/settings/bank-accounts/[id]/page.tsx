import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { EditBankAccount } from "./EditBankAccount";

export const metadata: Metadata = {
    title: "Edit Bank Account",
};

const EditBankAccountPage = async ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <PageTitle
                title={"Edit Bank Account"}
                breadCrumbItems={[
                    { label: "Bank Accounts", path: routes.apps.settings.bank_accounts },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-5">
                <EditBankAccount bankAccountId={params.id} />
            </div>
        </div>
    );
};

export default EditBankAccountPage;
