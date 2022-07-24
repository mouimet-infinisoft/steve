import * as React from "react";
import { Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useItem } from "@/core/hooks";
import { config } from "@/config/index";
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
  const route = matchPath(":selectedId/*", pathname);

  const { item } = useItem({
    id: route?.params?.selectedId,
    feature: config?.feature?.name
  });

  const gridItemsPresets = {
    small: { xs: 12, sm: 6, md: 4, lg: 3 },
    medium: { xs: 12, sm: 6 },
    large: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
    full: { xs: 12 },
    split2:{xs: 12, sm: 6} 
  };
  const GridItem = ({ hidden=false, children, variant = "small", ...props }) =>
    hidden ? null : (
      <Grid item {...gridItemsPresets[variant]} {...props}>
        {children}
      </Grid>
    );

  return (
    <>
      <Grid container spacing={4} justifyContent="space-between">
        <GridItem variant='split2'>
          <Typography variant="h5">Summary</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Make sure the information is correct before completing.
          </Typography>
        </GridItem>

        <GridItem variant='split2' textAlign='right'>
          <Button variant='contained'>Complete</Button>
        </GridItem>
      </Grid>

      <Divider variant="fullWidth" sx={{ py: "1rem", mb: "2rem" }} />

      <Grid container spacing={4}>
        <GridItem hidden={item?.motives?.length <= 0}>
          <List title={"Motives"} list={item?.motives} showTag={false} />
        </GridItem>

        <GridItem hidden={item?.services?.length <= 0}>
          <List title={"Services"} list={item?.services} showTag={false} />
        </GridItem>

        <GridItem hidden={item?.location?.length <= 0}>
          <List title={"Location"} list={item?.location} showTag={false} />
        </GridItem>

        <GridItem hidden={item?.origin?.length <= 0}>
          <Origin title="Origin" description={item?.origin} />
        </GridItem>

        <GridItem hidden={item?.notes?.length <= 0} variant="full">
          <Origin title="Notes" description={item?.notes} />
        </GridItem>
      </Grid>
    </>
  );
}
