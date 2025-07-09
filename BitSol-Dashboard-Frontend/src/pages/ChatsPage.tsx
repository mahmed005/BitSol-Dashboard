import { Box, Grid, Stack, Typography } from "@mui/material";
import LeftSection from "../components/Feed/Chats/LeftSection";
import ChatFriendsDisplay from "../components/Feed/Chats/ChatFriendsDisplay";
import Chats from "../components/Feed/Chats/Chats";
import pic from "../assets/pic_1 (1).png";

const messages = [
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: false,
  },
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: true,
  },
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: false,
  },
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: true,
  },
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: false,
  },
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: true,
  },
  {
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    time: "10:00 AM",
    sentByUser: false,
  },
];

export default function ChatsPage() {
  return (
    <Grid container>
      <Grid height={"100dvh"} size={{ xs: 0, md: 1 }}>
        <LeftSection />
      </Grid>
      <Grid
        display={{
          xs: "none",
          md: "block",
        }}
        size={{ xs: 0, md: 5, lg: 4 }}
      >
        <Stack
          sx={{
            minHeight: "100dvh",
            backgroundColor: "#EEF4FD",
          }}
          spacing={4}
          paddingX={3}
          paddingY={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Chats
          </Typography>
          <ChatFriendsDisplay />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 7 }}>
        <Box paddingX={3} paddingY={2} minHeight={"100dvh"}>
          <Chats messages={messages} imgSrc={pic} name="Eleanor Pena" />
        </Box>
      </Grid>
    </Grid>
  );
}
