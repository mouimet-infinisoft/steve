import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";
import Title from "@/components/title";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMicroContext } from "@/core/state";
import { config } from "@/config/index";
import { onSearch } from "@/core/services/triggers/onSearch";
import { onCreate } from "@/core/services/triggers/onCreate";
import Search from "@/components/search";
import List from "@/app/lists";

const Layout = () => {
  const { store } = useMicroContext();
  const navigate = useNavigate();

  return (
    <>
      <Title title={config.feature.name}>
        <Box>
          <Search
            handleOnChange={(e) => onSearch({ store, value: e.target.value })}
          />
        </Box>
        <Fab
          variant="extended"
          color="primary"
          onClick={onCreate(store, (id) =>
            navigate(`/${config.feature.name}/${id}`)
          )}
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
          <List />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
