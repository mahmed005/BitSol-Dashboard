import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  isOpened: boolean;
  id: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

export default function LeftListItem({
  isOpened,
  id,
  setSelected,
  children,
}: PropsWithChildren<Props>) {
  function handleClick() {
    setSelected(id);
  }

  return (
    <ListItem sx={{}}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          backgroundColor: isOpened ? "white" : "transparent",
          width: "4rem",
          height: "4rem",
          maxHeight: "4rem",
          maxWidth: "4rem",
          overflow: "hidden",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          "& .MuiListItemIcon-root": {
            minWidth: "auto",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ListItemIcon>{children}</ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}
