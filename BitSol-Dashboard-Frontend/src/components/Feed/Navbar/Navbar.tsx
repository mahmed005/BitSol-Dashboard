import { Box } from "@mui/material";
import MobileNav from "./MobileNav";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
  return (
    <Box
      position={"fixed"}
      top={"0"}
      left={"0"}
      height={"10dvh"}
      width={"100dvw"}
      zIndex={100}
      sx={{
        backgroundColor: "white",
      }}
    >
      <MobileNav />
      <DesktopNavbar />
    </Box>
  );
}
