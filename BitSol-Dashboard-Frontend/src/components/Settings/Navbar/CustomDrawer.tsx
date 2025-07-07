import { Drawer, Stack } from "@mui/material";
import NavbarList from "./NavbarList";
import CustomProfileShower from "./CustomProfileShower";

export default function CustomDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose(): void;
}) {
  return (
    <Drawer open={open} onClose={onClose}>
      <Stack px={3} py={4} spacing={4}>
        <CustomProfileShower />
        <NavbarList />
      </Stack>
    </Drawer>
  );
}
