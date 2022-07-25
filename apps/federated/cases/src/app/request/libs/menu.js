import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import AssignmentTurnedInTwoToneIcon from "@mui/icons-material/AssignmentTurnedInTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Link, useLocation, useParams } from "react-router-dom";

const menus = [
  { label: "Details", icon: <InfoTwoToneIcon /> },
  { label: "Individuals", icon: <PeopleAltTwoToneIcon /> },
  { label: "Services", icon: <SupportAgentTwoToneIcon /> },
  { label: "Summary", icon: <AssignmentTurnedInTwoToneIcon /> }
];

export default function IconMenu() {
  const path = useLocation().pathname;

  return (
    <MenuList>
      {menus.map(({ label, icon }) => (
        <MenuItem
          key={label}
          sx={(theme) => ({
            borderRadius: "15px",
            padding: "0.35rem 0",
            paddingLeft: 0,
            "&:hover": {
              borderLeft: `5px solid ${theme.palette.primary.light}`
            },
            "&.Mui-selected": {
              borderLeft: `5px solid ${theme.palette.primary.light}`
            }
          })}
          to={label}
          selected={path?.includes(label)}
          component={Link}
        >
          <ListItemIcon sx={{ px: "1rem" }}>{icon}</ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "h6" }}>
            {label}
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
