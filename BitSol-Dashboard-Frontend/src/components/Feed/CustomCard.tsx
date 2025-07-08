import { Card, type SxProps, type Theme } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  classes?: SxProps<Theme> | undefined;
};

export default function CustomCard(props: PropsWithChildren<Props>) {
  return (
    <Card
      sx={{
        padding: "0.5rem",
        ...props.classes,
        backgroundColor: "white",
        border: 0,
        boxShadow: "none",
      }}
    >
      {props.children}
    </Card>
  );
}
