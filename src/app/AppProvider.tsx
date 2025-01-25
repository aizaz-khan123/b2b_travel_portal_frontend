import { ReactNode } from "react";
import { Toaster } from "sonner";

import { Theme } from "@/components/daisyui";
import { AuthContextProvider } from "@/contexts/auth";
import { GlobalContextProvider } from "@/contexts/global";

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Theme>
            <GlobalContextProvider>
                <AuthContextProvider>{children}</AuthContextProvider>
                <Toaster className="toaster-container" richColors />
            </GlobalContextProvider>
        </Theme>
    );
};

export default AppProvider;
