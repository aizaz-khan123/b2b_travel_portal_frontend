import { ReactNode } from "react";
import { Toaster } from "sonner";

import { Theme } from "@/components/daisyui";
import { AuthContextProvider } from "@/contexts/auth";
import { GlobalContextProvider } from "@/contexts/global";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Theme>
            {/* <GlobalContextProvider>
                <AuthContextProvider>{children}</AuthContextProvider>
                <Toaster className="toaster-container" richColors />
            </GlobalContextProvider> */}
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                    <Toaster className="toaster-container" richColors />
                </PersistGate>
            </Provider>
        </Theme>
    );
};

export default AppProvider;
