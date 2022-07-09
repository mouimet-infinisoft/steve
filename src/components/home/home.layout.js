import Box from "@mui/material/Box";
import ActionTile from "../action-tile";
import { Typography, Divider } from "@mui/material";
import IconList from "../icon-list";
import { items } from "./mock/news";
import { actions } from "./mock/actions";
import AppCalendar from "../calendar";
import Checklist from "../checklist";
import {checklist} from './mock/checklist'

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
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box
        sx={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 20,
          height: "calc(100vh - 400px)"
        }}
      >
        <Box sx={{ height: "calc(100vh - 400px)" }}>
          <Typography variant="h2" gutterBottom component="div">
            Calendar
          </Typography>
          <AppCalendar />
          <Box sx={{ display: "flex" }}>
            <Divider sx={{width: '350px', margin: '1rem'}} />
          </Box>

          <Checklist list={checklist}/>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
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
          <Typography variant="h2" gutterBottom component="div">
            News
          </Typography>
          <IconList items={items} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
