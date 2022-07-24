import ThemeToggleSwitch from "@/core/theme/components/toggle";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useTheme } from "@mui/system";

const Tools = () => {
  const theme = useTheme();
  const [messagesMenuPosition, setMessageMenuPosition] = React.useState(null);
  const showMessagesMenu = Boolean(messagesMenuPosition);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const showMessages = (event) => {
    setMessageMenuPosition(event.currentTarget);
  };
  const hideMessagesMenu = () => {
    setMessageMenuPosition(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="span"
        sx={{ marginRight: 1, display: { xs: "none", sm: "block" } }}
      >
        Infini
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="span"
        sx={(theme)=>({ color: theme.palette.primary.main, display: { xs: "none", sm: "block" } })}
      >
        soft
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <ThemeToggleSwitch />
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={showMessages}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={messagesMenuPosition}
        open={showMessagesMenu}
        onClose={hideMessagesMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{ sx:{ width:theme.spacing(32)}}}
      >
        <MenuItem onClick={hideMessagesMenu}>

        <Avatar /> Profile
        </MenuItem>
      </Menu>
 
    </>
  );
};

export default Tools