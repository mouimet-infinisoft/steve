import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { ContactFields } from "../libs/details/ContactFields";
import { ExtraFields } from "../libs/details/ExtraFields";
import NotImplemented from "@/components/not-implemented";

export const detailsCardtabs = {
  Contact: {
    to: "/home/dashboard",
    label: "Contact",
    icon: <ContactPhoneTwoToneIcon />,
    component: <ContactFields />,
    iconPosition: "start"
  },
  Relations: {
    to: "/home/settings",
    label: "Relations",
    icon: <ConnectWithoutContactTwoToneIcon />,
    component: <NotImplemented />,
    iconPosition: "start"
  },
  History: {
    to: "/home/settings",
    label: "History",
    icon: <HistoryTwoToneIcon />,
    component: <NotImplemented />,
    iconPosition: "start"
  },
  Misc: {
    to: "/home/settings",
    icon: <MoreHorizTwoToneIcon />,
    component: <ExtraFields />,
    iconPosition: "start"
  }
};
