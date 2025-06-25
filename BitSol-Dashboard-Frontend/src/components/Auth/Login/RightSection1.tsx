import { Grid, Stack, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

export default function RightSection1() {
  return (
    <Grid size={{ xs: 12, md: 7 }} p={{ xs: 2, md: 6 }} minHeight={"100dvh"}>
      <Stack height={"100%"} justifyContent={"center"}>
        <Stack
          spacing={"1rem"}
          maxWidth={{ sm: "80%", xs: "95%" }}
          pl={{ xs: 2, sm: 8 }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1.875rem",
            }}
            variant="h2"
          >
            Login
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#8692A6",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            Please Sign in to continue
          </Typography>
          <LoginForm />
        </Stack>
      </Stack>
    </Grid>
  );
}
