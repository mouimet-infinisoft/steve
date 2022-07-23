import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useSubscribe } from "@/core/hooks";
import DetailsCard from "./details.card";
import { config } from "@/config";
import {  useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const anchor = "right";
  const navigate = useNavigate();

  const [visible, setVisible] = React.useState(true);
  const [openPath, setOpenPath] = React.useState('/');
  const {pathname="/"} = useLocation()

  useSubscribe({
    event: config.create.subscribe,
    handler: () => {
      React.startTransition(() => {
        setVisible(true);
        setOpenPath(pathname)
      });
    }
  });

  useSubscribe({
    event: config.archive.click,
    handler: () => {
      React.startTransition(() => {
        setVisible(false);
        navigate(openPath);
      });
    }
  });

  return (
    <Drawer
      anchor={anchor}
      open={visible}
      onClose={() => {setVisible(false); navigate(openPath)}}
      sx={{
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.8)"
        }
      }}
      PaperProps={{
        style: {
          backgroundImage: "none",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center"
        }
      }}
    >
      <DetailsCard />
    </Drawer>
  );
}
