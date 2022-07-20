import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

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
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
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
