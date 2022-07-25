import { generateId } from "@/helpers/generateid.js";
import React from "react";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import { Typography } from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
const actionsIcons = {
  update: <UpdateIcon />,
  delete: <DeleteForeverIcon />,
  create: <NoteAddIcon />
}
const generateEvents = (count) =>
  new Array(count)
    .fill(0)
    .reduce((_events) => ({ ..._events, ...createEvent() }), {});

const createEvent = () => {
  const actions = ["create", "update", "delete"];
  const actionOnTimeLine = actions[Math.floor(Math.random()*actions.length)]
  const actionWithIcon = actionsIcons[actions[Math.floor(Math.random()*actions.length)]]
  return {
    [generateId()]: {
      timeline: {
        seperator: actionWithIcon,
        content: (
          <>
            <Typography variant="h6" textTransform={"capitalize"}>{actionOnTimeLine}</Typography>
            <Typography variant="body2" color="text.secondary">
              blanko.komain@gmail.com
            </Typography>
          </>
        ),
        opposite: (
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ ":hover": { cursor: "pointer", transform: "scale(1.1)" } }}
          >
            {new Date().toDateString()} 
          </Typography>
        ),
        sx: {
          "[class*=MuiTypography-root-MuiTimelineOppositeContent-root]": {
            display: "flex",
            alignItems: "center"
          }
        }
      },
      details: (
        <>
          <h1>Whatever header</h1>
          <h6>Description whatever</h6>
        </>
      )
    }
  };
};

export const historyMocks = (count) => ({
  events: generateEvents(count),
  next: () => null,
  isComplete: true
});