import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  styled,
  Typography,
} from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import googleLogo from "../../../assets/google_logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

type FormInputs = {
  email: string;
  password: string;
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

export default function LoginForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  function handleForgotPasswordClick() {
    navigate("/auth?mode=forgot-password");
  }

  function handleToggleShowClick() {
    setPasswordShow((prevState) => !prevState);
  }

  function handleSignUpClick() {
    navigate("/join-us");
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
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="password-input">
              Create password*
            </InputLabel>
            <OutlinedInput
              sx={{
                marginTop: "1.5rem",
              }}
              type={passwordShow ? "text" : "password"}
              id="password-input"
              placeholder="Enter password"
              {...field}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                    }}
                    onClick={handleToggleShowClick}
                  >
                    {passwordShow ? "Hide" : "Show"}
                  </Button>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
      <Button
        onClick={handleForgotPasswordClick}
        sx={{
          color: "primary.main",
          alignSelf: "flex-end",
        }}
        variant="text"
      >
        Forgot Password
      </Button>
      <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
        Login
      </Button>
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="body2"
      >
        Or
      </Typography>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <Box component={"img"} src={googleLogo} />
        <Box color={"black"} component={"span"}>
          Login with Google
        </Box>
      </Button>
      <Box
        alignSelf={"center"}
        display={"flex"}
        alignItems={"center"}
        gap={"0.25rem"}
      >
        <Typography variant="body2">Don't have an account?</Typography>
        <Button
          onClick={handleSignUpClick}
          sx={{
            color: "primary.main",
          }}
          variant="text"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
