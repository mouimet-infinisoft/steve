import * as React from "react";
import Box from "@mui/material/Box";
import Appbar from "./libs/appbar";
import Sidemenu from "./libs/sidemenu";
import { Outlet } from "react-router-dom";
import Paper from "@mui/material/Paper";
import MietteDePain from "@/components/breadcrumb";

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>

      <Appbar
        position="fixed"
        open={open}
        toggleSidemenu={() => setOpen((prev) => !prev)}
      />

      <Sidemenu open={open} />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, padding: "72px 2rem 2rem 2rem" }}
      >
        <Paper sx={theme => ({ padding: "0 2rem 2rem 2rem", backgroundColor: `${theme.palette.background.paper} !important` })}>
          <MietteDePain />
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
}
