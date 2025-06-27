import { Stack, Typography } from "@mui/material";
import CustomButton from "../../UI/CustomButton";

export default function EmailDetail() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Email Address</Typography>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        direction={"row"}
      >
        <Typography variant="body2">
          Your email address is
          <span className="font-semibold"> emailis@example.com</span>
        </Typography>
        <CustomButton text="Change" importance="text" />
      </Stack>
    </Stack>
  );
}
