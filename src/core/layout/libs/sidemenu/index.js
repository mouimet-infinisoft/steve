import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import MailIcon from "@mui/icons-material/Mail";
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import { Tooltip } from '@mui/material';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  borderRight: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  borderRight: 0,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const lists = [
  { label: "Home", icon: <HomeTwoToneIcon /> },
  { label: "Contacts", icon: <ContactsTwoToneIcon /> },
  { label: "Messages", icon: <MessageTwoToneIcon /> },
  { label: "Organizations", icon: <CorporateFareTwoToneIcon /> },
  { label: "Cases", icon: <FolderTwoToneIcon /> },
  { label: "Community", icon: <PeopleTwoToneIcon /> }
];

const Sidemenu = ({ open, handleClose }) => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" open={open}>
      <Divider />
      <Box sx={{ paddingTop: "64px" }} />
      <List sx={{ borderRight: 0 }}>
        {lists.map(({ label, icon }) => (
            <ListItem key={label} to={`${label}`} disablePadding sx={{ display: "block" }}>
              <Tooltip title={label} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
                onClick={() => navigate(`/${label}`)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>{label}</ListItemText>
              </ListItemButton>
              </Tooltip>
            </ListItem>
          )
        )}
      </List>

      <Divider />

      <List>
        {["Messages", "MENUA", "MENUB"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidemenu;
