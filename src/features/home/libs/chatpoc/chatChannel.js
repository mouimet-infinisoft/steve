import { Box, TextField, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { startTransition, useEffect, useState } from "react";
import AmityClient, {
  ApiRegion,
  MessageRepository,
  ChannelRepository,
  ChannelType 
} from "@amityco/js-sdk";

const liveChannel = ChannelRepository.createChannel({ type: ChannelType.Conversation })

liveChannel.on('dataUpdated', () => {
  console.log('channel created');
});

const client = new AmityClient({
  apiKey: "b0eebb0c6fd2f86d4a64df1e060e168884588aeaeb336e2d",
  apiRegion: ApiRegion.US
});
const chan = "channel1";

const ChatChannel = () => {
  const [messages, setMessages] = React.useState([]);

  const registerMe = React.useCallback(async ({ userId, displayName }) => {
    client.registerSession({ userId, displayName });
    await ChannelRepository.joinChannel({
      channelId: chan
    });
  }, []);

  useEffect(() => {
    // MessageRepository.messagesForChannel({ channelId: chan }).on(
    //   "dataUpdated",
    //   (models) => {
    //     startTransition(() => setMessages(models));
    //   }
    // );

    // MessageRepository.messagesForChannel({ channelId: chan }).on(
    //   "dataError",
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }, []);

  const sendMsg = ({ message }) =>
    MessageRepository.createTextMessage({
      channelId: chan,
      text: message
    });

  const [msg, setMsg] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <>
      <h2>Chat</h2>
      <h4>{userId}</h4>
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
          if (e.key === "Enter" && msg) {
            sendMsg({ message: msg });
            startTransition(() => setMsg(""));
          }
        }}
      />
      <TextField
        value={userId}
        label="userid"
        placeholder="userid"
        onChange={(e) => setUserId(e.target.value)}
        onBlur={(e) => {
          registerMe({ userId: e.target.value, displayName: e.target.value });
        }}
      />
    </>
  );
};

export default ChatChannel;
