import Box from "@mui/material/Box";
import ActionTile from "../../../components/action-tile";
import { Typography, Divider } from "@mui/material";
import IconList from "../../../components/icon-list";
import { items } from "../mock/news";
import { actions } from "../mock/actions";
import AppCalendar from "../../../components/calendar";
import Checklist from "../../../components/checklist";
import { checklist } from "../mock/checklist";

const Settings = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 20,
          height: "calc(100vh - 400px)"
        }}
      >
        <Box
          sx={{
            height: "calc(100vh - 400px)",
            border: "1px solid",
            borderColor: "rgba(255, 255, 255, 0.12)",
            borderRadius: "15px",
            padding: "2rem"
          }}
        >
          Settings
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          flexGrow: 2,
          flexBasis: 60
        }}
      >
        Settings
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 20,
          height: "calc(100vh - 400px)"
        }}
      >
        <Box sx={{ height: "calc(100vh - 400px)" }}>Settings</Box>
      </Box>
    </>
  );
};

export default Settings;
