import * as React from "react";
import { Outlet } from "react-router-dom/";
import Box from "@mui/system/Box";
import { useTheme } from "@mui/material/";

const Layout = () => {
  const theme = useTheme()
  return (
    <Box height={theme.spacing(32)}>
      <Outlet />
    </Box>
  );
};

export default Layout;
