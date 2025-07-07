import { Box, Grid, Stack } from "@mui/material";
import ProfileShower from "../components/Feed/ProfileShower";
import { useLocation } from "react-router";

export default function DashboardSideLayoutPage() {
  const pathname = useLocation().pathname;
  const displayProfile = pathname === "/" || pathname === "";

  return (
    <Box
      sx={{
        backgroundColor: "#EEF4FD",
      }}
      width={"100dvw"}
      position={"fixed"}
      top={"10dvh"}
      left={0}
      minHeight={"90dvh"}
      padding={"1rem"}
    >
      <Grid container>
        <Grid size={3}>
          <Stack spacing={3}>{displayProfile && <ProfileShower />}</Stack>
        </Grid>
        <Grid size={6}></Grid>
        <Grid size={3}></Grid>
      </Grid>
    </Box>
  );
}
