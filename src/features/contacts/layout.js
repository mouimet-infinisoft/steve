import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Title from "@/components/title";
import Paper from "@mui/material/Paper";
import ContactDetails from "./libs/details/details";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMicroContext } from "@/core/state";
import { generateId } from "@/helpers";

const Layout = () => {
  const { store } = useMicroContext();
  const onCreate = () => {
    const id = generateId();
    store.mutate((s) => ({
      ...s,
      contacts: {
        ...s.contacts,
        selectedId: id,
        list: { ...s.contacts.list, [id]: { id, telephones: [], state: 'active', tags:[''] } }
      }
    }));
    store.emit("contact.create.click", { id });
  };

  return (
    <Paper>
      <Title title="Contacts" />

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

        <Fab
          variant="extended"
          onClick={onCreate}
          color="primary"
          sx={{
            position: "absolute",
            right: "2rem",
            top: "-1rem",
            display: { xs: "none", md: "inherit" }
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Create
        </Fab>

        <Box>Search box</Box>

        <Box
          sx={(theme) => ({
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            backgroundColor: theme.palette.background.default,
            borderRadius: "15px",
            marginBottom: "2rem"
          })}
        >
          <Outlet />
          <ContactDetails visible={false} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Layout;
