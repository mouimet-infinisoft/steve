import Box from "@mui/material/Box";
import BasicTabs from "@/components/tabs/basic";
import { tabs } from "./mock/tabs";
import { Outlet } from "react-router-dom";
import Title from "@/components/title";
import Paper from "@mui/material/Paper";

const HomeLayout = () => {
  return (
    <Paper>
      <Title title="Home" />

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
        <Box>
          <BasicTabs tabs={tabs} />
        </Box>

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
        </Box>
      </Box>
    </Paper>
  );
};

export default HomeLayout;
