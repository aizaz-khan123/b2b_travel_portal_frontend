import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ModalExample from "./ModalExample";

export const metadata: Metadata = {
    title: "Modal",
};

const ModalPage = () => {
    return (
        <div>
            <PageTitle title={"Modal"} breadCrumbItems={[{ label: "Components" }, { label: "Modal", active: true }]} />
            <div className="mt-6">
                <ModalExample />
            </div>
        </div>
    );
};

export default ModalPage;
