"use client";

import Providers from "@/providers/Providers";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { useEffect, useState } from "react";

export default function PageLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
              <Providers>{children}</Providers>
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <Toaster />
    </>
  );
}