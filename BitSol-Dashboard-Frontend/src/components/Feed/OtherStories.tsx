import { Avatar, Typography } from "@mui/material";
import StoryContainer from "./StoryContainer";

export default function OtherStories({
  imgSrc,
  name,
  accSrc,
}: {
  imgSrc: string;
  name: string;
  accSrc: string;
}) {
  return (
    <StoryContainer imgSrc={imgSrc}>
      <Avatar
        alt={name}
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          border: "2px solid white",
        }}
        src={accSrc}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "80%",
          left: "10%",
        }}
        color="white"
      >
        {name}
      </Typography>
    </StoryContainer>
  );
}
