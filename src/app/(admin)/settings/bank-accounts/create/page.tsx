import { Metadata } from "next";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import { routes } from "@/lib/routes";
import { CreateBankAccount } from "./CreateBankAccount";

export const metadata: Metadata = {
    title: "Create Bank Account",
};

const CreateProductPage = async () => {

    return (
        <div>
            <PageTitle
                title={"Create Bank Account"}
                breadCrumbItems={[
                    { label: "Bank Accounts", path: routes.apps.settings.bank_accounts },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateBankAccount />
            </div>
        </div>
    );
};

export default CreateProductPage;
