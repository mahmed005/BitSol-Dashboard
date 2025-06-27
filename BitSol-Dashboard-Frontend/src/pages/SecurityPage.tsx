import { Stack } from "@mui/material";
import EmailDetail from "../components/Settings/Security/EmailDetail";
import PasswordChangeForm from "../components/Settings/Security/PasswordChangeForm";
import DeleteAccountSection from "../components/Settings/Security/DeleteAccountSection";

export default function SecurityPage() {
  return (
    <Stack
      marginTop={4}
      pl={{ xs: 2, sm: 3 }}
      spacing={4}
      width={{ xs: "90%", sm: "90%" }}
    >
      <EmailDetail />
      <PasswordChangeForm />
      <DeleteAccountSection />
    </Stack>
  );
}
