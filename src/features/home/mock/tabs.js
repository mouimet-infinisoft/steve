import PhoneIcon from "@mui/icons-material/Phone";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
// import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

export const tabs = [
  {
    to: "/home/dashboard",
    label: "Dashboard",
    icon: <PhoneIcon />,
    iconPosition: "start"
  },
  {
    to: "/home/settings",
    label: "Settings",
    icon: <SettingsIcon />,
    iconPosition: "start"
  }
  //   {
  //     to: "/home/settings",
  //     label: "Likes",
  //     icon: <PhoneMissedIcon />,
  //     iconPosition: "start"
  //   },
  //   {
  //     to: "/home/settings",
  //     label: "Tab Three",
  //     icon: <FavoriteIcon />,
  //     iconPosition: "start"
  //   },
  //   {
  //     to: "/home/settings",
  //     label: "Tab Four",
  //     icon: <PersonPinIcon />,
  //     iconPosition: "start"
  //   }
];
