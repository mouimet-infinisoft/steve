import * as React from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import { featurehistory } from "@/features/contacts/mock/featurehistory";
import { useMicroState } from "@/core/state";
import { config } from "@/features/contacts/config";

const History = React.lazy(() =>
  import(
    /* webpackChunkName: 'contact-history' */ "@/components/history"
  )
);

const Content = React.lazy(() =>
  import(
    /* webpackChunkName: 'contact-history' */ "./content"
  )
);

const icon = {
  creation: <CreateNewFolderIcon />,
  update: <UpdateIcon />,
  delete: <DeleteIcon />,
  today: <CalendarTodayTwoToneIcon />,
  undefined: <CalendarTodayTwoToneIcon />
};

const ContactHistory = () => {
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);

  const selectedUserHistory = featurehistory().filter(
    (history) => history.id === selectedId
  );

  const mappHistory = selectedUserHistory?.map(({ id, email, __meta__ = {} }) => {
    return {
      id:id ?? 0,
      title: __meta__?.action,
      subtitle: new Date(__meta__?.timestamp ?? 0)?.toDateString(),
      subtitle2: email,
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
