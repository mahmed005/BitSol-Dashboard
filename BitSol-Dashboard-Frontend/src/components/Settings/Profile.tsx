import { Stack } from "@mui/material";
import profilePicSmall from "../../assets/profile_pic.png";
import type { ReactNode } from "react";
import profilePicBig from "../../assets/profile_pic_big.png";

export default function Profile({
  width,
  children,
}: {
  width: "3.5rem" | "8.5rem";
  children: ReactNode;
}) {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1.5} px={2}>
      <img
        className="w-[5rem] md:w-auto"
        src={width === "3.5rem" ? profilePicSmall : profilePicBig}
        alt="profile-picture"
      />
      <Stack>{children}</Stack>
    </Stack>
  );
}
