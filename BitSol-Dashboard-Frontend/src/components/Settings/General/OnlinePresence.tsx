import { Stack, Typography } from "@mui/material";
import UserDataDisplayItem from "./UserDataDisplayItem";
import PublicIcon from "@mui/icons-material/Public";
import InstagramIcon from "@mui/icons-material/Instagram";
import CustomButton from "../../UI/CustomButton";

export default function OnlinePresence() {
  return (
    <Stack spacing={3} width={"90%"}>
      <Typography variant="h6">Online presence</Typography>
      <Stack spacing={2} width={"100%"}>
        <UserDataDisplayItem
          text="https://dribbble.com/uidesigndaily"
          Icon={<PublicIcon />}
        />
        <UserDataDisplayItem
          text="https://instagram.com/uidesigndaily"
          Icon={<InstagramIcon />}
        />
      </Stack>
      <CustomButton
        classes={{
          alignSelf: "flex-start",
        }}
        importance="text"
        text="+ Add Other"
      />
    </Stack>
  );
}
