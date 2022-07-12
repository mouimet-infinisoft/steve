import Box from "@mui/material/Box";
import LinkTabs from "@/components/tabs/link-tabs";
import { tabs } from "./mock/tabs";
import { Outlet } from "react-router-dom";
import Title from "@/components/title";
import Paper from "@mui/material/Paper";
import { generateId } from "@/helpers";

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
          <LinkTabs tabs={tabs} key={generateId(Math.random())}/>
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
