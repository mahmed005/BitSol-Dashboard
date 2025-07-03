import { Stack } from "@mui/material";
import EmailNotifications from "../components/Settings/Notifications/EmailNotificaions";
import WebsiteNotifications from "../components/Settings/Notifications/WebsiteNotifications";
import { useForm, type SubmitHandler } from "react-hook-form";
import CustomButton from "../components/UI/CustomButton";

export type FormInputs = {
  weeklyChecked: boolean;
  accountSummary: boolean;
  newFollower: boolean;
  postLike: boolean;
  followPost: boolean;
  pstAddToColl: boolean;
  pstDownload: boolean;
};

export default function NotificationsPage() {
  const { register, handleSubmit } = useForm<FormInputs>();

  const submitHandler: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <Stack maxWidth={{ sm: "60%", xs: "90%" }} marginTop={3}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col basis-full gap-[2rem]"
      >
        <EmailNotifications register={register} />
        <WebsiteNotifications register={register} />
        <Stack direction={"row"} spacing={2}>
          <CustomButton
            type="submit"
            text="Save Changes"
            importance="contained"
          />
          <CustomButton
            text="Cancel"
            importance="outlined"
            classes={{
              color: "black",
              borderColor: "customGrey.main",
            }}
          />
        </Stack>
      </form>
    </Stack>
  );
}
