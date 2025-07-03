import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import type { FormInputs } from "../../../pages/NotificationsPage";
import type { Path, UseFormRegister } from "react-hook-form";

export default function WebsiteNotificationItem({
  name,
  register,
  label,
}: {
  name: Path<FormInputs>;
  register: UseFormRegister<FormInputs>;
  label: string;
}) {
  return (
    <FormGroup
      sx={{
        padding: "0",
      }}
    >
      <FormControlLabel
        {...register(name)}
        control={<Checkbox />}
        label={label}
      />
    </FormGroup>
  );
}
