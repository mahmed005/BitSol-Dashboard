import { Stack } from "@mui/material";
import CreateStory from "./CreateStory";
import pfpStory from "../../assets/pfp_story.png";
import CustomCard from "./CustomCard";
import storyImg1 from "../../assets/story_img (1).png";
import storyImg2 from "../../assets/story_img (2).png";
import storyImg3 from "../../assets/story_img (3).png";
import pic1 from "../../assets/pic_1 (1).png";
import pic2 from "../../assets/pic_1 (2).png";
import pic3 from "../../assets/pic_1 (3).png";
import OtherStories from "./OtherStories";

const stories = [
  {
    imgSrc: storyImg1,
    name: "Guy Hawkins",
    accSrc: pic1,
  },
  {
    name: "Cody Fisher",
    imgSrc: storyImg2,
    accSrc: pic2,
  },
  {
    name: "Floyd Miles",
    imgSrc: storyImg3,
    accSrc: pic3,
  },
];

export default function StoriesList() {
  return (
    <CustomCard>
      <Stack spacing={2} direction="row">
        <CreateStory imgSrc={pfpStory} />
        {stories.map((story, index) => (
          <OtherStories
            key={index}
            imgSrc={story.imgSrc}
            accSrc={story.accSrc}
            name={story.name}
          />
        ))}
      </Stack>
    </CustomCard>
  );
}
