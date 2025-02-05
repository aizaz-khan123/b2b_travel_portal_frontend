import type { Metadata } from "next";

import { Logo } from "@/components/Logo";

import { AuthThemeToggle } from "../ThemeToggle";
import { ForgotPassword } from "./ForgotPassword";

export const metadata: Metadata = {
    title: "Forgot Password",
};

const ForgotPasswordPage = () => {
    return (
        <ForgotPassword />
    );
};

export default ForgotPasswordPage;
