import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";

export default function ContactListItem({ id, avatar, name, address, email, handleClick }) {
  return (
    <ListItem
      key={id}
      onClick={handleClick}
      secondaryAction={<Box sx={{ display: { xs: "none", sm: "inline" } }}>
        <IconButton edge="end" aria-label="call">
          <PhoneAndroidTwoToneIcon />
        </IconButton>
        <IconButton edge="end" aria-label="message">
          <MessageTwoToneIcon />
        </IconButton>
      </Box>}
    >
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={name ?? "Add a name"}
        secondary={address ?? "Add an address"} />
    </ListItem>
  );
}
