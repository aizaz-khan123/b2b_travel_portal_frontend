import { type Metadata } from "next";

import { getEcommerceDashboardData } from "@/actions/dashboards/ecommerce";
import { PageTitle } from "@/components/PageTitle";
import { IEcommerceDashboardData } from "@/types/dashboards/ecommerce";

import { EcommerceDashboard } from "./EcommerceDashboard";
import { EcommerceDashboardProvider } from "./use-ecommerce-dashboard";

export const metadata: Metadata = {
    title: "Dashboard - Ecommerce",
};

const EcommerceDashboardPage = async () => {
    const response = await getEcommerceDashboardData();
    let data: IEcommerceDashboardData | null = null;
    if (response.status === "success") {
        data = response.data;
    }
    return (
        <div>
            <PageTitle
                title={"Business Overview"}
                breadCrumbItems={[{ label: "Dashboards" }, { label: "Ecommerce", active: true }]}
            />
            <div className="mt-6">
                {data && (
                    <EcommerceDashboardProvider data={data}>
                        <EcommerceDashboard />
                    </EcommerceDashboardProvider>
                )}
            </div>
        </div>
    );
};

export default EcommerceDashboardPage;
