import Box from "@mui/material/Box";
import * as React from "react";
import { useLocation } from "react-router-dom";
import Empty from "./empty";

const Event = () => {
  const {state} = useLocation();

  console.log(state);

  if (!state) {
    return <Empty />;
  }

  return (
    <Box display="flex" height="inherit">
      {/* {details} */}
      DETAILS
    </Box>
  );
};

export default Event;
