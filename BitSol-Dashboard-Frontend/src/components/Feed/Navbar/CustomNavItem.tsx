import { Button } from "@mui/material";
import { useContext } from "react";
import { Link, useLocation } from "react-router";
import { notificationContext } from "../../../contexts/NotificationProvider";

export default function CustomNavItem({
  name,
  to,
}: {
  name: string;
  to: string;
}) {
  const pathname = useLocation().pathname;
  const { value, toggle } = useContext(notificationContext);

  const classes = {
    color: pathname === to && !value ? "primary.main" : "customGrey.dark",
    textTransform: "none",
    minWidth: "auto",
    "& span": {
      height: "auto",
      width: "auto",
    },
    padding: 0,
  };

  function handleToggle() {
    if (value) toggle();
  }

  return (
    <Button
      sx={{
        ...classes,
      }}
      component={Link}
      to={to}
      onClick={handleToggle}
    >
      {name}
    </Button>
  );
}
