import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useItem } from "@/core/hooks";
import { config } from "../../../config";

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
  const { item } = useItem({ id, feature: config.feature.name });

  return (
    <Box
      width={1}
      display="flex"
      flexDirection="column"
      pl={theme.spacing(2)}
      pr={theme.spacing(2)}
      gap={theme.spacing(2)}
    >
      <ScrollContainer title={item.name} subtitle={item.email} description={new Date().toDateString("en-US")}>
        <AddressAndOtherValues title="Address" description={item?.address} />
        <Telephones title="Telephones" list={item?.telephones} showTag={false} />
        <AddressAndOtherValues title="State" description={item?.state} />
      </ScrollContainer>
    </Box>
  );
};

export default Content;
