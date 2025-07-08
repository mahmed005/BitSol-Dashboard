import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  imgSrc: string;
};

export default function StoryContainer(props: PropsWithChildren<Props>) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
      }}
      flexGrow={1}
      flexBasis={"auto"}
      maxWidth={"25%"}
      width={"25%"}
      position={"relative"}
      overflow={"hidden"}
      height={"15rem"}
    >
      <img className="w-full h-full" src={props.imgSrc} alt="Image" />
      {props.children}
    </Box>
  );
}
