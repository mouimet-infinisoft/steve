import * as React from "react";
import { styled  } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tools from "../tools";

const drawerWidth = 240;

const Bar = styled(MuiBox, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'fixed',
  width: `100%`,
  height: 64,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    position: 'fixed',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default function Appbar({open, toggleSidemenu}) {
  return (
      <Bar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidemenu}
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Tools />
        </Toolbar>
      </Bar>
  );
}
