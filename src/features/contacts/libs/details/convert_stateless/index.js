import * as React from "react";
import History from "./generic";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import HistoryDetails from "./detail";

const icon = {
  creation: <CreateNewFolderIcon color="success" />,
  update: <UpdateIcon color="primary" />,
  delete: <DeleteIcon color="error" />,
  today: <CalendarTodayTwoToneIcon color="primary" />
};

const ContactHistory = () => {
  return <History timelineProps={{ list: [] }} detailsProps={{ icon, content: <HistoryDetails /> }} />;
};

export default ContactHistory;
