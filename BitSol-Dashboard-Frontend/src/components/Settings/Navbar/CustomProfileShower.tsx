import { Typography } from "@mui/material";
import Profile from "../Profile";

export default function CustomProfileShower() {
  return (
    <Profile width="3.5rem">
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
    </Profile>
  );
}
