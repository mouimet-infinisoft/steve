import * as React from "react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useItem } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import { config } from "../../../../config/index";
import { matchPath, useLocation } from "react-router-dom";

const List = React.lazy(() =>
  import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/list-key-tag"
  )
);

const Origin = React.lazy(() =>
  import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/title-description"
  )
);

export default function Summary() {
  const { pathname } = useLocation();
  const route = matchPath("/Cases/:selectedId/Summary", pathname);

  const { item } = useItem({
    id: route.params.selectedId,
    feature: config.feature.name
  });

  return (
    <>
      <Typography variant="h5">Summary</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Make sure the information is correct before completing.
      </Typography>
      <Divider variant="fullWidth" sx={{ py: "1rem", mb: "2rem" }} />

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        <List title={"Motives"} list={item?.motives} />
        <List title={"Services"} list={item?.services} />
        <List title={"Location"} list={item?.location} />
        <Origin title='Origin' description={item?.origin} />
      </Box>
    </>
  );
}
