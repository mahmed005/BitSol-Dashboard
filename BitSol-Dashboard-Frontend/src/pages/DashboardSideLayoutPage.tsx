import { Box, Grid, Stack } from "@mui/material";
import ProfileShower from "../components/Feed/ProfileShower";
import { Outlet, useLocation } from "react-router";
import AddFriendsSection from "../components/Feed/AddFriendsSection";
import Contributors from "../components/Feed/Contributors";
import StoriesList from "../components/Feed/StoriesList";
import Info from "../components/Feed/Info";
import CreatePost from "../components/Feed/CreatePost";
import pic1 from "../assets/pic_1 (1).png";
import pic2 from "../assets/company (2).png";
import pic3 from "../assets/event.jpg";
import EventPlanner from "../components/Feed/Events/EventPlanner";

const contacts = [
  {
    main: "Lise",
    secondary: "Bergen, Norway",
    imgSrc: pic1,
  },
  {
    main: "Lise",
    secondary: "Bergen, Norway",
    imgSrc: pic1,
  },
  {
    main: "Lise",
    secondary: "Bergen, Norway",
    imgSrc: pic1,
  },
  {
    main: "Lise",
    secondary: "Bergen, Norway",
    imgSrc: pic1,
  },
];

const companies = [
  {
    main: "Marone LLC.",
    secondary: "Portland, Illinois",
    imgSrc: pic2,
  },
  {
    main: "Marone LLC.",
    secondary: "Portland, Illinois",
    imgSrc: pic2,
  },
  {
    main: "Marone LLC.",
    secondary: "Portland, Illinois",
    imgSrc: pic2,
  },
  {
    main: "Marone LLC.",
    secondary: "Portland, Illinois",
    imgSrc: pic2,
  },
];

const events = [
  {
    main: "Interaction",
    secondary: "Jul 24, 2024",
    imgSrc: pic3,
  },
  {
    main: "Interaction",
    secondary: "Jul 24, 2024",
    imgSrc: pic3,
  },
  {
    main: "Interaction",
    secondary: "Jul 24, 2024",
    imgSrc: pic3,
  },
  {
    main: "Interaction",
    secondary: "Jul 24, 2024",
    imgSrc: pic3,
  },
];

export default function DashboardSideLayoutPage() {
  const pathname = useLocation().pathname;
  const displayProfile = pathname === "/" || pathname === "";
  const displayCompanies = pathname === "/jobs" || pathname === "/jobs/";
  const displayEvents = pathname === "/events" || pathname === "/events/";

  return (
    <Box
      sx={{
        backgroundColor: "#EEF4FD",
      }}
      width={"100dvw"}
      marginTop={"10dvh"}
      minHeight={"90dvh"}
      padding={"1rem"}
    >
      <Grid container spacing={4}>
        <Grid size={3}>
          <Stack spacing={3}>
            {displayProfile && <ProfileShower />}
            <AddFriendsSection />
            <Contributors />
            {displayEvents && <EventPlanner />}
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack spacing={3}>
            <StoriesList />
            <CreatePost />
            <Outlet />
          </Stack>
        </Grid>
        <Grid size={3}>
          <Stack spacing={3}>
            <Info items={contacts} heading="Contacts" />
            {displayCompanies && (
              <Info type="Company" items={companies} heading="Top Comapnies" />
            )}
            {displayEvents && (
              <Info items={events} type="Event" heading="Upcoming Events" />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
