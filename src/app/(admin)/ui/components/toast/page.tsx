import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ToastExample from "./ToastExample";

export const metadata: Metadata = {
    title: "Toast",
};

const ToastPage = () => {
    return (
        <div>
            <PageTitle title={"Toast"} breadCrumbItems={[{ label: "Components" }, { label: "Toast", active: true }]} />

            <div className="mt-6">
                <ToastExample />
            </div>
        </div>
    );
};

export default ToastPage;
