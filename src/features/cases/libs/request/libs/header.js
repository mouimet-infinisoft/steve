import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMicroState } from "@/core/state";
import { config } from "@/features/cases/config";
import { matchPath, useLocation } from "react-router-dom";
import { Chip, Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

const Header = ({ title, sx = {}, ...props }) => {
  const theme = useTheme();
  const statePresets = {
    todo: "info",
    inprogress: "info",
    blocked: "error",
    waiting: "warning",
    suspended: "error",
    complete: "success"
  };

  const pathname = useLocation()?.pathname;
  const query = matchPath(`${config.feature.name}/:id/*`, pathname);
  const item = useMicroState(
    (s) => s?.[config.feature.name]?.list?.[query?.params?.id]
  );
  const { id, reference, step, state } = React.useMemo(
    () => item ?? {},
    [item]
  );
  return (
    // <Box
    //   {...props}
    //   sx={(theme) => ({
    //     backgroundColor: theme.palette.background.default,
    //     display: "flex",
    //     alignItems: "flex-start",
    //     // flexDirection: "column",
    //     padding: "1rem 3rem",
    //     borderRadius: "15px",
    //     marginBottom: "2rem",
    //     ...sx
    //   })}
    // >
    //   <Box flex={"auto"}>
    //     <Typography variant="h2" sx={{ flex: 1 }}>
    //       {title}
    //       <Chip label={state} color={statePresets[state]} sx={{ mx: "3rem" }} />
    //     </Typography>
    //     <Typography variant="h5" color="text.secondary" sx={{ flex: 1 }}>
    //       {reference}
    //     </Typography>
    //   </Box>
    //   <Box flex={1} flexBasis={66}>
    //     middle
    //   </Box>
    //   <Box flex={"auto"}>end</Box>
    // </Box>
    <Grid
      container
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        padding: "1rem 3rem",
        borderRadius: "15px",
        marginBottom: "2rem"
      })}
    >
      <Grid item xs border={"0px solid red"}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography variant="h2" sx={{ flex: 1 }}>
              {title}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ flex: 1 }}>
              {reference}
            </Typography>
          </Box>
          <Box
            height={"100%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="subtitle1" sx={{ flex: 1 }} textAlign="center">
              State
            </Typography>
            <Chip
              label={state}
              color={statePresets[state]}
              sx={{ mx: "3rem" }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} pl="7rem" border={"0px solid red"}>
        middle
      </Grid>
      <Grid item xs textAlign={"right"} border={"0px solid red"}>
        right{" "}
      </Grid>
    </Grid>
  );
};

export default Header;
