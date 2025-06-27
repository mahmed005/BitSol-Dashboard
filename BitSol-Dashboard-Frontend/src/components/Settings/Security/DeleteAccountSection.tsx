import { Stack, Typography } from "@mui/material";
import CustomButton from "../../UI/CustomButton";

export default function DeleteAccountSection() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Delete Account</Typography>
      <Typography variant="body2">
        Would you like to delete your account? This account contains 1388 posts.
        Deleting your account will remove all the content associated with it.
      </Typography>
      <CustomButton
        text="I want to delete my account"
        classes={{
          textDecoration: "underline",
          alignSelf: "flex-start",
          color: "error.main",
        }}
        importance="text"
      />
    </Stack>
  );
}
