import Typography from "@mui/material/Typography";
import { useMicroState } from "@/core/state";
import { config } from "@/config";
import { matchPath, useLocation } from "react-router-dom";
import { Chip, Grid } from "@mui/material";
import React from "react";

const Title = React.lazy(() =>
  import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/title-description"
  )
);

const Header = ({ title, sx = {}, ...props }) => {
  const statePresets = {
    todo: "info",
    inprogress: "info",
    blocked: "error",
    waiting: "warning",
    suspended: "error",
    complete: "success"
  };

  const pathname = useLocation()?.pathname;
  const query = matchPath(`:id/*`, pathname);
  const item = useMicroState(
    (s) => s?.[config.feature.name]?.list?.[query?.params?.id]
  );

  const { reference, state, createdAt, updatedAt } = React.useMemo(
    () => item ?? {},
    [item]
  );
  return (
    <Grid
      container
      alignItems={'center'}
      alignContent='stretch'
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        padding: "1rem 3rem",
        borderRadius: "15px",
        marginBottom: "2rem"
      })}
    >
      <Grid item xs>
        <Typography variant="h2" sx={{ flex: 1 }}>
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ flex: 1 }}>
          {reference}
        </Typography>
      </Grid>

      <Grid item xs>
        <Title
          title={"Status"}
          description={
            <Chip
              label={state}
              color={statePresets[state]}
              variant="outlined"
              sx={{ my: '1rem', fontSize: "1.5rem" }}
            />
          }
        />
      </Grid>

      <Grid item xs textAlign={"right"}>
        <Title
          title={"Created on "}
          description={new Date(createdAt * 1000).toDateString()}
        />
        <Title
          title={"Last update on "}
          description={new Date(updatedAt * 1000).toDateString()}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
