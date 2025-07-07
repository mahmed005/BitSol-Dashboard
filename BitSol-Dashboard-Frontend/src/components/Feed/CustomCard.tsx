import { Card, type SxProps, type Theme } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  classes?: SxProps<Theme> | undefined;
};

export default function CustomCard(props: PropsWithChildren<Props>) {
  return (
    <Card
      sx={{
        ...props.classes,
        backgroundColor: "white",
        padding: "0.5rem",
        border: 0,
        boxShadow: "none",
      }}
    >
      {props.children}
    </Card>
  );
}
