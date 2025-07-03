import { Stack, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Stack spacing={0.5}>
      <Typography
        sx={{
          fontWeight: "600",
        }}
        variant="h6"
      >
        Order History
      </Typography>
      <Typography
        sx={{
          color: "#62618F",
        }}
        variant="body2"
      >
        Manage billing information and view receips
      </Typography>
    </Stack>
  );
}
