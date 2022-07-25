import { generateId } from "@/helpers/generateid.js";
import React from "react";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import { Typography } from "@mui/material";

const generateEvents = (count) =>
  new Array(count)
    .fill(0)
    .reduce((_events) => ({ ..._events, ...createEvent() }), {});

const createEvent = () => {
  return {
    [generateId()]: {
      timeline: {
        seperator: <AccessTimeTwoToneIcon />,
        content: (
          <>
            <Typography variant="h4">Title</Typography>
            <Typography variant="h6" color="text.secondary">
              Description
            </Typography>
          </>
        ),
        opposite: (
          <Typography
            variant="6"
            sx={{ ":hover": { cursor: "pointer", transform: "scale(1.1)" } }}
          >
            Time
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

export const featurehistory = () => [
  {
    id: "klhlojassasssaso897y9",
    address: "3649 rue Notre-Dame, Candiax, H72D92",
    state: "active",
    name: "BBB Ouimet",
    label: "BBB Ouimet",
    email: "dog@pound.net",
    __meta__: {
      action: "creation",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    }
  },
  {
    id: "klhlojassasssaso897y9",
    name: "Martin Ouimet",
    label: "Martin Ouimet",
    email: "cat@pound.net",
    tags: ["person"],
    state: "active",
    __meta__: {
      action: "update",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    }
  },
  {
    id: "klhlojassasssaso897y9",
    name: "CCC Ouimet",
    label: "CCC Ouimet",
    email: "meow@pound.net",
    telephones: [
      { key: 111976, label: "514-777-5555", tag: "Work" },
      { key: 567222, label: "540-789-2121", tag: "Mobile" }
    ],
    tags: ["person"],
    state: "active",
    __meta__: {
      action: "delete",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    }
  },
  {
    id: "klhlojassasssaso897y9",
    avatar: "",
    name: "Tukette",
    label: "Tukette",
    address: "3649 rue Notre-Dame, Candiax, H72D92",
    telephones: [
      { key: 111976, label: "514-777-5555", tag: "Work" },
      { key: 567222, label: "540-789-2121", tag: "Mobile" }
    ],
    email: "ant@pound.net",
    tags: ["person"],
    state: "active",
    __meta__: {
      action: "update",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    },
    __relation__: [{ id: "121313424", key: "employer", value: "pfizer" }],
    __extra__: [{ id: "@212131", key: "Allergy", value: "Peannuts" }]
  },
  {
    id: "kngfhnhfgngfhnfghngfhn9",
    name: "Martin FFF",
    email: "mad@pound.net",
    telephones: [{ key: 111976, label: "514-444-5555", tag: "Work" }],
    __meta__: {
      action: "update",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    }
  },
  {
    id: "kdfasdfsdafdsfsdghhoyo897y9",
    email: "john.oiuime@jjj.com",
    __meta__: {
      action: "update",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jonh Ouimet",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    }
  },
  {
    address: "3649 rue Notre-Dame, Candiax, H72D92",
    state: "active",
    name: "BBB Ouimet",
    label: "BBB Ouimet",
    email: "dog@pound.net",
    __meta__: {
      action: "creation",
      timestamp: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    }
  }
];
