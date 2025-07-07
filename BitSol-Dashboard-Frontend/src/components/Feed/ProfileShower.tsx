import { Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import pfp from "../../assets/feed_profile_show.svg";

export default function ProfileShower() {
  return (
    <CustomCard
      classes={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={1}>
        <img src={pfp} alt="Profile Pic" />
        <Stack>
          <Typography fontWeight={600} variant="h6">
            Ildiko Gaspar
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "customGrey.main",
              textAlign: "center",
              marginTop: -1,
            }}
          >
            @igaspar
          </Typography>
        </Stack>
      </Stack>
    </CustomCard>
  );
}
