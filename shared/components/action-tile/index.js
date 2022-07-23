import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ActionTile = ({ title, description, to, icon }) => {
  return (
    <Card sx={{ width: 350, height: 120 }} to={to} component={Link}>
      <CardActionArea sx={{ width: 350, height: 125, display: "flex", gap: 2 }}>
        <Box
          sx={(theme) => ({
            width: "7.5em",
            backgroundColor: theme.palette.primary.main,
            height: 125,
            overflow: "hidden"
          })}
        >
        {icon}
        </Box>
        <Box flex={1}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};


export default ActionTile;
