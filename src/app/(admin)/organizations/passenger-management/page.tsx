import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { PassengerManagement } from "./PassengerManagement";

export const metadata: Metadata = {
    title: "Passenger Management",
};

const Passengers = async () => {
    return (
        <div>
            <PageTitle
                title={"Passenger Management"}
                breadCrumbItems={[{ label: "Organizations" }, { label: "Passenger Management", active: true }]}
            />
            <div className="mt-5">
                <PassengerManagement />
            </div>
        </div>
    );
};

export default Passengers;
