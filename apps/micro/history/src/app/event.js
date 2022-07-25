import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import Empty from "./empty";
import * as React from "react";

const AddressAndOtherValues = React.lazy(() =>
  import(
      /* webpackChunkName: 'title-description' */ "@/components/descriptions/title-description"
  )
);
const Telephones = React.lazy(() =>
  import(
        /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/list-key-tag"
  )
);
const ScrollContainer = React.lazy(() =>
  import(
          /* webpackChunkName: 'avatar-title-description' */ "@/components/scroll-container"
  )
);
const Event = ({ events = {} }) => {
  const state = useLocation();
  console.log(state)
  return (
    <Box
      width={1}
      display="flex"
      flexDirection="column"
    >
      <ScrollContainer title={"item.name"} subtitle={"item.email"} subtitle2={"item?.__meta__?.action"} description={new Date().toDateString("en-US")}>
        <Telephones title={"Telephones"} list={[{label:"labell", tag:"tag"}]} />
        <AddressAndOtherValues title="Address" description={"item?.address"} />
        <AddressAndOtherValues title="Address" description={"item?.address"} />
      </ScrollContainer>
    </Box>
  );
};

export default Event;
