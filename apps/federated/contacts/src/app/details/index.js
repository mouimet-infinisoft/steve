import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useSubscribe } from "@/core/hooks";
import DetailsCard from "./card";
import { config } from "@/config";
// import {  useNavigate } from "react-router-dom";

export default function Details() {
  const anchor = "right";
  // const navigate = useNavigate();

  const [visible, setVisible] = React.useState(true);

  useSubscribe({
    event: config.create.subscribe,
    handler: () => {
      React.startTransition(() => {
        setVisible(true);
      });
    }
  });

  useSubscribe({
    event: config.archive.subscribe,
    handler: () => {
      React.startTransition(() => {
        setVisible(false);
      });
    }
  });

  return (
    <Drawer
      anchor={anchor}
      open={visible}
      onClose={() => {setVisible(false); /*navigate(-1)*/}}
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
