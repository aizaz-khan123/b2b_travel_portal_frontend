import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import AvatarExample from "./AvatarExample";

export const metadata: Metadata = {
    title: "Avatar",
};

const AvatarPage = () => {
    return (
        <div>
            <PageTitle
                title={"Avatar"}
                breadCrumbItems={[{ label: "Components" }, { label: "Avatar", active: true }]}
            />
            <div className="mt-6">
                <AvatarExample />
            </div>
        </div>
    );
};

export default AvatarPage;
