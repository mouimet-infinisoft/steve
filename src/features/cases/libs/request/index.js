import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "./libs/header";
import IconMenu from "./libs/menu";

const Layout = () => {
  return (
    <Box>
      <Header title={"Request"}>
        <div>tokette</div>
      </Header>

      <Box
        sx={(theme) => ({
          display: "flex",
          gap: 6,
          borderRadius: "15px"
        })}
      >
        <Box
          sx={(theme) => ({
            flex: 1,
            padding: "1rem 3rem",
            backgroundColor: theme.palette.background.default,
            borderRadius: "15px",
            height: "fit-content"
          })}
        >
          <IconMenu />
        </Box>

        <Box
          sx={(theme) => ({
            flex: 3,
            padding: "1rem 3rem",
            backgroundColor: theme.palette.background.default,
            borderRadius: "15px"
          })}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
