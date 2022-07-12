import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { ContactFields } from "../libs/details/ContactFields";

const RelationFields = ({ id }) => <>RelationFields {id}</>;
const HistoryFields = ({ id }) => <>HistoryFields {id}</>;
const MiscFields = ({ id }) => <>MiscFields {id}</>;

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
    component: <RelationFields />,
    iconPosition: "start"
  },
  History: {
    to: "/home/settings",
    label: "History",
    icon: <HistoryTwoToneIcon />,
    component: <HistoryFields />,
    iconPosition: "start"
  },
  "Misc": {
    to: "/home/settings",
    icon: <MoreHorizTwoToneIcon />,
    component: <MiscFields />,
    iconPosition: "start"
  }
};