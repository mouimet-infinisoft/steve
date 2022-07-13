import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const ActionTile = ({to, title}) => {
  const lists = [
    { icon: <ContactsTwoToneIcon sx={(theme) => ({
      color: theme.palette.primary.contrastText,
      opacity: 0.7,
      width: "5rem",
      height: "5em",
      marginLeft: 1.295,
      marginTop: 0.18
    })} /> },
    { icon: <MessageTwoToneIcon sx={(theme) => ({
      color: theme.palette.primary.contrastText,
      opacity: 0.7,
      width: "5rem",
      height: "5em"
    })} /> },
    { icon: <CorporateFareTwoToneIcon sx={(theme) => ({
      color: theme.palette.primary.contrastText,
      opacity: 0.7,
      width: "5rem",
      height: "5em"
    })} /> },
    { icon: <FolderTwoToneIcon  sx={(theme) => ({
      color: theme.palette.primary.contrastText,
      opacity: 0.7,
      width: "5rem",
      height: "5em"
    })} /> },
  ]; 

  return (
    <Card sx={{ width: 350, height: 120 }} to={to} component={Link}>
      {lists.map(({ icon }) => (

      <CardActionArea sx={{ width: 350, height: 125, display: "flex", gap: 2 }}>
        <><Box
          sx={(theme) => ({
            width: "7.5em",
            backgroundColor: theme.palette.primary.main,
            height: 125,
            overflow: "hidden"
          })}
        >
          {icon}
        </Box>
      </>


        <Box flex={1}>
        <Typography variant="h5">{title}</Typography>
      </Box>
        
          
      </CardActionArea>
        ))}

    </Card>
  );
};

export default ActionTile;

     