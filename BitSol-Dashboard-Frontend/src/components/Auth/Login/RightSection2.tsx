import { Grid, Stack, Typography } from "@mui/material";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function RightSection2() {
  return (
    <Grid size={{ xs: 12, md: 7 }} p={{ xs: 2, md: 6 }} minHeight={"100dvh"}>
      <Stack alignItems={"center"} justifyContent={"center"} height={"100%"}>
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
            Forgot Password?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#8692A6",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            Please enter the email you would like your password reset
            information sent to
          </Typography>
          <ForgotPasswordForm />
        </Stack>
      </Stack>
    </Grid>
  );
}
