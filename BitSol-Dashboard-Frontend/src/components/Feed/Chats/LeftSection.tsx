import { Badge, List, ListItem, Stack } from "@mui/material";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LeftListItem from "./LeftListItem";
import pfp from "../../../assets/profile_pic.png";
import { useState } from "react";

const upperList = [
  {
    icon: <ListAltOutlinedIcon />,
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
  },
  {
    icon: (
      <Badge badgeContent={1} color="primary">
        <ChatBubbleOutlineOutlinedIcon />
      </Badge>
    ),
  },
  {
    icon: <GroupOutlinedIcon />,
  },
];

export default function LeftSection() {
  const [selected, setSelected] = useState(0);

  return (
    <Stack
      height={"100%"}
      sx={{
        backgroundColor: "#D6E6FF",
      }}
      justifyContent={"space-between"}
    >
      <List>
        {upperList.map((item, index) => (
          <LeftListItem
            setSelected={setSelected}
            id={index}
            key={index}
            isOpened={selected === index}
          >
            {item.icon}
          </LeftListItem>
        ))}
      </List>
      <List>
        <LeftListItem
          isOpened={selected === 4}
          id={4}
          setSelected={setSelected}
        >
          <SettingsOutlinedIcon />
        </LeftListItem>
        <ListItem>
          <img className="rounded-[40%]" src={pfp} alt="ProfilePic" />
        </ListItem>
      </List>
    </Stack>
  );
}
