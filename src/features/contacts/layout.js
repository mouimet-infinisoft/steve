import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Title from "@/components/title";
import Paper from "@mui/material/Paper";
import Details from "./libs/details/details";
import { Fab, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMicroContext } from "@/core/state";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { config } from "./config";
import { useOnCreate } from "./services/index";

const Layout = () => {
  const { store } = useMicroContext();
  const {onCreate} = useOnCreate(store)

  return (
    <Paper>
      <Title title={config.feature.name}>
        <Box>
          <TextField
            placeholder="Search ..."
            type="search"
            variant="standard"
            sx={(theme) => ({
              padding: "0.25rem 1rem",
              backgroundColor: theme.palette.primary.dark,
              borderRadius: theme.shape.borderRadius,
              outline: `1px ${theme.palette.primary.light} solid`,
              ":hover, :active, :focus-within": {
                outline: `3px ${theme.palette.primary.dark} solid !important`,
                backgroundColor: theme.palette.primary.light
              },
              "*:before, *:after": {
                borderBottom: "0 !important"
              }
            })}
            InputProps={{
              style: { fontSize: "1.5rem" },
              sx: {
                "MuiInput-root:hover:not(.Mui-disabled):before": {
                  borderBottom: 0
                }
              },
              startAdornment: (
                <InputAdornment sx={{ mr: "0.5rem" }}>
                  <SearchTwoToneIcon
                    color="primary"
                    sx={{ width: "2rem", height: "2rem" }}
                  />
                </InputAdornment>
              )
            }}
            onChange={(e) =>
              store.emit(`${config.feature.name}.search`, {
                term: e.target.value
              })
            }
          />
        </Box>
        <Fab
          variant="extended"
          color="primary"
          onClick={onCreate}
          sx={{
            display: { xs: "none", md: "inherit" }
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Create
        </Fab>
      </Title>

      <Box
        sx={(theme) => ({
          display: "flex",
          position: "relative",
          flexDirection: "column",
          gap: 2,
          backgroundColor: theme.palette.background.default,
          padding: "2rem",
          borderRadius: "15px",
          marginBottom: "2rem"
        })}
      >
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            right: "2rem",
            top: "-1rem",
            display: { xs: "inherit", md: "none" }
          }}
          onClick={onCreate}
        >
          <AddIcon />
        </Fab>

        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: 4,
            backgroundColor: theme.palette.background.default,
            borderRadius: "15px",
            marginBottom: "2rem"
          })}
        >
          <Outlet />
          <Details visible={false} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Layout;
