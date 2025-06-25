import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  styled,
} from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type FormInputs = {
  email: string;
};

const CustomInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "customGrey.main",
    width: "100%",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    fontFamily: [theme.typography.fontFamily].join(","),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

export default function ForgotPasswordForm() {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "",
    },
  });
  const navigate = useNavigate();

  function handleBackLoginClick() {
    navigate("/auth");
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <Box
      sx={{
        color: "customGrey.main",
      }}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      component={"form"}
    >
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="email-input">
              Email
            </InputLabel>
            <CustomInput
              placeholder="Enter email"
              {...field}
              id="email-input"
            />
          </FormControl>
        )}
      />
      <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
        Request Reset Link
      </Button>
      <Button
        onClick={handleBackLoginClick}
        sx={{
          color: "primary.main",
        }}
        variant="text"
      >
        Back to Login
      </Button>
    </Box>
  );
}
