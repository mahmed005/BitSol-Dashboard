import { Stack, Typography } from "@mui/material";
import type { Path, UseFormRegister } from "react-hook-form";
import type { FormInputs } from "../../../pages/NotificationsPage";
import WebsiteNotificationItem from "./WebsiteNotificationItem";

const items = [
  { name: "newFollower" as Path<FormInputs>, label: "New Follower" },
  { name: "postLike" as Path<FormInputs>, label: "Post Like" },
  {
    name: "followPost" as Path<FormInputs>,
    label: "Someone you follow posted",
  },
  {
    name: "pstAddToColl" as Path<FormInputs>,
    label: "Post Added to Collection",
  },
  { name: "pstDownload" as Path<FormInputs>, label: "Post downloaded" },
];

export default function WebsiteNotifications({
  register,
}: {
  register: UseFormRegister<FormInputs>;
}) {
  return (
    <Stack spacing={2} alignSelf={"flex-start"}>
      <Typography fontWeight={"600"} variant="h6">
        Website Notifications
      </Typography>
      <Stack spacing={0}>
        {items.map((item, index) => (
          <WebsiteNotificationItem
            key={index}
            register={register}
            name={item.name}
            label={item.label}
          />
        ))}
      </Stack>
    </Stack>
  );
}
