import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import DefaultEmpty from "./empty";
import * as React from "react";

const Event = ({ events = {}, Empty = DefaultEmpty  }) => {
  const { state } = useLocation();

  if (!state) {
    return <Empty />
  }

  return (
    <Box
      width={1}
      display="flex"
      flexDirection="column"
    >
      Details
    </Box>
  );
};

export default Event;
