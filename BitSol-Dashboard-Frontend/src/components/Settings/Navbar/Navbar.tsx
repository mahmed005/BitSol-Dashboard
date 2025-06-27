import { IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarList from "./NavbarList";
import { useState } from "react";
import CustomDrawer from "./CustomDrawer";
import CustomProfileShower from "./CustomProfileShower";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let subPath = window.location.pathname.split("settings")[1];
  if (subPath === "") subPath = "General";

  function onDrawerClose() {
    setOpen(false);
  }

  return (
    <>
      <Stack
        display={{ xs: "flex", sm: "none" }}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
      >
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{subPath}</Typography>
      </Stack>
      <Stack
        display={{ xs: "none", sm: "flex" }}
        gap={4}
        direction={"column"}
        px={3}
        py={8}
        minWidth={"12rem"}
      >
        <CustomProfileShower />
        <NavbarList />
      </Stack>
      <CustomDrawer open={open} onClose={onDrawerClose} />
    </>
  );
}
