"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Theme } from "@/components/daisyui";
import { AuthContextProvider } from "@/contexts/auth";
import { GlobalContextProvider } from "@/contexts/global";
import { persistor, store } from "@/redux/store";

const AppProvider = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Theme>
                <GlobalContextProvider>
                    <AuthContextProvider>{children}</AuthContextProvider>
                    <Toaster className="toaster-container" richColors />
                </GlobalContextProvider>
            </Theme>
        </PersistGate>
    </Provider>
);

export default AppProvider;
