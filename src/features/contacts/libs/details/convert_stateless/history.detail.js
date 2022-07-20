import {useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import HeaderAndSubtitle from "@/components/header-subtitle";
import { generateId } from "@/helpers";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NoResult from "@/components/no-result";

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

const HistoryDetails = ({ address = "",telephones = [], state = "", showNoRecordFound, action }) => {
  const theme = useTheme();
  return (
    <>
      <Box display="flex" height="inherit" justifyContent={showNoRecordFound ? "flex-start" : "center"}>
        <IconButton
          onClick={() => action()}
          style={{ display: "inline-flex" }}
          disableRipple
        >
          <ArrowBackIcon color="primary" />
        </IconButton>

        {!Boolean(showNoRecordFound) && <NoResult />}
        {Boolean(showNoRecordFound) && (
          <Box
            display="flex"
            flexDirection="column"
            pl={theme.spacing(1)}
            gap={theme.spacing(2)}
          >
            <Address
              title={address ? "Address" : ""}
              description={address}
            />
            <Telephones
              title={telephones ? "Telephones" : ""}
              styleProps={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column"
              }}
              telephones={telephones}
            />
            <HeaderAndSubtitle
              key={generateId()}
              label={state ? "State" : ""}
              value={state}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default HistoryDetails;
