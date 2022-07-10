import configuration from "@/config/config.json";
import { Store } from "@infini-soft/store";
import React from "react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

const initializeStore = () => Promise.resolve(["coiucou"]);

const initialContext = {
  store: new Store(initializeStore, { devtool: configuration.devtools }),
  config: configuration,
  log: console.log
};

const MicroContext = React.createContext(initialContext);

const MicroContextProvider = ({ children, context = initialContext }) => (
  <MicroContext.Provider value={{ ...context }}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </MicroContext.Provider>
);

export const useMicroContext = () => React.useContext(MicroContext);
export default MicroContextProvider;
