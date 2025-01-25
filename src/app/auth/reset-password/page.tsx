import type { Metadata } from "next";

import { Logo } from "@/components/Logo";

import { AuthThemeToggle } from "../components/ThemeToggle";
import { ResetPasswordAuth } from "./ResetPasswordAuth";

export const metadata: Metadata = {
    title: "Reset Password",
};

const ResetPasswordPage = () => {
    return (
        <div className="flex flex-col items-stretch p-6 md:p-8 lg:p-16">
            <div className="flex items-center justify-between">
                <Logo />
                <AuthThemeToggle />
            </div>
            <h3 className="mt-8 text-center text-xl font-semibold md:mt-12 lg:mt-24">Reset Password</h3>
            <h3 className="mt-2 text-center text-sm text-base-content/70">
                Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.
            </h3>
            <div className="mt-6 md:mt-10">
                <ResetPasswordAuth />
            </div>
        </div>
    );
};

export default ResetPasswordPage;
