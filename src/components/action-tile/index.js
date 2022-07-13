import { Card, CardActionArea, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const ActionTile = ({ title, description, to, icon }) => {
  return (
    <Card sx={{ width: 350, height: 125 }} to={to} component={Link}>
      <CardActionArea sx={{ width: 350, height: 125, display: "flex", gap: 2 }}>
        <Box
          sx={(theme) => ({
            width: "7em",
            backgroundColor: theme.palette.primary.main,
            height: 125,
            overflow: "hidden"
          })}
        >
          <AccountBoxOutlinedIcon
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              opacity: 0.7,
              width: "5rem",
              height: "5em"
            })}
          />
        </Box>
        <Box flex={1}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ActionTile;
