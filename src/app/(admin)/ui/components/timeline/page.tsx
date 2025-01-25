import type { Metadata } from "next";

import TimelineExample from "./TimelineExample";

export const metadata: Metadata = {
    title: "Timeline",
};

const TimelinePage = () => {
    return (
        <div>
            <TimelineExample />
        </div>
    );
};

export default TimelinePage;
