// @ts-nocheck
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/system/Box";
import { useTheme } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Layout = () => {
  const theme = useTheme()
  return (
    <Box height={theme.spacing(32)}>
      <IconButton
        sx={{ display: "inline-flex",padding:0 }}
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
