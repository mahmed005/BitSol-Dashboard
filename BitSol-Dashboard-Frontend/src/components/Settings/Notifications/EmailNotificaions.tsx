import { Stack, Typography } from "@mui/material";
import EmailNotificationItem from "./EmailNotificationItem";
import type { FormInputs } from "../../../pages/NotificationsPage";
import type { Path, UseFormRegister } from "react-hook-form";

export default function EmailNotifications({
  register,
}: {
  register: UseFormRegister<FormInputs>;
}) {
  return (
    <Stack spacing={2}>
      <Typography
        sx={{
          fontWeight: "600",
        }}
        variant="h5"
      >
        Email Notifications
      </Typography>
      {[
        {
          heading: "Weekly newsletter",
          text: "A small text about what the newsletters might contain.",
          name: "weeklyChecked" as Path<FormInputs>,
        },
        {
          heading: "Account summary",
          text: "A small text about what the newsletters might contain.",
          name: "accountSummary" as Path<FormInputs>,
        },
      ].map((item, index) => (
        <EmailNotificationItem
          key={index}
          register={register}
          heading={item.heading}
          text={item.text}
          name={item.name}
        />
      ))}
    </Stack>
  );
}
