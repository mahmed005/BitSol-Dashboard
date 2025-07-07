import { Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import CustomButton from "../UI/CustomButton";

export default function AddFriendsSection() {
  return (
    <CustomCard
      classes={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        width: "100%",
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6">Add Friends</Typography>
        <CustomButton
          text="See All"
          importance="text"
          classes={{
            textDecoration: "underline",
          }}
        />
      </Stack>
      
    </CustomCard>
  );
}
