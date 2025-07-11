import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router";

interface ListItemProps {
  icon?: React.ReactElement<unknown>;
  primary: string;
  to: string;
}

export default function CustomListItem(props: ListItemProps) {
  const { icon, primary, to } = props;
  const pathName = useLocation().pathname;
  const classes =
    pathName === to || pathName.slice(0, pathName.length - 1) === to
      ? {
          backgroundColor: "primary.main",
          color: "white",
        }
      : null;
  const colorClass = classes?.color;

  return (
    <ListItem
      sx={{
        ...classes,
        padding: "0",
        "& .link": {
          flexBasis: "100%",
          flexShrink: "1",
          gap: "0.5rem",
        },
      }}
    >
      <ListItemButton className="link" component={Link} to={to}>
        {icon ? (
          <ListItemIcon
            sx={{
              color: colorClass,
              flexShrink: 1,
              minWidth: "1.5rem",
            }}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText
          sx={{
            minWidth: "3rem",
          }}
          primary={primary}
        />
      </ListItemButton>
    </ListItem>
  );
}
