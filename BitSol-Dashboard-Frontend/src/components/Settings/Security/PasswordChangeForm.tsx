import { Stack, Typography } from "@mui/material";
import Input from "../../UI/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import CustomButton from "../../UI/CustomButton";

export type FormValues = {
  newPassword: string;
  currentPassword: string;
};

export default function PasswordChangeForm() {
  const { handleSubmit, register } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack spacing={2} width={"100%"}>
        <Typography variant="h6">Password</Typography>
        <Stack width={"100%"} direction={"row"} spacing={3}>
          <Input<FormValues>
            register={register}
            name="newPassword"
            label="New Password"
            placeholder="Enter New Password"
          />
          <Input<FormValues>
            name="currentPassword"
            register={register}
            label="Current Password"
            placeholder="Enter Current Password"
          />
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="body2">
            Can't remember your current password?
          </Typography>
          <CustomButton text=" Reset your password" importance="text" />
        </Stack>
        <CustomButton
          type="submit"
          classes={{
            alignSelf: "flex-start",
          }}
          text="Save Password"
          importance="contained"
        />
      </Stack>
    </form>
  );
}
