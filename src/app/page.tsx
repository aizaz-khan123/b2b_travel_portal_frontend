import type { Metadata } from "next";

import { LoginAuth } from "./LoginAuth";

export const metadata: Metadata = {
    title: "Login - FlyGlobe",
};

const LoginPage = ({ searchParams }: { searchParams?: Record<string, string> }) => {
    return (
        <LoginAuth redirectTo={searchParams?.redirectTo} />
    );
};

export default LoginPage;
