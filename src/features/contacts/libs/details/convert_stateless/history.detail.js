import {useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import HeaderAndSubtitle from "@/components/header-subtitle";
import { generateId } from "@/helpers";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Empty from "@/components/no-record-found";

const Address = React.lazy(() =>
  import(
    /* webpackChunkName: 'title-description' */ "@/components/descriptions/title-description"
  )
);

const Telephones = React.lazy(() =>
  import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/list-key-tag"
  )
);

const HistoryDetails = ({ showHistoryDetails, goBack, showNoRecordFound }) => {
  const theme = useTheme();
  return (
    <>
      <Box display="flex" height="inherit" justifyContent={showNoRecordFound ? "flex-start" : "center"}>
        <IconButton
          onClick={() => goBack()}
          style={{ display: "inline-flex" }}
          disableRipple
        >
          <ArrowBackIcon color="primary" />
        </IconButton>

        {!Boolean(showNoRecordFound) && <Empty />}
        {Boolean(showNoRecordFound) && (
          <Box
            display="flex"
            flexDirection="column"
            pl={theme.spacing(1)}
            gap={theme.spacing(2)}
          >
            <Address
              title={showHistoryDetails?.address ? "Address" : ""}
              description={showHistoryDetails?.address ?? ""}
            />
            <Telephones
              title={showHistoryDetails?.telephones ? "Telephones" : ""}
              styleProps={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column"
              }}
              telephones={showHistoryDetails?.telephones ?? []}
            />
            <HeaderAndSubtitle
              key={generateId()}
              label={showHistoryDetails?.state ? "State" : ""}
              value={showHistoryDetails?.state ?? ""}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default HistoryDetails;
