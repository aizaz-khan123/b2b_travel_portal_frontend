import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";

import {EmployeeTable} from './EmployeeTable';

export const metadata: Metadata = {
    title: "Employees",
};

const Employees = async () => {
    return (
        <div>
            <PageTitle
                title={"Employees"}
                breadCrumbItems={[{ label: "Organizations" }, { label: "Employees", active: true }]}
            />
            <div className="mt-5">
                <EmployeeTable />
            </div>
        </div>
    );
};

export default Employees;
