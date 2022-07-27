import React from "react";
import * as themes from "..";
import { ThemeProvider } from "@mui/material/styles";

const AppThemeProvider = ({ children, mode='dark' }) => {
  return (
    <ThemeProvider
      theme={themes[mode]}
    >
        {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
