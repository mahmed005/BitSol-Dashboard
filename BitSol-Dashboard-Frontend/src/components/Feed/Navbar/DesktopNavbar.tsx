import { Stack } from "@mui/material";
import logo from "../../../assets/bitsol_dashboard_logo.svg";
import pfp from "../../../assets/pfp_dashboard.svg";
import { listItems } from "./CustomList";
import CustomNavItem from "./CustomNavItem";

export default function DesktopNavbar() {
  return (
    <Stack
      sx={{
        paddingY: "0.5rem",
        paddingX: "1.5rem",
      }}
      display={{
        xs: "none",
        sm: "flex",
      }}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <img src={logo} alt="BitSol-logo" />
      <Stack direction={"row"} spacing={4}>
        <Stack direction={"row"} spacing={2.5}>
          {listItems.map((item, index) => (
            <CustomNavItem name={item.name} to={item.to} key={index} />
          ))}
        </Stack>
        <img src={pfp} alt="Profile Pic" />
      </Stack>
    </Stack>
  );
}
