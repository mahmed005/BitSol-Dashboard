import { ListItem, Stack, Typography } from "@mui/material";
import type { Message } from "./Chats";

export default function ChatItem({ text, time, sentByUser }: Message) {
  return (
    <ListItem
      sx={{
        alignSelf: sentByUser ? "flex-end" : "flex-start",
        color: sentByUser ? "white" : "black",
        backgroundColor: !sentByUser ? "#EEF4FD" : "primary.main",
        borderRadius: "10px",
        maxWidth: "60%",
      }}
    >
      <Stack>
        <Typography variant="body2">{text}</Typography>
        <Typography
          sx={{
            alignSelf: "flex-end",
          }}
          variant="body2"
        >
          {time}
        </Typography>
      </Stack>
    </ListItem>
  );
}
