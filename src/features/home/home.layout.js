import LinkTabs from "@/components/tabs/link";
import Title from "@/components/title";
import { generateId } from "@/helpers";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { tabs } from "./mock/tabs";

const HomeLayout = () => {
  return (
    <>
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
          <LinkTabs tabs={tabs} key={generateId(Math.random())} />
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
    </>
  );
};

export default HomeLayout;
