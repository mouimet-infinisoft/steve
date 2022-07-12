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
import { onCreate } from "./services";

const Layout = () => {
  const { store } = useMicroContext();

  return (
    <Paper>
      <Title title={config.feature.name}>
        <Box>
          <TextField
            placeholder="Search ..."
            variant="standard"
            InputProps={{
              style: { fontSize: "2rem" },
              startAdornment: (
                <InputAdornment sx={{ mr: "0.5rem" }}>
                  <SearchTwoToneIcon sx={{ width: "2rem", height: "2rem" }} />
                </InputAdornment>
              )
            }}
            onChange={(e) =>
              store.emit(`${config.feature.name}.search`, { term: e.target.value })
            }
          />
        </Box>
        <Fab
          variant="extended"
          onClick={onCreate(store)}
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
