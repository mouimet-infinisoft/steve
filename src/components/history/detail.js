import Box from "@mui/material/Box";
import * as React from "react";

const HistoryDetails = ({content}) => {
  return (
      <Box display="flex" height="inherit">
          {content}
      </Box>
  );
};

export default HistoryDetails;
