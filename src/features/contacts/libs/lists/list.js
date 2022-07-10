import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Small screen list
 * @param {*} param0 
 * @returns 
 */
export default function ContactList({ list }) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <List>
          {list?.map(
            ({
              id,
              avatar,
              name,
              address,
              email,
              ...props
            }) => (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={address}
                />
              </ListItem>
            )
          )}
        </List>
      </Grid>
    </Box>
  );
}
