import * as React from "react";
import History from "../../../../../components/history";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import Content from "./content";
import { featurehistory } from "@/features/contacts/mock/featurehistory";
import { useMicroState } from "@/core/state";
import { config } from "@/features/contacts/config";

const icon = {
  creation: <CreateNewFolderIcon color="success" />,
  update: <UpdateIcon color="primary" />,
  delete: <DeleteIcon color="error" />,
  today: <CalendarTodayTwoToneIcon color="primary" />,
  undefined: <CalendarTodayTwoToneIcon color="primary" />
};

const ContactHistory = () => {
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);

  const selectedUserHistory = featurehistory().filter(
    (history) => history.id === selectedId
  );

  const mappHistory = selectedUserHistory?.map(({ __meta__ = {} }) => {
    return {
      title: __meta__?.action,
      subtitle: new Date(__meta__?.timestamp ?? 0)?.toLocaleDateString(),
      description: icon[__meta__?.action]
    };
  });

  return (
    <History
      timelineProps={{ list: mappHistory }}
      detailsProps={{ content: <Content /> }}
    />
  );
};

export default ContactHistory;
