import { config } from "@/config/index";
import { Store } from "@infini-soft/store";
import React, { startTransition, useCallback, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import AppThemeProvider from "@/core/theme/components/provider";
import { list } from "@/core/services/crud/list";

const initializeStore = () =>
  new Promise(async (resolve) => {
    const _list = await list();
    resolve({
      theme: {
        mode: "dark"
      },
      Cases: {
        list: _list,
        selectedId: ""
      }
    });
  });

const initialContext = {
  store: new Store(initializeStore, { devtool: config.devtools }),
  config,
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
