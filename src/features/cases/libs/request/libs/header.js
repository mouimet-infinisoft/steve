import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMicroState } from "@/core/state";
import { config } from "@/features/cases/config";
import { matchPath, useLocation } from "react-router-dom";
import { Chip } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";

const Header = ({ title, children, sx = {}, ...props }) => {
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
    <Box
      {...props}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "1rem 3rem",
        borderRadius: "15px",
        marginBottom: "2rem",
        ...sx
      })}
    >
      <Typography variant="h2" sx={{ flex: 1 }}>
        {title}
        <Chip label={state} color={statePresets[state]} sx={{mx: '3rem'}}/>
      </Typography>
      {children}
    </Box>
  );
};

export default Header;
