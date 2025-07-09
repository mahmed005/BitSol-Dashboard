import { useContext, useState } from "react";
import CustomButton from "../../UI/CustomButton";
import { notificationContext } from "../../../contexts/NotificationProvider";
import pic from "../../../assets/pic_1 (1).png";
import { Menu, MenuItem, MenuList } from "@mui/material";
import NotificationItem from "./NotificationItem";

const notifications = [
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: true,
  },
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: true,
  },
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: true,
  },
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: true,
  },
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: true,
  },
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: false,
  },
  {
    imgSrc: pic,
    main: "Ask CDCR San Quintin State Prison 2008. We installed Purex",
    secondary: "3 hours ago",
    isNew: false,
  },
];

export default function NotificationButton() {
  const { value, toggle } = useContext(notificationContext);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!value) setAnchor(e?.currentTarget);
    else setAnchor(null);
    toggle();
  }

  return (
    <>
      <CustomButton
        classes={{
          color: value ? "primary.main" : "customGrey.dark",
        }}
        text="Notifications"
        importance="text"
        onClick={handleOnClick}
      />
      <Menu
        id="notification-menu"
        anchorEl={anchor}
        onClose={toggle}
        open={value}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuItem
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <CustomButton
            text="View All"
            importance="text"
            classes={{
              textDecoration: "underline",
            }}
          ></CustomButton>
        </MenuItem>
        <MenuList>
          {notifications.map((notification, index) => (
            <NotificationItem {...notification} key={index} />
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
