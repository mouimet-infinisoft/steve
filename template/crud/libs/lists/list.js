import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { useMicroContext } from "@/core/state";
import {config} from '../../config'

/**
 * Small screen list
 * @param {*} param0
 * @returns
 */
export default function AppList({list}) {
  const { store } = useMicroContext();

  return (
    <Box
      sx={{ flexGrow: 1, maxWidth: 752, display: { xs: "block", md: "none" } }}
    >
      <Grid item xs={12} md={6}>
        <List>
          {
          list?.filter?.((i) => i?.state === "active")?.map(({ id, avatar, name, address, email, ...props }) => (
              <ListItem
                onClick={() => {
                  store.mutate((s) => ({
                    ...s,
                    contacts: { ...s.contacts, selectedId: id }
                  }));
                  store.emit(`${config.feature.name}.click`, { id });
                }}
                key={`card-${id}`}
                secondaryAction={
                  <Box sx={{ display: { xs: "none", sm: "inline" } }}>
                    <IconButton edge="end" aria-label="call">
                      <PhoneAndroidTwoToneIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="message">
                      <MessageTwoToneIcon />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar src={avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={name ?? "Add a name"}
                  secondary={address ?? "Add an address"}
                />
              </ListItem>
            ))}
        </List>
      </Grid>
    </Box>
  );
}
