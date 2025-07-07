import { Button } from "@mui/material";
import { Link, useLocation } from "react-router";

export default function CustomNavItem({
  name,
  to,
}: {
  name: string;
  to: string;
}) {
  const pathname = useLocation().pathname;

  const classes = {
    color: pathname === to ? "primary.main" : "customGrey.dark",
    textTransform: "none",
    minWidth: "auto",
    "& span": {
      height: "auto",
      width: "auto",
    },
    padding: 0,
  };

  return (
    <Button
      sx={{
        ...classes,
      }}
      component={Link}
      to={to}
    >
      {name}
    </Button>
  );
}
