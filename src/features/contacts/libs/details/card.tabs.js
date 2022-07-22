import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import  Contact  from "./contact";
import  ExtraFields  from "./ExtraFields";
import History from "@/features/contacts/libs/details/history/index";
import NotImplemented from "@/components/not-implemented";

export const detailsCardtabs = {
  Contact: {
    to: "contact",
    label: "contact",
    icon: <ContactPhoneTwoToneIcon />,
    component: <Contact />,
    iconPosition: "start"
  },
  Relations: {
    to: "relations",
    label: "relations",
    icon: <ConnectWithoutContactTwoToneIcon />,
    component: <NotImplemented />,
    iconPosition: "start"
  },
  History: {
    to: "history",
    label: "history",
    icon: <HistoryTwoToneIcon />,
    component: <History />,
    iconPosition: "start"
  },
  Misc: {
    to: "extra",
    label: "",
    icon: <MoreHorizTwoToneIcon />,
    component: <ExtraFields />,
    iconPosition: "start"
  }
};
