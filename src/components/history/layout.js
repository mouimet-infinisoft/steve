// @ts-nocheck
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/system/Box";
import { IconButton, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Layout = () => {
  return (
    <Box>
      <IconButton
        style={{ display: "inline-flex" }}
        disableRipple
        component={Link}
        to={-1}
      >
        <ArrowBackIcon color="primary" />
      </IconButton>
      <Outlet />
    </Box>
  );
};

export default Layout;