import ActionTile from "@/components/action-tile";
import AppCalendar from "@/components/calendar";
import Checklist from "@/components/checklist";
import { generateId } from "@/helpers";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { actions } from "../mock/actions";
import { checklist } from "../mock/checklist";

const ActionList = ({ actions }) =>
actions.map((props) => (
  <DashboardActionTile {...props} key={generateId(Math.random())} />
));

const DashboardActionTile = ({ title, description, to, ...props }) => (
  
<ActionTile
{...props}

  key={generateId(Math.random())}
  title={
    <Typography variant="h3" component="div">
      {title}
    </Typography>
  }
  // description={
  //   <Typography variant="subtitle1" gutterBottom component="div">
  //     {description}
  //   </Typography>
  // }
  to={to}
/>
);
   

const Dashboard = () => {
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
          <AppCalendar />
          <Box sx={{ display: "flex" }}>
            <Divider sx={{ width: "350px", margin: "1rem" }} />
          </Box>

          <Checklist list={checklist} key={generateId(Math.random())} />
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
        <ActionList actions={actions} key={generateId(Math.random())} />
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
          {/* <IconList items={items} key={generateId(Math.random())} /> */}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
