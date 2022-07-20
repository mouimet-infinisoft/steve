import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Title from "@/components/title";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMicroContext } from "@/core/state";
import { config } from "../../config";
import { onCreate } from "../../services";
import SearchInput from "@/components/search";

const Layout = () => {
  const { store } = useMicroContext();

  const handleOnChange = (e) =>
    store.emit(`${config.feature.name}.search`, {
      term: e.target.value
    });

  return (
    <>
      <Title title={config.feature.name}>
        <SearchInput handleOnChange={handleOnChange} />

        <Fab
          variant="extended"
          color="primary"
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
        </Box>
      </Box>
    </>
  );
};

export default Layout;
