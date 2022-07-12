import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const IconListItem = ({
  icon = <Avatar alt="avatar" />,
  title,
  subtitle,
  key,
  ...props
}) => {
  return (
    <ListItem alignItems="flex-start" key={key}>
      <ListItemAvatar>{icon}</ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItem>
  );
};

export default function IconList({ items }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {items.map((props, index) => (
        <>
          <IconListItem {...props} key={index} />
          {items.count < index && (
            <Divider variant="inset" component="li" key={index + "divider"}/>
          )}
        </>
      ))}
    </List>
  );
}
