import AmityClient, { ApiRegion, MessageRepository } from "@amityco/js-sdk";
import { Box, TextField, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { startTransition, useEffect, useState } from "react";

const ChatChannel = ({messageRepo}) => {
  const [messages, setMessages] = React.useState([]);

  useEffect(() => {
    messageRepo
      .messagesForChannel({ channelId: "channel1" })
      .on("dataUpdated", (models) => {
        // models will be an array of message objects
        startTransition(() => setMessages(models));
        models
          .forEach((message) => {
            console.log("Message: ", message);
          })
          .on("dataError", (error) => {
            // Every error has a code. You can control how your application should behave in response to the error.
            console.error(error);
          });
      });
  }, []);

  const sendMsg = ({ message }) =>
    messageRepo?.createTextMessage({
      channelId: "channel1",
      text: message,
      parentId: "exampleParentMessageId"
    });

  const [msg, setMsg] = useState("");

  return (
    <>
      <h2>Chat</h2>
      <Box
        sx={(theme) => ({
          width: "200px",
          height: "500px"
        })}
      >
        {messages.map(({ data, user, userId }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: userId === "1" ? "row" : "row-reverse"
            }}
          >
            {userId === "1" && (
              <Typography
                variant="body1"
                mr="1rem"
                sx={{
                  color: userId === "1" ? "inherit" : purple[200]
                }}
              >
                {user?.displayName}
              </Typography>
            )}

            <Typography
              variant="body1"
              sx={{
                color: userId === "1" ? "inherit" : purple[200]
              }}
            >
              {data?.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <TextField
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(msg);
            sendMsg({ message: msg });
            startTransition(() => setMsg(""));
          }
        }}
      />
    </>
  );
};

export default ChatChannel;
