import { Box } from "@mui/material";
import StoryContainer from "./StoryContainer";
import AddButton from "../UI/AddButton";

export default function CreateStory({ imgSrc }: { imgSrc: string }) {
  return (
    <StoryContainer imgSrc={imgSrc}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        top={"70%"}
        height={"30%"}
        width={"100%"}
        position={"absolute"}
      >
        <span>Create Story</span>
        <AddButton
          classes={{
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Box>
    </StoryContainer>
  );
}
