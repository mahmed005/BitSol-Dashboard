import { Drawer, Stack } from "@mui/material";
import CustomProfileShower from "../../Settings/Navbar/CustomProfileShower";
import CustomList from "./CustomList";

export default function CustomDrawer({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose(): void;
}) {
  return (
    <Drawer open={open} onClose={handleClose}>
      <Stack py={4} px={1} spacing={3}>
        <CustomProfileShower />
        <CustomList />
      </Stack>
    </Drawer>
  );
}
