import Box from "@mui/material/Box";
import ActionTile from "../../components/action-tile";
import { Typography, Divider } from "@mui/material";
import IconList from "../../components/icon-list";
import { items } from "./mock/news";
import { actions } from "./mock/actions";
import AppCalendar from "../../components/calendar";
import Checklist from "../../components/checklist";
import { checklist } from "./mock/checklist";

const ActionList = ({ actions }) =>
  actions.map((props) => <HomeActionTile {...props} />);

const HomeActionTile = ({ title, description, to }) => (
  <ActionTile
    title={
      <Typography variant="h3" gutterBottom component="div">
        {title}
      </Typography>
    }
    description={
      <Typography variant="subtitle1" gutterBottom component="div">
        {description}
      </Typography>
    }
    to={to}
  />
);

const HomeLayout = () => {
  return (
    <Box
    sx={(theme) => ({
      display: "flex",
      flexDirection:'column',
      gap: 2,
      backgroundColor: theme.palette.background.default,
      padding: "2rem",
      borderRadius: "15px",
      marginBottom: "2rem"
    })}
  >

      <Box>
      <Typography variant="h2" gutterBottom>
          Calendar
        </Typography>
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

        <Box
          sx={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 20,
            height: "calc(100vh - 400px)"
          }}
        >
          <Box sx={{ height: "calc(100vh - 400px)" }}>
            <AppCalendar />
            <Box sx={{ display: "flex" }}>
              <Divider sx={{ width: "350px", margin: "1rem" }} />
            </Box>

            <Checklist list={checklist} />
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
          <ActionList actions={actions} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 20,
            height: "calc(100vh - 400px)"
          }}
        >
          <Box sx={{ height: "calc(100vh - 400px)" }}>
            <Typography variant="h2" gutterBottom>
              News
            </Typography>
            <IconList items={items} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
