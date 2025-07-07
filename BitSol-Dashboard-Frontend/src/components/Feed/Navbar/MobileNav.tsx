import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useEffect, useState } from "react";
import CustomDrawer from "./CustomDrawer";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

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
        <Typography variant="h6">{"Feed"}</Typography>
      </Stack>
      <CustomDrawer open={open} handleClose={handleClose} />
    </>
  );
}
