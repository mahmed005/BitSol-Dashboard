import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router";

export default function CustomListItem({
  name,
  to,
}: {
  name: string;
  to: string;
}) {
  const pathname = useLocation().pathname;

  const classes = {
    backgroundColor: pathname === to ? "primary.main" : "white",
    color: pathname === to ? "white" : "black",
  };

  return (
    <ListItem
      sx={{
        ...classes,
        padding: 0,
      }}
    >
      <ListItemButton component={Link} to={to}>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
