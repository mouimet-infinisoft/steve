import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Title from "@/components/title";
import Paper from "@mui/material/Paper";
import ContactDetails from "./libs/details/details";

const Layout = () => {
  return (
    <Paper>
      <Title title="Contacts" />

      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: theme.palette.background.default,
          padding: "2rem",
          borderRadius: "15px",
          marginBottom: "2rem"
        })}
      >
        <Box>Search box</Box>

        <Box
          sx={(theme) => ({
            display: "flex",
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
