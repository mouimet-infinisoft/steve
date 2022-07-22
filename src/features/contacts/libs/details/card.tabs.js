import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import  Fields  from "./Fields";
import  ExtraFields  from "./ExtraFields";
import History from "@/features/contacts/libs/details/convert_stateless/index";
import NotImplemented from "@/components/not-implemented";

export const detailsCardtabs = {
  Contact: {
    to: "Contacts",
    label: "Contact",
    icon: <ContactPhoneTwoToneIcon />,
    component: <Fields />,
    iconPosition: "start"
  },
  Relations: {
    to: "relations",
    label: "Relations",
    icon: <ConnectWithoutContactTwoToneIcon />,
    component: <NotImplemented />,
    iconPosition: "start"
  },
  History: {
    to: "history",
    label: "History",
    icon: <HistoryTwoToneIcon />,
    component: <History />,
    iconPosition: "start"
  },
  Misc: {
    to: "extra",
    icon: <MoreHorizTwoToneIcon />,
    component: <ExtraFields />,
    iconPosition: "start"
  }
};
