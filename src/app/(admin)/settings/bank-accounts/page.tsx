import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import { BankAccountTable } from "./BankAccountTable";

export const metadata: Metadata = {
    title: "Bank Accounts",
};

const BankAccounts = async () => {
    return (
        <div>
            <PageTitle
                title={"Bank Accounts"}
                breadCrumbItems={[{ label: "Settings" }, { label: "Bank Accounts", active: true }]}
            />
            <div className="mt-5">
                <BankAccountTable />
            </div>
        </div>
    );
};

export default BankAccounts;
