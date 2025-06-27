import { Stack } from "@mui/material";
import UserDataDisplayItem from "./UserDataDisplayItem";

export default function DataDisplay() {
  return (
    <Stack
      spacing={1}
      width={"95%"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Stack spacing={4} direction={"row"} width={"100%"}>
        <UserDataDisplayItem heading="First name" text="Ildiko" />
        <UserDataDisplayItem heading="Last name" text="Gaspar" />
      </Stack>
      <UserDataDisplayItem heading="Location" text="emailis@example.com" />
      <UserDataDisplayItem heading="Profession" text="UI/UX Designer" />
      <UserDataDisplayItem
        isExtended={true}
        heading="Bio"
        text="Open-Source designer @ UI Design Daily"
      />
    </Stack>
  );
}
