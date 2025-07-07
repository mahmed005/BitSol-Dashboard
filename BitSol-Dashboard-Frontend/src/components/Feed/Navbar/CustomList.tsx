import { List } from "@mui/material";
import CustomListItem from "./CustomListItem";

export const listItems = [
  {
    name: "Feed",
    to: "/",
  },
  {
    name: "Chats",
    to: "/chats",
  },
  {
    name: "Jobs",
    to: "/jobs",
  },
  {
    name: "Events",
    to: "/events",
  },
  {
    name: "Articles",
    to: "/articles",
  },
  {
    name: "People",
    to: "/people",
  },
];

export default function CustomList() {
  return (
    <List>
      {listItems.map((item, index) => (
        <CustomListItem key={index} name={item.name} to={item.to} />
      ))}
    </List>
  );
}
