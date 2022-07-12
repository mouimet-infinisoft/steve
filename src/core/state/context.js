import configuration from "@/config/config.json";
import { Store } from "@infini-soft/store";
import React, { startTransition, useCallback, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import AppThemeProvider from "@/theme/components/provider";
import {contactlist} from "@/features/contacts/mock/contacts.js";

const initialStore = {
  theme: {
    mode: "dark"
  },
  contacts: {
    list: contactlist(),
    selectedId: ""
  }
};

const initializeStore = () => Promise.resolve(initialStore);

const initialContext = {
  store: new Store(initializeStore, { devtool: configuration.devtools }),
  config: configuration,
  log: console.log
};

const MicroContext = React.createContext(initialContext);

const MicroContextProvider = ({ children, context = initialContext }) => {
  const [mode, setMode] = React.useState("dark");

  const handleToggle = useCallback(
    () =>
      context?.store?.mutate((prev) => {
        const newMode = prev.theme.mode === "dark" ? "light" : "dark";
        startTransition(() => {
          setMode(newMode);
        });
        return {
          ...prev,
          theme: {
            ...prev.theme,
            mode: newMode
          }
        };
      }),
    [context?.store]
  );

  useEffect(
    () =>
      context.store.subscribe(handleToggle, {
        filter: new RegExp("theme.toggle.mode.click")
      }),
    [context.store, handleToggle]
  );

  return (
    <MicroContext.Provider value={{ ...context }}>
      <AppThemeProvider mode={mode}>
        <CssBaseline />
        {children}
      </AppThemeProvider>
    </MicroContext.Provider>
  );
};

export const useMicroContext = () => React.useContext(MicroContext);
export default MicroContextProvider;