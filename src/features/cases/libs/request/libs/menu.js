import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { Link, useLocation, useParams } from "react-router-dom";

export default function IconMenu() {
  const id = useParams()?.id;
  const path = useLocation().pathname;

  return (
    <MenuList>
      {[
        "General",
        "Individuals",
        "Details",
        "Services",
        "Planning",
        "Summary"
      ].map((item) => (
        <MenuItem
          key={item}
          sx={{ paddingLeft: 0 }}
          to={`${id}/${item}`}
          selected={path?.includes(`${id}/${item}`)}
          component={Link}
        >
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>{item}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
