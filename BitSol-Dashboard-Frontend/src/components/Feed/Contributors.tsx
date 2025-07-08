import { Avatar, AvatarGroup, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import pic1 from "../../assets/pic_1 (1).png";
import pic2 from "../../assets/pic_1 (2).png";
import pic3 from "../../assets/pic_1 (3).png";
import pic4 from "../../assets/pic_1 (4).png";

export default function Contributors() {
  return (
    <CustomCard
      classes={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography variant="h6">Contributors</Typography>
      <AvatarGroup
        total={10}
        sx={{
          alignSelf: "flex-start",
          "& .MuiAvatar-root": { borderColor: "primary.main" },
        }}
        max={5}
      >
        <Avatar src={pic1} />
        <Avatar src={pic2} />
        <Avatar src={pic3} />
        <Avatar src={pic4} />
      </AvatarGroup>
    </CustomCard>
  );
}
