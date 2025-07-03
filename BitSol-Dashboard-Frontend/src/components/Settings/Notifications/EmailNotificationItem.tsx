import { Stack, styled, Switch, Typography } from "@mui/material";
import type { UseFormRegister, Path } from "react-hook-form";
import type { FormInputs } from "../../../pages/NotificationsPage";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: "3rem",
  height: "1.5rem",
  padding: 0,
  borderRadius: "12px",
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(1.5rem)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "primary.main",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: "1.2rem",
    height: "1.2rem",
    borderRadius: "50%",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

export default function EmailNotificationItem({
  heading,
  text,
  name,
  register,
}: {
  heading: string;
  text: string;
  name: Path<FormInputs>;
  register: UseFormRegister<FormInputs>;
}) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flex={"1 1 100%"}
    >
      <Stack spacing={0.5}>
        <Typography variant="h6">{heading}</Typography>
        <Typography variant="body2">{text}</Typography>
      </Stack>
      <AntSwitch {...register(name)} />
    </Stack>
  );
}
