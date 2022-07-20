import configuration from "@/config/config.json";
import { Store } from "@infini-soft/store";
import React, { startTransition, useCallback, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import AppThemeProvider from "@/theme/components/provider";
import contactlist from "@/features/contacts/mock/featurelist";
import caseslist from "@/features/cases/mock/list";
import communitylist from "@/features/community/mock/featurelist";
import messageslist from "@/features/messages/mock/featurelist";
import organizationslist from "@/features/organizations/mock/featurelist";

const initialStore = {
  theme: {
    mode: "dark"
  },
  Contacts: {
    list: contactlist(),
    selectedId: ""
  },
  Cases: {
    list: caseslist(),
    selectedId: ""
  },
  Community: {
    list: communitylist(),
    selectedId: ""
  },
  Messages: {
    list: messageslist(),
    selectedId: ""
  },
  Organizations: {
    list: organizationslist(),
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
