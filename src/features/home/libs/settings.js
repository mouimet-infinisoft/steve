import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

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
            padding: "2rem",
            paddingRight: 0,
          }}
        >
          Settings
          <List sx={(theme) => ({ width: '100%', bgcolor: theme.palette.background.default })}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText sx={{ paddingTop: 1.5 }}
          primary="Appearence"        
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText sx={{ paddingTop: 1.5 }}
          primary="Settings" 
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ margin: 0, padding: 0 }} />
      <Box
        sx={{
          padding: "2rem",
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
        <Box sx={{ height: "calc(100vh - 400px)", padding: "2rem" }}>Settings</Box>
      </Box>
    </>
  );
};

export default Settings;
