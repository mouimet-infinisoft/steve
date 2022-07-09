import { Card, CardActionArea, Typography, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActionTile = ({ title, description, to }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 400, height: 250 }} onClick={() => navigate(to)}>
      <CardActionArea sx={{ width: 400, height: 250, display:'flex', gap: 2, }}>
        <Box sx={{width: '64px', backgroundColor: 'yellow', height: 250}}>
         
        </Box>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ActionTile;
