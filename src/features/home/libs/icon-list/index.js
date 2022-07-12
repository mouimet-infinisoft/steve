import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { generateId } from "@/helpers";

const IconListItem = ({
  avatar = <Avatar alt="avatar" src="/static/images/avatar/1.jpg" />,
  title,
  subtitle,
  description,
  ...props
}) => {
  return (
    <ListItem alignItems="flex-start" key={generateId(Math.random())}>
      <ListItemAvatar key={generateId(Math.random())}>{avatar}</ListItemAvatar>
      <ListItemText
        key={generateId(Math.random())}
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
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      key={generateId(Math.random())}
    >
      {items.map((props, index) => (
        <>
          <IconListItem {...props} key={generateId(Math.random())} />
          {items.count < index && (
            <Divider
              variant="inset"
              component="li"
              key={generateId(Math.random())}
            />
          )}
        </>
      ))}
    </List>
  );
}
