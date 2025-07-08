import { Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import CustomButton from "../UI/CustomButton";
import pic1 from "../../assets/pic_1 (1).png";
import pic2 from "../../assets/pic_1 (2).png";
import pic3 from "../../assets/pic_1 (3).png";
import AddFriendItem from "./AddFriendItem";

const suggestions = [
  {
    name: "Josh",
    imgSrc: pic1,
  },
  {
    name: "Christer",
    imgSrc: pic2,
  },
  {
    name: "Lise",
    imgSrc: pic3,
  },
];

export default function AddFriendsSection() {
  return (
    <CustomCard
      classes={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        width: "100%",
        paddingY: "1rem",
        paddingX: "0.5rem",
        overflow: "visible",
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
      <Stack direction={"row"} justifyContent={"space-evenly"} spacing={0.5}>
        {suggestions.map((suggestion, index) => (
          <AddFriendItem
            name={suggestion.name}
            imgSrc={suggestion.imgSrc}
            key={index}
          />
        ))}
      </Stack>
    </CustomCard>
  );
}
