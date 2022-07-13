import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useMicroState } from "@/core/state";
import DetailsCard from "./card";
import { config } from "../../config";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const anchor = "right";
  const path = useLocation();
  const routeMatch = matchPath(`/${config.feature.name}/:id`, path.pathname);
  const visible = Boolean(routeMatch);
  const item = useMicroState((s) => s[config.feature.name].list[routeMatch?.params?.id]);
  const navigate = useNavigate();

  return (
    <Drawer
      anchor={anchor}
      open={visible}
      onClose={() => navigate(-1)}
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
      <DetailsCard {...item} />
    </Drawer>
  );
}
