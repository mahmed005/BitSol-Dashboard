import { Stack } from "@mui/material";
import ProfileShower from "../components/Settings/General/ProfileShower";
import DataDisplay from "../components/Settings/General/DataDislpay";
import OnlinePresence from "../components/Settings/General/OnlinePresence";

export default function GeneralPage() {
  return (
    <Stack marginTop={3} spacing={4.5}>
      <ProfileShower />
      <DataDisplay />
      <OnlinePresence />
    </Stack>
  );
}
