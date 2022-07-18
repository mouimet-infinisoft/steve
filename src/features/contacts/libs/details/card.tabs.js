import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import  Fields  from "./Fields";
import  ExtraFields  from "./ExtraFields";
import History from "@/features/contacts/libs/details/history";
import NotImplemented from "@/components/not-implemented";

export const detailsCardtabs = {
  Contact: {
    to: "/home/dashboard",
    label: "Contact",
    icon: <ContactPhoneTwoToneIcon />,
    component: <Fields />,
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
    component: <History />,
    iconPosition: "start"
  },
  Misc: {
    to: "/home/settings",
    icon: <MoreHorizTwoToneIcon />,
    component: <ExtraFields />,
    iconPosition: "start"
  }
};
