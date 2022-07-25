import * as React from "react";
import { Outlet, useMatch } from "react-router-dom/";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";

const Layout = () => {
  const route = useMatch(":id");

  return (
    <Box p={2} display={"flex"}>
      <Box xs={1} display="flex" alignItems="center" to={-1} component={Link}>
        {route && <ArrowBackIosNewTwoToneIcon />}
      </Box>
      <Box xs>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
