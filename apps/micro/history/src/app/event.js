import Box from "@mui/material/Box";
import * as React from "react";
import { useLocation } from "react-router-dom";
import Empty from "./empty";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
// const AddressAndOtherValues = React.lazy(() =>
//   import(
  //     /* webpackChunkName: 'title-description' */ "@/components/descriptions/title-description"
  //   )
  // );
  // const Telephones = React.lazy(() =>
  //   import(
    //     /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/list-key-tag"
    //   )
    // );
    // const ScrollContainer = React.lazy(() =>
    //   import(
      //     /* webpackChunkName: 'avatar-title-description' */ "@/components/scroll-container"
      //   )
      // );
    const Event = ({events = {}}) => {
    const theme = useTheme();
    const { id } = useLocation();
    console.log(id)
    return (
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        gap={theme.spacing(2)}
      >
        {/* <ScrollContainer title={item.name} subtitle={item.email} subtitle2={item?.__meta__?.action} description={new Date().toDateString("en-US")}>
          <AddressAndOtherValues title="Address" description={item?.address} />
          <Telephones title="Telephones" list={item?.telephones} showTag={false} />
          <AddressAndOtherValues title="State" description={item?.state} />
          <AddressAndOtherValues title={item?.address ? "Address" : ""} description={item?.address} />
          <Telephones title={item?.telephones ? "Telephones" :""} list={item?.telephones} showTag={false} />
        </ScrollContainer> */}
      </Box>
    );
  };
  export default Content;
};

export default Event;
