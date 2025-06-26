import { Drawer, Stack } from "@mui/material";
import NavbarList from "./NavbarList";
import Profile from "./Profile";
import Navbar from "./Navbar";

export default function CustomDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose(): void;
}) {
  return (
    <Drawer
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
      }}
      open={open}
      onClose={onClose}
    >
      <Stack px={3} py={4} spacing={4}>
        <Profile />
        <NavbarList />
      </Stack>
    </Drawer>
  );
}
