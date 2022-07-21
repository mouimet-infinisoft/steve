import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { Link,  useParams } from "react-router-dom";
import { useItem } from "@/core/hooks";
import { config } from "../../../config";

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

const HistoryDetails = () => {
  const theme = useTheme();
  const { id } = useParams();
  const { item } = useItem({ id, feature: config.feature.name });

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        pl={theme.spacing(1)} // this is a non sense
        gap={theme.spacing(2)}
        component={Link}
        to={id}
      >
        <Address title="Address" description={item.address} />
        <Telephones title="Telephones" list={item.telephones} showTag={false} />
        {/* <HeaderAndSubtitle
            key={generateId()}
            label={state ? "State" : ""}
            value={state}
          /> */}
      </Box>
    </>
  );
};

export default HistoryDetails;
