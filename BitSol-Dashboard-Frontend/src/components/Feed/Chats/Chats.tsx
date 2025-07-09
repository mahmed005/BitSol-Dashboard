import { Avatar, List, Stack, Typography } from "@mui/material";
import ChatItem from "./ChatItem";

export type Message = {
  text: string;
  time: string;
  sentByUser: boolean;
};

export default function Chats({
  imgSrc,
  name,
  messages,
}: {
  imgSrc: string;
  name: string;
  messages: Message[];
}) {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <Avatar
          src={imgSrc}
          sx={{
            width: "3rem",
            height: "3rem",
          }}
        />
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
      </Stack>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {messages.map((message, index) => (
          <ChatItem {...message} key={index} />
        ))}
      </List>
    </Stack>
  );
}
