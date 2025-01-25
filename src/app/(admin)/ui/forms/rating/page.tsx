import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import RatingExample from "./RatingExample";

export const metadata: Metadata = {
    title: "Rating - Forms",
};

const RatingPage = () => {
    return (
        <div>
            <PageTitle title={"Rating"} breadCrumbItems={[{ label: "Forms" }, { label: "Rating", active: true }]} />
            <div className="mt-6">
                <RatingExample />
            </div>
        </div>
    );
};

export default RatingPage;
