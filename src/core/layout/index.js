import * as React from "react";
import Box from "@mui/material/Box";
import Appbar from "./libs/appbar";
import Sidemenu from "./libs/sidemenu";
import { Outlet, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import MietteDePain from "@/components/breadcrumb";
import { useItem } from "../hooks";

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const [feature, id] = pathname.split("/").filter((x) => x);
  const { item } = useItem({ id, feature });
  const itemLabel = { key: id, value: item?.label ?? id };

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
        <Paper
          sx={(theme) => ({
            padding: "0 2rem 2rem 2rem",
            backgroundColor: `${theme.palette.background.paper} !important`
          })}
        >
          <MietteDePain itemLabel={itemLabel} />
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
}
