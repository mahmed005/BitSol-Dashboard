import { Stack, Typography } from "@mui/material";
import profilePic from "../../../assets/profile_pic.png";

export default function Profile() {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1.5} px={2}>
      <img className="w-14" src={profilePic} alt="profile-picture" />
      <Stack>
        <Typography
          sx={{
            fontWeight: "600",
            marginBottom: "-0.4rem",
          }}
          variant="subtitle1"
        >
          Ildiko Gaspar
        </Typography>
        <Typography
          sx={{
            color: "customGrey.main",
          }}
          variant="body2"
        >
          @igaspar
        </Typography>
      </Stack>
    </Stack>
  );
}
