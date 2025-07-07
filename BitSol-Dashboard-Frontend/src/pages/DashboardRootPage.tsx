import { Box } from "@mui/material";
import Navbar from "../components/Feed/Navbar/Navbar";
import { Outlet } from "react-router";

export default function DashboardRootPage() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}
