import { Card, CardActionArea, Typography, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const ActionTile = ({ title, description, to, icon }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 400, height: 250 }} onClick={() => navigate(to)}>
      <CardActionArea sx={{ width: 400, height: 250, display:'flex', gap: 2, }}>
        <Box sx={{width: 125, backgroundColor: 'yellow', height: 250, overflow: 'hidden'}}>
         <AccountBoxOutlinedIcon sx={{color: 'rgba(145,145,145,0.5)', width: '10em', height: '10em'}}/>
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
