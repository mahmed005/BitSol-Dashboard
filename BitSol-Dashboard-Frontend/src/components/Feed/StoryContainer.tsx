import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  imgSrc: string;
};

export default function StoryContainer(props: PropsWithChildren<Props>) {
  return (
    <Box position={"relative"}>
      <img className="w-full h-full" src={props.imgSrc} alt="Image" />
      {props.children}
    </Box>
  );
}
