import { List, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import pic from "../../../assets/pic_1 (1).png";
import ChatOptionItem from "./ChatOptionItem";

const options = [
  {
    imgSrc: pic,
    main: "Esther Howard",
    secondary: "http://www.konmatfix.com",
    lastMessageTime: "10:00 AM",
    newMessages: 1,
  },
  {
    imgSrc: pic,
    main: "Esther Howard",
    secondary: "http://www.konmatfix.com",
    lastMessageTime: "10:00 AM",
    newMessages: 10,
  },
  {
    imgSrc: pic,
    main: "Esther Howard",
    secondary: "http://www.konmatfix.com",
    lastMessageTime: "10:00 AM",
  },
  {
    imgSrc: pic,
    main: "Esther Howard",
    secondary: "http://www.konmatfix.com",
    lastMessageTime: "10:00 AM",
  },
  {
    imgSrc: pic,
    main: "Esther Howard",
    secondary: "http://www.konmatfix.com",
    lastMessageTime: "10:00 AM",
  },
];

export default function ChatFriendsDisplay() {
  return (
    <Stack spacing={2}>
      <SearchBar />
      <List>
        {options.map((option, index) => (
          <ChatOptionItem key={index} {...option} />
        ))}
      </List>
    </Stack>
  );
}
