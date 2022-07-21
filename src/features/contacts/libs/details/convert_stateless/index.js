import * as React from "react";
import History from "./generic";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import HistoryDetails from "./detail";
import { featurehistory } from "@/features/contacts/mock/featurelist";
import { useMicroState } from "@/core/state";
import { config } from "@/features/contacts/config";

const icon = {
  creation: <CreateNewFolderIcon color="success" />,
  update: <UpdateIcon color="primary" />,
  delete: <DeleteIcon color="error" />,
  today: <CalendarTodayTwoToneIcon color="primary" />
};

const ContactHistory = () => {
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const selectedUserHistory = featurehistory().filter((history) => history.id === selectedId);
  return <History timelineProps={{ list: [{title:"21321", subtitle:"asdd", description:"asdsad"}] }} detailsProps={{ icon, content: <HistoryDetails /> }} />;
};

export default ContactHistory;
