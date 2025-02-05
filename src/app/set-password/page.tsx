import type { Metadata } from "next";

import { SetPassword } from "./SetPassword";

export const metadata: Metadata = {
    title: "Set Password",
};

const SetPasswordPage = ({ searchParams }: { searchParams?: Record<string, string> }) => {
    return (
        <SetPassword searchParams={searchParams}/>
    );
};

export default SetPasswordPage;
