import { featurehistory } from "@/features/contacts/mock/featurehistory";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useParams } from "react-router-dom";

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

const Content = () => {
  const theme = useTheme();
  const { id } = useParams();
  const item = featurehistory().find((item) => item.id === id)
  return (
    <Box
      width={1}
      display="flex"
      flexDirection="column"
      gap={theme.spacing(2)}
    >
      <ScrollContainer title={item.name} subtitle={item.email} subtitle2={item?.__meta__?.action} description={new Date().toDateString("en-US")}>
        <AddressAndOtherValues title={item?.address ? "Address" : ""} description={item?.address} />
        <Telephones title={item?.telephones ? "Telephones" :""} list={item?.telephones} showTag={false} />
      </ScrollContainer>
    </Box>
  );
};

export default Content;
