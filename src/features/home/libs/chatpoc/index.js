import AmityClient, { ApiRegion, MessageRepository } from "@amityco/js-sdk";
import ChatChannel from "./chatChannel";

const Chat = ({ userId, displayName }) => {
  const client = new AmityClient({
    apiKey: "b0eebb0c6fd2f86d4a64df1e060e168884588aeaeb336e2d",
    apiRegion: ApiRegion.US
  });

  client.registerSession({ userId, displayName });

  const messageRepo = new MessageRepository("channel1");

  return <ChatChannel messageRepo={messageRepo} />;
};

export default Chat;
