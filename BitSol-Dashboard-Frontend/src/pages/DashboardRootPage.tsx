import { Box } from "@mui/material";
import Navbar from "../components/Feed/Navbar/Navbar";
import { Outlet } from "react-router";
import NotificationProvider from "../contexts/NotificationProvider";

export default function DashboardRootPage() {
  return (
    <Box>
      <NotificationProvider>
        <Navbar />
      </NotificationProvider>
      <Outlet />
    </Box>
  );
}
