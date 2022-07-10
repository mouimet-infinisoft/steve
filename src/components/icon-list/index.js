import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const IconListItem = ({
  avatar = <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
  title,
  subtitle,
  description
}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>{avatar}</ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body1"
              color="text.primary"
            >
              {subtitle}
            </Typography>
            {" -- "}
            {description}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};


export default function IconList({ items }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {items.map((props, index) => (
        <>
          <IconListItem {...props} />
          {items.count < index && <Divider variant="inset" component="li" />}
        </>
      ))}
    </List>
  );
}
